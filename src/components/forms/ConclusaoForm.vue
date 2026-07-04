<template>
  <section class="editor-section active">
    <h2 class="text-2xl font-bold mb-2 font-heading text-slate-100">12. Conclusão</h2>
    <p class="text-sm text-slate-400 mb-6 leading-relaxed">Sintetize os aprendizados obtidos durante a realização desta pesquisa.</p>
    
    <div class="mb-6">
      <label class="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wide">Principais aprendizados que tive</label>
      
      <div class="flex flex-col gap-3 mb-3">
        <div v-for="(_, idx) in store.reportData.aprendizados" :key="idx" class="flex gap-2 items-start">
          <textarea 
            rows="2" 
            v-model="store.reportData.aprendizados[idx]"
            placeholder="Ex: A engenharia é multidisciplinar..." 
            class="flex-1 bg-slate-955 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
          ></textarea>
          <button 
            @click="removeAprendizado(idx)"
            class="bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 rounded-lg p-3 text-lg font-bold leading-none cursor-pointer transition-all"
            title="Remover"
          >×</button>
        </div>
      </div>
      <button 
        @click="addAprendizado"
        class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all"
      >+ Adicionar Aprendizado</button>
    </div>

    <div class="mb-6">
      <label class="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wide">A pesquisa contribuiu para minha visão de carreira porque</label>
      
      <div class="flex flex-col gap-3 mb-3">
        <div v-for="(_, idx) in store.reportData.contribuicao" :key="idx" class="flex gap-2 items-start">
          <textarea 
            rows="2" 
            v-model="store.reportData.contribuicao[idx]"
            placeholder="Ex: Me ajudou a entender o fluxo de contratações..." 
            class="flex-1 bg-slate-955 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
          ></textarea>
          <button 
            @click="removeContribuicao(idx)"
            class="bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 rounded-lg p-3 text-lg font-bold leading-none cursor-pointer transition-all"
            title="Remover"
          >×</button>
        </div>
      </div>
      <button 
        @click="addContribuicao"
        class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all"
      >+ Adicionar Contribuição</button>
    </div>

    <div class="mb-6">
      <label class="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wide">A partir deste estudo, pretendo</label>
      
      <div class="flex flex-col gap-3 mb-3">
        <div v-for="(_, idx) in store.reportData.intencoes" :key="idx" class="flex gap-2 items-start">
          <textarea 
            rows="2" 
            v-model="store.reportData.intencoes[idx]"
            placeholder="Ex: Focar em portfólio GitHub..." 
            class="flex-1 bg-slate-955 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
          ></textarea>
          <button 
            @click="removeIntencao(idx)"
            class="bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 rounded-lg p-3 text-lg font-bold leading-none cursor-pointer transition-all"
            title="Remover"
          >×</button>
        </div>
      </div>
      <button 
        @click="addIntencao"
        class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all"
      >+ Adicionar Pretensão</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore';
const store = useReportStore();

const addAprendizado = () => { store.reportData.aprendizados.push(""); };
const removeAprendizado = (idx: number) => { store.reportData.aprendizados.splice(idx, 1); };

const addContribuicao = () => { store.reportData.contribuicao.push(""); };
const removeContribuicao = (idx: number) => { store.reportData.contribuicao.splice(idx, 1); };

const addIntencao = () => { store.reportData.intencoes.push(""); };
const removeIntencao = (idx: number) => { store.reportData.intencoes.splice(idx, 1); };
</script>
