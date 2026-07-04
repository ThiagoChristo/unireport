<template>
  <aside id="sidebar" class="bg-slate-900 border-r border-slate-800 flex flex-col h-full overflow-hidden w-[280px]">
    <!-- Header Logo -->
    <div class="p-6 border-b border-slate-800 flex-shrink-0">
      <div class="font-heading text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
        <span class="text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.3)]">Uni</span>Report
      </div>
      <div class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
        Projeto Interdisciplinar I
      </div>
    </div>
    
    <!-- Barra de Progresso -->
    <div class="px-6 py-4 border-b border-slate-800 flex-shrink-0">
      <div class="flex justify-between text-xs font-semibold text-slate-400 mb-2">
        <span>Progresso Geral</span>
        <span class="text-sky-400">{{ store.progress }}%</span>
      </div>
      <div class="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
        <div 
          class="h-full bg-gradient-to-r from-sky-400 to-purple-500 rounded-full transition-all duration-300"
          :style="{ width: `${store.progress}%` }"
        ></div>
      </div>
    </div>

    <!-- Navegação de Abas -->
    <nav class="flex-1 overflow-y-auto py-4">
      <ul class="space-y-0.5 px-3">
        <li 
          v-for="item in navItems" 
          :key="item.id"
          class="flex items-center px-4 py-2.5 rounded-lg text-xs font-medium cursor-pointer transition-all duration-150"
          :class="[
            item.isChecklist ? 'border-t border-slate-800/80 mt-3 pt-4 text-purple-400' : 'text-slate-400',
            store.activeSection === item.id 
              ? (item.isChecklist ? 'bg-purple-500/10 text-purple-300 font-semibold border-l-2 border-purple-500' : 'bg-sky-500/10 text-sky-400 font-semibold border-l-2 border-sky-400')
              : 'hover:bg-slate-800/30 hover:text-slate-200 border-l-2 border-transparent'
          ]"
          @click="store.activeSection = item.id"
        >
          <span class="font-mono text-[10px] opacity-60 w-5 mr-1">{{ item.num }}</span>
          {{ item.label }}
        </li>
      </ul>
    </nav>

    <!-- Rodapé com Ações -->
    <div class="p-4 border-t border-slate-800 bg-slate-950/20 flex-shrink-0 space-y-2.5">
      <!-- Botão Copiar Markdown -->
      <button 
        @click="handleCopyMarkdown" 
        class="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold py-2.5 px-4 rounded-lg text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-sky-500/10 active:scale-[0.98] transition-all"
      >
        <Copy class="w-4 h-4" />
        Copiar Markdown (.md)
      </button>

      <!-- Botão Exportar Word -->
      <button 
        @click="handleExportWord" 
        class="w-full bg-emerald-500 hover:bg-emerald-450 text-slate-950 font-bold py-2.5 px-4 rounded-lg text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/10 active:scale-[0.98] transition-all"
      >
        <FileDown class="w-4 h-4" />
        Exportar Word (.docx)
      </button>

      <!-- Ações Extras (Backup, Restaurar, Limpar) -->
      <div class="grid grid-cols-3 gap-1.5 pt-1">
        <button 
          @click="handleExportJson" 
          class="bg-slate-950 hover:bg-slate-800 border border-slate-800 text-[10px] font-semibold text-slate-400 hover:text-slate-200 py-1.5 rounded-md cursor-pointer transition-all"
          title="Backup JSON"
        >
          Backup
        </button>
        <button 
          @click="triggerImport" 
          class="bg-slate-950 hover:bg-slate-800 border border-slate-800 text-[10px] font-semibold text-slate-400 hover:text-slate-200 py-1.5 rounded-md cursor-pointer transition-all"
          title="Restaurar JSON"
        >
          Restaurar
        </button>
        <button 
          @click="handleClear" 
          class="bg-rose-500/10 hover:bg-rose-500 border border-rose-500/20 hover:border-rose-500 text-[10px] font-semibold text-rose-400 hover:text-white py-1.5 rounded-md cursor-pointer transition-all"
          title="Limpar Relatório"
        >
          Limpar
        </button>
      </div>

      <input 
        type="file" 
        ref="importFileInput" 
        @change="handleImportJson" 
        style="display: none" 
        accept=".json" 
      />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useReportStore } from '../stores/reportStore';
import { generateWordReport } from '../services/wordGenerator';
import { compileReportToMarkdown } from '../services/markdownGenerator';
import { FileDown, Copy } from 'lucide-vue-next';

const store = useReportStore();
const importFileInput = ref<HTMLInputElement | null>(null);

const navItems = [
  { id: 'capa', num: '00', label: 'Capa' },
  { id: 'introducao', num: '01', label: '1. Introdução' },
  { id: 'profissao', num: '02', label: '2. Profissão Escolhida' },
  { id: 'competencias', num: '03', label: '3. Competências' },
  { id: 'tecnologias', num: '04', label: '4. Tecnologias & Ferr.' },
  { id: 'ingresso', num: '05', label: '5. Formas de Ingresso' },
  { id: 'desafios', num: '06', label: '6. Desafios da Área' },
  { id: 'tendencias', num: '07', label: '7. Tendências & Futuro' },
  { id: 'relacao-curso', num: '08', label: '8. Relação com Curso' },
  { id: 'reflexao', num: '09', label: '9. Reflexão Pessoal' },
  { id: 'planejamento', num: '10', label: '10. Plan. de Carreira' },
  { id: 'financeiro', num: '11', label: '11. Ed. Financeira' },
  { id: 'conclusao', num: '12', label: '12. Conclusão' },
  { id: 'referencias', num: '13', label: '13. Referências' },
  { id: 'checklist', num: '✓', label: 'Checklist de Entrega', isChecklist: true }
];

const handleCopyMarkdown = async () => {
  try {
    const md = compileReportToMarkdown(store.reportData);
    await navigator.clipboard.writeText(md);
    alert("Código Markdown copiado para a área de transferência!");
  } catch (err) {
    alert("Falha ao copiar o Markdown.");
  }
};

const handleExportWord = async () => {
  try {
    await generateWordReport(store.reportData);
  } catch (err) {
    console.error("Erro ao gerar documento Word:", err);
    alert("Houve um erro ao exportar para o Word. Verifique os dados.");
  }
};

const handleExportJson = () => {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(store.reportData, null, 2));
  const dlAnchorElem = document.createElement('a');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", `UniReport_Backup_${store.reportData.aluno.replace(/\s+/g, '_') || 'Estudante'}.json`);
  dlAnchorElem.click();
};

const triggerImport = () => {
  if (importFileInput.value) {
    importFileInput.value.click();
  }
};

const handleImportJson = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = async (evt) => {
    try {
      const imported = JSON.parse(evt.target?.result as string);
      await store.importBackup(imported);
      alert("Backup JSON restaurado com sucesso no Dexie!");
    } catch (err) {
      alert("Erro ao ler o backup. Certifique-se de que é um JSON válido.");
    }
  };
  reader.readAsText(file);
  target.value = ''; // limpa input
};

const handleClear = async () => {
  if (window.confirm("Atenção: Todo o progresso do relatório será apagado do Dexie (IndexedDB). Deseja continuar?")) {
    await store.clearData();
    alert("Dados reiniciados!");
  }
};
</script>
