<template>
  <section class="editor-section active">
    <h2 class="text-2xl font-bold mb-2 font-heading text-slate-100">5. Formas de Ingresso na Área</h2>
    <p class="text-sm text-slate-400 mb-6 leading-relaxed">Explique os caminhos comuns para entrar no mercado nessa área (ex: estágio, portfólio, projetos, freelancer).</p>
    
    <div class="mb-4">
      <label class="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wide">Estratégias de Entrada</label>
      <p class="text-xs text-slate-500 mb-3">Adicione pelo menos 3 estratégias de entrada no mercado.</p>
      
      <div class="flex flex-col gap-3 mb-3">
        <div v-for="(_, idx) in store.reportData.ingresso" :key="idx" class="flex gap-2 items-start">
          <textarea 
            rows="2" 
            v-model="store.reportData.ingresso[idx]"
            placeholder="Ex: Estágio remunerado a partir do 2º semestre" 
            class="flex-1 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
          ></textarea>
          <button 
            @click="removeIngresso(idx)"
            class="bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 rounded-lg p-3 text-lg font-bold leading-none cursor-pointer transition-all"
            title="Remover"
          >×</button>
        </div>
      </div>
      <button 
        @click="addIngresso"
        class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all"
      >+ Adicionar Forma de Ingresso</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore';
const store = useReportStore();

const addIngresso = () => {
  store.reportData.ingresso.push("");
};
const removeIngresso = (index: number) => {
  store.reportData.ingresso.splice(index, 1);
};
</script>
