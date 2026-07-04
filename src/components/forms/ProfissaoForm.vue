<template>
  <section class="editor-section active">
    <h2 class="text-2xl font-bold mb-2 font-heading text-slate-100">2. Profissão ou Área Escolhida</h2>
    <p class="text-sm text-slate-400 mb-6 leading-relaxed">Detalhe as atividades e os ambientes de atuação deste profissional.</p>
    
    <div class="mb-6">
      <label class="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wide">2.1 O que faz esse profissional?</label>
      <p class="text-xs text-slate-500 mb-3">Descreva pelo menos 3 atividades principais que o profissional realiza no dia a dia.</p>
      
      <div class="flex flex-col gap-3 mb-3">
        <div v-for="(_, idx) in store.reportData.atividades" :key="idx" class="flex gap-2 items-start">
          <textarea 
            rows="2" 
            v-model="store.reportData.atividades[idx]"
            placeholder="Ex: Desenvolver software backend" 
            class="flex-1 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
          ></textarea>
          <button 
            @click="removeActivity(idx)"
            class="bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 rounded-lg p-3 text-lg font-bold leading-none cursor-pointer transition-all"
            title="Remover"
          >×</button>
        </div>
      </div>
      <button 
        @click="addActivity"
        class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all"
      >+ Adicionar Atividade</button>
    </div>

    <div class="mb-6">
      <label class="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wide">2.2 Onde esse profissional pode atuar?</label>
      <p class="text-xs text-slate-500 mb-3">Indique pelo menos 3 ambientes ou setores de atuação (Ex: startups, bancos, trabalho remoto).</p>
      
      <div class="flex flex-col gap-3 mb-3">
        <div v-for="(_, idx) in store.reportData.setores" :key="idx" class="flex gap-2 items-start">
          <textarea 
            rows="2" 
            v-model="store.reportData.setores[idx]"
            placeholder="Ex: Empresas financeiras / Fintechs" 
            class="flex-1 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
          ></textarea>
          <button 
            @click="removeSector(idx)"
            class="bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 rounded-lg p-3 text-lg font-bold leading-none cursor-pointer transition-all"
            title="Remover"
          >×</button>
        </div>
      </div>
      <button 
        @click="addSector"
        class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all"
      >+ Adicionar Setor</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore';
const store = useReportStore();

const addActivity = () => {
  store.reportData.atividades.push("");
};
const removeActivity = (index: number) => {
  store.reportData.atividades.splice(index, 1);
};

const addSector = () => {
  store.reportData.setores.push("");
};
const removeSector = (index: number) => {
  store.reportData.setores.splice(index, 1);
};
</script>
