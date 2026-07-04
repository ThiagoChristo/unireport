<template>
  <section class="editor-section active">
    <h2 class="text-2xl font-bold mb-2 font-heading text-slate-100">Capa do Relatório</h2>
    <p class="text-sm text-slate-400 mb-6 leading-relaxed">Preencha as informações básicas para a capa oficial do seu projeto.</p>
    
    <div class="mb-4">
      <label class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Nome do Curso</label>
      <input 
        type="text" 
        v-model="store.reportData.curso"
        placeholder="Ex: Engenharia de Software" 
        class="w-full bg-slate-950 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
      />
    </div>
    
    <div class="mb-4">
      <label class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Nome Completo do Aluno</label>
      <input 
        type="text" 
        v-model="store.reportData.aluno"
        placeholder="Digite seu nome completo" 
        class="w-full bg-slate-950 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
      />
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">RU (Registro Universitário)</label>
        <input 
          type="text" 
          v-model="store.reportData.ru"
          placeholder="Digite seu RU" 
          class="w-full bg-slate-950 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
        />
      </div>
      <div>
        <label class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Ano de Entrega</label>
        <input 
          type="number" 
          v-model.number="store.reportData.ano"
          class="w-full bg-slate-950 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
        />
      </div>
    </div>
    
    <div class="mb-4">
      <label class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Professor Orientador</label>
      <input 
        type="text" 
        value="Prof. Eros Leon Kohler, Me." 
        disabled 
        class="w-full bg-slate-950 border border-slate-800 rounded-lg text-slate-500 px-4 py-3 text-sm cursor-not-allowed"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore';
const store = useReportStore();
</script>
