<template>
  <section class="editor-section active">
    <h2 class="text-2xl font-bold mb-2 font-heading text-slate-100">1. Introdução</h2>
    <p class="text-sm text-slate-400 mb-6 leading-relaxed">Apresente a profissão escolhida, justificando os motivos de sua escolha e o objetivo deste relatório.</p>
    
    <div class="mb-4">
      <label class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Profissão ou Área Escolhida</label>
      <input 
        type="text" 
        v-model="store.reportData.intro_profissao"
        placeholder="Ex: Desenvolvedor de Software / Cientista de Dados" 
        class="w-full bg-slate-950 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
      />
    </div>
    
    <div class="mb-4">
      <label class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Motivo da Escolha</label>
      <textarea 
        rows="6" 
        v-model="store.reportData.intro_motivo"
        placeholder="Explique por que escolheu esta área (curiosidade, relação com o curso, experiência prévia, oportunidades de mercado, etc.)"
        class="w-full bg-slate-950 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all resize-y"
      ></textarea>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore';
const store = useReportStore();
</script>
