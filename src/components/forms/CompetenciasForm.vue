<template>
  <section class="editor-section active">
    <h2 class="text-2xl font-bold mb-2 font-heading text-slate-100">3. Competências Necessárias</h2>
    <p class="text-sm text-slate-400 mb-6 leading-relaxed">Liste e explique 5 competências técnicas (Hard Skills) e 5 comportamentais (Soft Skills) indispensáveis.</p>
    
    <h3 class="text-md font-bold mb-3 text-sky-400">3.1 Competências Técnicas (Hard Skills)</h3>
    <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mb-6">
      <table class="w-full border-collapse text-left">
        <thead>
          <tr class="bg-slate-950 border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wide">
            <th class="px-4 py-3 w-1/3">Competência Técnica</th>
            <th class="px-4 py-3 w-2/3">Por que ela é importante?</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in store.reportData.comp_tecnicas" :key="idx" class="border-b border-slate-800/50 last:border-none">
            <td class="p-3">
              <input 
                type="text" 
                v-model="item.nome"
                placeholder="Nome da competência" 
                class="w-full bg-slate-950/40 border border-slate-800 rounded-lg text-slate-100 px-3 py-2 text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/20"
              />
            </td>
            <td class="p-3">
              <textarea 
                rows="2" 
                v-model="item.desc"
                placeholder="Explique a aplicação prática..." 
                class="w-full bg-slate-950/40 border border-slate-800 rounded-lg text-slate-100 px-3 py-2 text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/20 resize-y"
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-md font-bold mb-3 text-sky-400">3.2 Competências Comportamentais (Soft Skills)</h3>
    <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      <table class="w-full border-collapse text-left">
        <thead>
          <tr class="bg-slate-955 border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wide">
            <th class="px-4 py-3 w-1/3">Competência Comportamental</th>
            <th class="px-4 py-3 w-2/3">Por que ela é importante?</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in store.reportData.comp_comportamentais" :key="idx" class="border-b border-slate-800/50 last:border-none">
            <td class="p-3">
              <input 
                type="text" 
                v-model="item.nome"
                placeholder="Nome da competência" 
                class="w-full bg-slate-950/40 border border-slate-800 rounded-lg text-slate-100 px-3 py-2 text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/20"
              />
            </td>
            <td class="p-3">
              <textarea 
                rows="2" 
                v-model="item.desc"
                placeholder="Explique a importância no trabalho..." 
                class="w-full bg-slate-950/40 border border-slate-800 rounded-lg text-slate-100 px-3 py-2 text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/20 resize-y"
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
