<template>
  <section class="editor-section active">
    <h2 class="text-2xl font-bold mb-2 font-heading text-slate-100">13. Referências</h2>
    <p class="text-sm text-slate-400 mb-6 leading-relaxed">Insira os links e referências das fontes que você pesquisou (mínimo 3).</p>
    
    <div class="mb-4">
      <label class="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wide">Fontes Consultadas</label>
      <p class="text-xs text-slate-500 mb-3">Artigos, portais de vagas, sites de empresas, etc.</p>
      
      <div class="flex flex-col gap-3 mb-3">
        <div v-for="(_, idx) in store.reportData.referencias" :key="idx" class="flex gap-2 items-start">
          <textarea 
            rows="2" 
            v-model="store.reportData.referencias[idx]"
            placeholder="Ex: SBC - Sociedade Brasileira de Computação. Acessado em 2026." 
            class="flex-1 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
          ></textarea>
          <button 
            @click="removeReferencia(idx)"
            class="bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 rounded-lg p-3 text-lg font-bold leading-none cursor-pointer transition-all"
            title="Remover"
          >×</button>
        </div>
      </div>
      <button 
        @click="addReferencia"
        class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all"
      >+ Adicionar Referência</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore';
const store = useReportStore();

const addReferencia = () => {
  store.reportData.referencias.push("");
};
const removeReferencia = (index: number) => {
  store.reportData.referencias.splice(index, 1);
};
</script>
