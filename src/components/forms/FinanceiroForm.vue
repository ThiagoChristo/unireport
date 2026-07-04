<template>
  <section class="editor-section active">
    <h2 class="text-2xl font-bold mb-2 font-heading text-slate-100">11. Educação Financeira Aplicada à Carreira</h2>
    <p class="text-sm text-slate-400 mb-6 leading-relaxed">Planeje financeiramente os custos exigidos para o desenvolvimento da sua carreira.</p>
    
    <h3 class="text-md font-bold mb-3 text-sky-400">11.1 Possíveis custos para minha formação</h3>
    <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mb-6">
      <table class="w-full border-collapse text-left">
        <thead>
          <tr class="bg-slate-955 border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wide">
            <th class="px-4 py-3 w-1/3">Item</th>
            <th class="px-4 py-3 w-1/5">Necessário agora?</th>
            <th class="px-4 py-3 w-1/5">Valor estimado</th>
            <th class="px-4 py-3 w-4/15">Observação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(c, idx) in store.reportData.custos" :key="idx" class="border-b border-slate-800/50 last:border-none">
            <td class="p-3 text-xs text-slate-300"><strong>{{ c.item }}</strong></td>
            <td class="p-3">
              <select 
                v-model="c.nec"
                class="w-full bg-slate-950 border border-slate-800 rounded-lg text-slate-100 px-2 py-1.5 text-xs focus:outline-none focus:border-sky-500"
              >
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
            </td>
            <td class="p-3">
              <input 
                type="text" 
                v-model="c.valor"
                placeholder="R$ 0,00" 
                class="w-full bg-slate-950 border border-slate-800 rounded-lg text-slate-100 px-3 py-1.5 text-xs focus:outline-none focus:border-sky-500"
              />
            </td>
            <td class="p-3">
              <input 
                type="text" 
                v-model="c.obs"
                placeholder="Observações..." 
                class="w-full bg-slate-955 border border-slate-800 rounded-lg text-slate-100 px-3 py-1.5 text-xs focus:outline-none focus:border-sky-500"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-md font-bold mb-3 text-sky-400">11.2 Prioridades Financeiras</h3>
    <div class="mb-4">
      <label class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Minha meta financeira relacionada à carreira</label>
      <input 
        type="text" 
        v-model="store.reportData.fin_meta"
        placeholder="Ex: Economizar para trocar de notebook em 1 ano" 
        class="w-full bg-slate-955 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
      />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Valor Estimado</label>
        <input 
          type="text" 
          v-model="store.reportData.fin_valor"
          placeholder="R$ 4.000,00" 
          class="w-full bg-slate-955 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
        />
      </div>
      <div>
        <label class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Prazo para Alcançar a Meta</label>
        <input 
          type="text" 
          v-model="store.reportData.fin_prazo"
          placeholder="Ex: 12 meses" 
          class="w-full bg-slate-955 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
        />
      </div>
    </div>
    <div class="mb-4">
      <label class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">Quanto precisará guardar por mês</label>
      <input 
        type="text" 
        v-model="store.reportData.fin_mensal"
        placeholder="R$ 333,00" 
        class="w-full bg-slate-955 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
      />
    </div>
    <div class="mb-4">
      <label class="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">O que posso ajustar na minha rotina para alcançar essa meta</label>
      <textarea 
        rows="3" 
        v-model="store.reportData.fin_ajuste"
        placeholder="Ex: Evitar jantares fora, cancelar assinaturas não usadas..."
        class="w-full bg-slate-955 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all resize-y"
      ></textarea>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore';
const store = useReportStore();
</script>
