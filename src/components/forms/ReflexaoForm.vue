<template>
  <section class="editor-section active">
    <h2 class="text-2xl font-bold mb-2 font-heading text-slate-100">9. Reflexão Pessoal: Trajetória e Profissão</h2>
    <p class="text-sm text-slate-400 mb-6 leading-relaxed">Responda com sinceridade e autocrítica sobre sua relação com a carreira pretendida.</p>
    
    <div class="mb-4">
      <label class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">9.1 Por que essa profissão chamou minha atenção?</label>
      <textarea 
        rows="3" 
        v-model="store.reportData.ref_91"
        placeholder="Sua resposta..."
        class="w-full bg-slate-955 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all resize-y"
      ></textarea>
    </div>
    
    <div class="mb-4">
      <label class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">9.2 Quais aspectos da profissão mais despertaram meu interesse?</label>
      <textarea 
        rows="3" 
        v-model="store.reportData.ref_92"
        placeholder="Sua resposta..."
        class="w-full bg-slate-955 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all resize-y"
      ></textarea>
    </div>
    
    <div class="mb-4">
      <label class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">9.3 Quais competências eu já possuo que podem ajudar nessa trajetória?</label>
      <textarea 
        rows="3" 
        v-model="store.reportData.ref_93"
        placeholder="Sua resposta..."
        class="w-full bg-slate-955 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all resize-y"
      ></textarea>
    </div>
    
    <div class="mb-4">
      <label class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">9.4 Quais competências preciso desenvolver?</label>
      <textarea 
        rows="3" 
        v-model="store.reportData.ref_94"
        placeholder="Sua resposta..."
        class="w-full bg-slate-955 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all resize-y"
      ></textarea>
    </div>
    
    <div class="mb-4">
      <label class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">9.5 Quais dificuldades pessoais, acadêmicas ou profissionais podem surgir na minha trajetória?</label>
      <textarea 
        rows="3" 
        v-model="store.reportData.ref_95"
        placeholder="Sua resposta..."
        class="w-full bg-slate-955 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all resize-y"
      ></textarea>
    </div>
    
    <div class="mb-4">
      <label class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">9.6 Como minha realidade de vida influencia meu caminho profissional?</label>
      <textarea 
        rows="3" 
        v-model="store.reportData.ref_96"
        placeholder="Sua resposta..."
        class="w-full bg-slate-955 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all resize-y"
      ></textarea>
    </div>
    
    <div class="mb-4">
      <label class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">9.7 Como posso me preparar melhor para atuar nessa área?</label>
      <textarea 
        rows="3" 
        v-model="store.reportData.ref_97"
        placeholder="Sua resposta..."
        class="w-full bg-slate-955 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all resize-y"
      ></textarea>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore';
const store = useReportStore();
</script>
