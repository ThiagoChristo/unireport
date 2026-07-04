<template>
  <section class="editor-section active">
    <h2 class="text-2xl font-bold mb-2 font-heading text-slate-100">6. Desafios da Profissão</h2>
    <p class="text-sm text-slate-400 mb-6 leading-relaxed">Liste pelo menos 3 desafios enfrentados por quem deseja ingressar ou se desenvolver nessa área.</p>
    
    <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      <table class="w-full border-collapse text-left">
        <thead>
          <tr class="bg-slate-950 border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wide">
            <th class="px-4 py-3 w-5/12">Desafio Identificado</th>
            <th class="px-4 py-3 w-7/12">Como este desafio pode ser enfrentado?</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in store.reportData.desafios" :key="idx" class="border-b border-slate-800/50 last:border-none">
            <td class="p-3">
              <input 
                type="text" 
                v-model="item.nome"
                placeholder="Ex: Velocidade de obsolescência das tecnologias" 
                class="w-full bg-slate-950/40 border border-slate-800 rounded-lg text-slate-100 px-3 py-2 text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/20"
              />
            </td>
            <td class="p-3">
              <textarea 
                rows="2" 
                v-model="item.desc"
                placeholder="Solução..." 
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
