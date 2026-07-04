<template>
  <section class="editor-section active">
    <h2 class="text-2xl font-bold mb-2 font-heading text-slate-100">10. Planejamento Inicial de Carreira</h2>
    <p class="text-sm text-slate-400 mb-6 leading-relaxed">Estabeleça metas claras de curto, médio e longo prazo.</p>
    
    <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      <table class="w-full border-collapse text-left">
        <thead>
          <tr class="bg-slate-950 border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wide">
            <th class="px-4 py-3 w-1/5">Prazo</th>
            <th class="px-4 py-3 w-1/4">Meta Acadêmica</th>
            <th class="px-4 py-3 w-1/4">Meta Profissional</th>
            <th class="px-4 py-3 w-3/10">Ação Prática</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p, idx) in store.reportData.planejamento" :key="idx" class="border-b border-slate-800/50 last:border-none">
            <td class="p-3 text-xs text-slate-300"><strong>{{ p.prazo }}</strong></td>
            <td class="p-3">
              <textarea 
                rows="3" 
                v-model="p.acad"
                placeholder="Estudos / Cursos..." 
                class="w-full bg-slate-955/40 border border-slate-800 rounded-lg text-slate-100 px-3 py-2 text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/20 resize-y"
              ></textarea>
            </td>
            <td class="p-3">
              <textarea 
                rows="3" 
                v-model="p.prof"
                placeholder="Trabalho / Estágio..." 
                class="w-full bg-slate-955/40 border border-slate-800 rounded-lg text-slate-100 px-3 py-2 text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/20 resize-y"
              ></textarea>
            </td>
            <td class="p-3">
              <textarea 
                rows="3" 
                v-model="p.acao"
                placeholder="Ações diárias concretas..." 
                class="w-full bg-slate-955/40 border border-slate-800 rounded-lg text-slate-100 px-3 py-2 text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/20 resize-y"
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore';
const store = useReportStore();
</script>
