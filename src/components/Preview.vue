<template>
  <aside id="preview-pane-wrapper" class="bg-slate-950 border-l border-slate-800 flex flex-col h-full overflow-hidden w-full">
    <!-- Cabeçalho com Abas de Visualização -->
    <div class="bg-slate-900 border-b border-slate-800 px-6 py-4 flex justify-between items-center flex-shrink-0">
      <div class="flex gap-2">
        <button 
          @click="activeTab = 'render'"
          class="px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all"
          :class="activeTab === 'render' ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' : 'text-slate-400 hover:text-slate-200'"
        >
          Visualização Renderizada
        </button>
        <button 
          @click="activeTab = 'raw'"
          class="px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all"
          :class="activeTab === 'raw' ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' : 'text-slate-400 hover:text-slate-200'"
        >
          Código Markdown (.md)
        </button>
      </div>
      
      <div class="flex items-center gap-3">
        <button 
          @click="handleCopyMarkdown" 
          class="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all"
        >
          <Copy class="w-3.5 h-3.5" />
          Copiar MD
        </button>
        <button 
          @click="handleDownloadMarkdown" 
          class="bg-sky-500 hover:bg-sky-400 text-slate-950 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all"
        >
          <Download class="w-3.5 h-3.5" />
          Baixar .md
        </button>
        <button 
          @click="store.showPreviewMobile = false" 
          class="md:hidden text-xs font-medium text-slate-400 hover:text-slate-200 cursor-pointer"
        >
          Ocultar
        </button>
      </div>
    </div>

    <!-- Área de Exibição -->
    <div class="flex-1 overflow-y-auto p-8 bg-slate-950 scroll-smooth">
      <!-- Aba 1: Renderizado (Estilo Markdown GitHub Dark) -->
      <div v-if="activeTab === 'render'" class="max-w-3xl mx-auto space-y-8 font-sans text-slate-300 leading-relaxed text-sm">
        
        <!-- Capa/Informações Iniciais em Bloco -->
        <div class="bg-slate-900/60 border-l-4 border-sky-500 p-6 rounded-r-xl space-y-3">
          <div class="text-xs font-bold text-sky-400 uppercase tracking-wider">Centro Universitário Internacional Uninter</div>
          <h1 class="text-xl font-bold text-white uppercase">{{ store.reportData.curso || '[CURSO NÃO PREENCHIDO]' }}</h1>
          <div class="text-xs text-slate-400 font-semibold uppercase tracking-wider">Projeto Interdisciplinar I</div>
          <div class="text-md font-bold text-slate-100">Relatório: Minha Profissão em Computação</div>
          <div class="grid grid-cols-2 gap-2 text-xs text-slate-400 pt-3 border-t border-slate-800">
            <div><strong>Aluno(a):</strong> {{ store.reportData.aluno || '[Não preenchido]' }}</div>
            <div><strong>RU:</strong> {{ store.reportData.ru || '[Não preenchido]' }}</div>
            <div><strong>Professor:</strong> Prof. Eros Leon Kohler, Me.</div>
            <div><strong>Ano:</strong> {{ store.reportData.ano || 2026 }}</div>
          </div>
        </div>

        <hr class="border-slate-800" />

        <!-- 1. Introdução -->
        <div class="space-y-3">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="text-sky-500">#</span> 1. Introdução
          </h2>
          <p>
            Neste trabalho, é apresentada uma pesquisa sobre a profissão/área de atuação de 
            <strong class="text-sky-400">{{ store.reportData.intro_profissao || '[profissão ou área escolhida]' }}</strong>. 
            A escolha desta área justifica-se pelo seguinte motivo:
          </p>
          <blockquote class="border-l-4 border-slate-700 pl-4 italic text-slate-400 bg-slate-900/30 py-2 rounded-r-lg">
            {{ store.reportData.intro_motivo || '[explicação do motivo da escolha não preenchida]' }}
          </blockquote>
          <p>
            O objetivo principal deste relatório é analisar o perfil deste profissional, as competências e tecnologias envolvidas no dia a dia da profissão, as formas de inserção no mercado de trabalho e estabelecer uma reflexão crítica de carreira alinhada aos objetivos do curso.
          </p>
        </div>

        <hr class="border-slate-800" />

        <!-- 2. Profissão Escolhida -->
        <div class="space-y-4">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="text-sky-500">#</span> 2. Profissão ou área escolhida
          </h2>
          
          <table class="w-full border-collapse border border-slate-800 text-left text-xs text-slate-300">
            <thead>
              <tr class="bg-slate-900 text-slate-100">
                <th class="border border-slate-800 px-4 py-2 w-1/3">Campo</th>
                <th class="border border-slate-800 px-4 py-2 w-2/3">Informação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-slate-800 px-4 py-2 font-bold bg-slate-900/20">Profissão/Área Pesquisada</td>
                <td class="border border-slate-800 px-4 py-2">{{ store.reportData.intro_profissao || '[Não preenchido]' }}</td>
              </tr>
            </tbody>
          </table>

          <div class="space-y-2">
            <h3 class="text-sm font-bold text-slate-200">2.1 O que faz esse profissional?</h3>
            <ul class="list-disc pl-5 space-y-1 text-slate-300">
              <li v-for="(act, idx) in filterList(store.reportData.atividades)" :key="idx">{{ act }}</li>
              <li v-if="filterList(store.reportData.atividades).length === 0" class="text-slate-500 italic">[Nenhuma atividade cadastrada]</li>
            </ul>
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-bold text-slate-200">2.2 Onde esse profissional pode atuar?</h3>
            <ul class="list-disc pl-5 space-y-1 text-slate-300">
              <li v-for="(sec, idx) in filterList(store.reportData.setores)" :key="idx">{{ sec }}</li>
              <li v-if="filterList(store.reportData.setores).length === 0" class="text-slate-500 italic">[Nenhum setor cadastrado]</li>
            </ul>
          </div>
        </div>

        <hr class="border-slate-800" />

        <!-- 3. Competências -->
        <div class="space-y-4">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="text-sky-500">#</span> 3. Competências necessárias
          </h2>

          <div class="space-y-2">
            <h3 class="text-sm font-bold text-slate-200">3.1 Competências técnicas (Hard Skills)</h3>
            <table class="w-full border-collapse border border-slate-800 text-left text-xs text-slate-300">
              <thead>
                <tr class="bg-slate-900 text-slate-100">
                  <th class="border border-slate-800 px-4 py-2 w-1/3">Competência Técnica</th>
                  <th class="border border-slate-800 px-4 py-2 w-2/3">Por que ela é importante?</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(c, idx) in store.reportData.comp_tecnicas" :key="idx">
                  <td class="border border-slate-800 px-4 py-2 font-bold">{{ c.nome || '[Não preenchido]' }}</td>
                  <td class="border border-slate-800 px-4 py-2">{{ c.desc || '[Não preenchido]' }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-bold text-slate-200">3.2 Competências comportamentais (Soft Skills)</h3>
            <table class="w-full border-collapse border border-slate-800 text-left text-xs text-slate-300">
              <thead>
                <tr class="bg-slate-900 text-slate-100">
                  <th class="border border-slate-800 px-4 py-2 w-1/3">Competência Comportamental</th>
                  <th class="border border-slate-800 px-4 py-2 w-2/3">Por que ela é importante?</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(c, idx) in store.reportData.comp_comportamentais" :key="idx">
                  <td class="border border-slate-800 px-4 py-2 font-bold">{{ c.nome || '[Não preenchido]' }}</td>
                  <td class="border border-slate-800 px-4 py-2">{{ c.desc || '[Não preenchido]' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <hr class="border-slate-800" />

        <!-- 4. Tecnologias -->
        <div class="space-y-3">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="text-sky-500">#</span> 4. Tecnologias, ferramentas e conhecimentos utilizados
          </h2>
          <table class="w-full border-collapse border border-slate-800 text-left text-xs text-slate-300">
            <thead>
              <tr class="bg-slate-900 text-slate-100">
                <th class="border border-slate-800 px-4 py-2 w-1/3">Tecnologia / Ferramenta</th>
                <th class="border border-slate-800 px-4 py-2 w-2/3">Como é usada na profissão?</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(t, idx) in store.reportData.tecnologias" :key="idx">
                <td class="border border-slate-800 px-4 py-2 font-bold">{{ t.nome || '[Não preenchido]' }}</td>
                <td class="border border-slate-800 px-4 py-2">{{ t.desc || '[Não preenchido]' }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr class="border-slate-800" />

        <!-- 5. Formas de Ingresso -->
        <div class="space-y-3">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="text-sky-500">#</span> 5. Formas de ingresso na área
          </h2>
          <ul class="list-disc pl-5 space-y-1 text-slate-300">
            <li v-for="(ing, idx) in filterList(store.reportData.ingresso)" :key="idx">{{ ing }}</li>
            <li v-if="filterList(store.reportData.ingresso).length === 0" class="text-slate-500 italic">[Nenhuma forma de ingresso cadastrada]</li>
          </ul>
        </div>

        <hr class="border-slate-800" />

        <!-- 6. Desafios -->
        <div class="space-y-3">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="text-sky-500">#</span> 6. Desafios da profissão
          </h2>
          <table class="w-full border-collapse border border-slate-800 text-left text-xs text-slate-300">
            <thead>
              <tr class="bg-slate-900 text-slate-100">
                <th class="border border-slate-800 px-4 py-2 w-1/3">Desafio Identificado</th>
                <th class="border border-slate-800 px-4 py-2 w-2/3">Como este desafio pode ser enfrentado?</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(d, idx) in store.reportData.desafios" :key="idx">
                <td class="border border-slate-800 px-4 py-2 font-bold">{{ d.nome || '[Não preenchido]' }}</td>
                <td class="border border-slate-800 px-4 py-2">{{ d.desc || '[Não preenchido]' }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr class="border-slate-800" />

        <!-- 7. Tendências -->
        <div class="space-y-3">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="text-sky-500">#</span> 7. Tendências e futuro da área
          </h2>
          <ul class="list-disc pl-5 space-y-1 text-slate-300">
            <li v-for="(t, idx) in filterList(store.reportData.tendencias)" :key="idx">{{ t }}</li>
            <li v-if="filterList(store.reportData.tendencias).length === 0" class="text-slate-500 italic">[Nenhuma tendência cadastrada]</li>
          </ul>
        </div>

        <hr class="border-slate-800" />

        <!-- 8. Relação com Curso -->
        <div class="space-y-3">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="text-sky-500">#</span> 8. Relação com meu curso
          </h2>
          <ul class="list-disc pl-5 space-y-1 text-slate-300">
            <li v-for="(r, idx) in filterList(store.reportData.relacao)" :key="idx">{{ r }}</li>
            <li v-if="filterList(store.reportData.relacao).length === 0" class="text-slate-500 italic">[Nenhuma relação cadastrada]</li>
          </ul>
        </div>

        <hr class="border-slate-800" />

        <!-- 9. Reflexão Pessoal -->
        <div class="space-y-4">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="text-sky-500">#</span> 9. Reflexão pessoal
          </h2>
          
          <div v-for="q in reflexoes" :key="q.id" class="space-y-1.5">
            <h3 class="text-xs font-bold text-sky-400 uppercase tracking-wide">{{ q.q }}</h3>
            <blockquote class="border-l-4 border-slate-700 pl-4 italic text-slate-400 bg-slate-900/30 py-2 rounded-r-lg">
              {{ store.reportData[q.id as keyof typeof store.reportData] || '[Não respondido]' }}
            </blockquote>
          </div>
        </div>

        <hr class="border-slate-800" />

        <!-- 10. Planejamento -->
        <div class="space-y-3">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="text-sky-500">#</span> 10. Planejamento inicial de carreira
          </h2>
          <table class="w-full border-collapse border border-slate-800 text-left text-xs text-slate-300">
            <thead>
              <tr class="bg-slate-900 text-slate-100">
                <th class="border border-slate-800 px-4 py-2 w-1/5">Prazo</th>
                <th class="border border-slate-800 px-4 py-2 w-1/4">Meta Acadêmica</th>
                <th class="border border-slate-800 px-4 py-2 w-1/4">Meta Profissional</th>
                <th class="border border-slate-800 px-4 py-2 w-3/10">Ação Prática</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(p, idx) in store.reportData.planejamento" :key="idx">
                <td class="border border-slate-800 px-4 py-2 font-bold bg-slate-900/10">{{ p.prazo }}</td>
                <td class="border border-slate-800 px-4 py-2">{{ p.acad || '[Não preenchido]' }}</td>
                <td class="border border-slate-800 px-4 py-2">{{ p.prof || '[Não preenchido]' }}</td>
                <td class="border border-slate-800 px-4 py-2">{{ p.acao || '[Não preenchido]' }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr class="border-slate-800" />

        <!-- 11. Educação Financeira -->
        <div class="space-y-4">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="text-sky-500">#</span> 11. Educação financeira aplicada à carreira
          </h2>

          <div class="space-y-2">
            <h3 class="text-sm font-bold text-slate-200">11.1 Possíveis custos para minha formação</h3>
            <table class="w-full border-collapse border border-slate-800 text-left text-xs text-slate-300">
              <thead>
                <tr class="bg-slate-900 text-slate-100">
                  <th class="border border-slate-800 px-4 py-2 w-1/3">Item</th>
                  <th class="border border-slate-800 px-4 py-2 w-1/5">Necessário agora?</th>
                  <th class="border border-slate-800 px-4 py-2 w-1/5">Valor estimado</th>
                  <th class="border border-slate-800 px-4 py-2 w-4/15">Observação</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(c, idx) in store.reportData.custos" :key="idx">
                  <td class="border border-slate-800 px-4 py-2 font-bold">{{ c.item }}</td>
                  <td class="border border-slate-800 px-4 py-2">{{ c.nec }}</td>
                  <td class="border border-slate-800 px-4 py-2">R$ {{ c.valor || '0,00' }}</td>
                  <td class="border border-slate-800 px-4 py-2 text-slate-400">{{ c.obs || '-' }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-bold text-slate-200">11.2 Prioridades financeiras</h3>
            <table class="w-full border-collapse border border-slate-800 text-left text-xs text-slate-300">
              <thead>
                <tr class="bg-slate-900 text-slate-100">
                  <th class="border border-slate-800 px-4 py-2 w-5/12">Campo</th>
                  <th class="border border-slate-800 px-4 py-2 w-7/12">Planejamento</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-slate-800 px-4 py-2 font-bold bg-slate-900/10">Minha meta financeira</td>
                  <td class="border border-slate-800 px-4 py-2">{{ store.reportData.fin_meta || '[Não preenchido]' }}</td>
                </tr>
                <tr>
                  <td class="border border-slate-800 px-4 py-2 font-bold bg-slate-900/10">Valor estimado</td>
                  <td class="border border-slate-800 px-4 py-2">R$ {{ store.reportData.fin_valor || '0,00' }}</td>
                </tr>
                <tr>
                  <td class="border border-slate-800 px-4 py-2 font-bold bg-slate-900/10">Prazo planejado</td>
                  <td class="border border-slate-800 px-4 py-2">{{ store.reportData.fin_prazo || '[Não preenchido]' }}</td>
                </tr>
                <tr>
                  <td class="border border-slate-800 px-4 py-2 font-bold bg-slate-900/10">Economia mensal necessária</td>
                  <td class="border border-slate-800 px-4 py-2">R$ {{ store.reportData.fin_mensal || '0,00' }}</td>
                </tr>
                <tr>
                  <td class="border border-slate-800 px-4 py-2 font-bold bg-slate-900/10">Ajustes de rotina necessários</td>
                  <td class="border border-slate-800 px-4 py-2">{{ store.reportData.fin_ajuste || '[Não preenchido]' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <hr class="border-slate-800" />

        <!-- 12. Conclusão -->
        <div class="space-y-4">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="text-sky-500">#</span> 12. Conclusão
          </h2>

          <div class="space-y-2">
            <h3 class="text-sm font-bold text-slate-200">Principais aprendizados obtidos:</h3>
            <ul class="list-disc pl-5 space-y-1 text-slate-300">
              <li v-for="(a, idx) in filterList(store.reportData.aprendizados)" :key="idx">{{ a }}</li>
              <li v-if="filterList(store.reportData.aprendizados).length === 0" class="text-slate-500 italic">[Não preenchido]</li>
            </ul>
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-bold text-slate-200">Contribuição desta pesquisa para a visão de carreira:</h3>
            <ul class="list-disc pl-5 space-y-1 text-slate-300">
              <li v-for="(c, idx) in filterList(store.reportData.contribuicao)" :key="idx">{{ c }}</li>
              <li v-if="filterList(store.reportData.contribuicao).length === 0" class="text-slate-500 italic">[Não preenchido]</li>
            </ul>
          </div>

          <div class="space-y-2">
            <h3 class="text-sm font-bold text-slate-200">Ações práticas pretendidas:</h3>
            <ul class="list-disc pl-5 space-y-1 text-slate-300">
              <li v-for="(i, idx) in filterList(store.reportData.intencoes)" :key="idx">{{ i }}</li>
              <li v-if="filterList(store.reportData.intencoes).length === 0" class="text-slate-500 italic">[Não preenchido]</li>
            </ul>
          </div>
        </div>

        <hr class="border-slate-800" />

        <!-- 13. Referências -->
        <div class="space-y-3">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="text-sky-500">#</span> 13. Referências
          </h2>
          <ul class="list-disc pl-5 space-y-1 text-slate-300">
            <li v-for="(ref, idx) in filterList(store.reportData.referencias)" :key="idx">{{ ref }}</li>
            <li v-if="filterList(store.reportData.referencias).length === 0" class="text-slate-500 italic">[Nenhuma referência cadastrada]</li>
          </ul>
        </div>

      </div>

      <!-- Aba 2: Código Markdown Cru (Raw) -->
      <div v-else class="max-w-3xl mx-auto">
        <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
          <div class="bg-slate-950 px-4 py-2 border-b border-slate-800 flex justify-between items-center text-[10px] text-slate-500 font-bold font-mono">
            <span>RELATORIO.md</span>
            <span>MARKDOWN</span>
          </div>
          <textarea
            readonly
            rows="30"
            class="w-full bg-slate-900/50 text-emerald-400 font-mono text-xs p-6 focus:outline-none resize-none select-text selection:bg-sky-500/20 leading-relaxed"
            :value="markdownContent"
          ></textarea>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useReportStore } from '../stores/reportStore';
import { compileReportToMarkdown } from '../services/markdownGenerator';
import { Copy, Download } from 'lucide-vue-next';

const store = useReportStore();
const activeTab = ref<'render' | 'raw'>('render');

// Gera o Markdown dinamicamente com base no estado da store
const markdownContent = computed(() => {
  return compileReportToMarkdown(store.reportData);
});

// Filtra campos vazios para listas
const filterList = (list: string[]) => {
  return list ? list.filter(item => item && item.trim() !== "") : [];
};

// Copia o código Markdown para a área de transferência
const handleCopyMarkdown = async () => {
  try {
    await navigator.clipboard.writeText(markdownContent.value);
    alert("Código Markdown copiado para a área de transferência!");
  } catch (err) {
    alert("Falha ao copiar Markdown.");
  }
};

// Faz o download do arquivo .md
const handleDownloadMarkdown = () => {
  const blob = new Blob([markdownContent.value], { type: 'text/markdown;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const dlAnchorElem = document.createElement('a');
  dlAnchorElem.setAttribute("href", url);
  
  const studentName = store.reportData.aluno.trim().replace(/\s+/g, '_') || 'Estudante';
  dlAnchorElem.setAttribute("download", `Relatorio_PI1_${studentName}.md`);
  dlAnchorElem.click();
  URL.revokeObjectURL(url);
};

const reflexoes = [
  { id: "ref_91", q: "9.1 Por que essa profissão chamou minha atenção?" },
  { id: "ref_92", q: "9.2 Quais aspectos da profissão mais despertaram meu interesse?" },
  { id: "ref_93", q: "9.3 Quais competências eu já possuo que podem ajudar?" },
  { id: "ref_94", q: "9.4 Quais competências preciso desenvolver?" },
  { id: "ref_95", q: "9.5 Quais dificuldades podem surgir na minha trajetória?" },
  { id: "ref_96", q: "9.6 Como minha realidade de vida influencia meu caminho?" },
  { id: "ref_97", q: "9.7 Como posso me preparar melhor para atuar na área?" }
];
</script>
