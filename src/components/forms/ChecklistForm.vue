<template>
  <section class="editor-section active">
    <h2 class="text-2xl font-bold mb-2 font-heading text-slate-100">Checklist antes da entrega</h2>
    <p class="text-sm text-slate-400 mb-6 leading-relaxed">Confira todos os itens essenciais antes de submeter o relatório em PDF na Univirtus.</p>
    
    <div class="flex flex-col gap-3">
      <div 
        v-for="item in checklistItems" 
        :key="item.id" 
        class="flex items-center gap-4 bg-slate-900 border border-slate-800 p-4 rounded-lg cursor-pointer hover:border-purple-500 hover:bg-purple-550/2 transition-all"
        :class="{ 'border-emerald-500/40 bg-emerald-500/2': isChecked(item.id) }"
        @click="store.toggleChecklist(item.id)"
      >
        <div 
          class="w-5 h-5 rounded border-2 border-slate-700 flex items-center justify-center transition-all shrink-0"
          :class="{ 'bg-emerald-500 border-emerald-500': isChecked(item.id) }"
        >
          <span v-if="isChecked(item.id)" class="text-white text-xs font-bold">✓</span>
        </div>
        <div 
          class="text-sm font-medium text-slate-300 transition-all"
          :class="{ 'text-slate-500 line-through': isChecked(item.id) }"
        >{{ item.text }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore';
import { checklistItems } from '../../data/defaultData';
const store = useReportStore();

const isChecked = (itemId: string) => {
  return store.reportData.checklist_manual[itemId] || false;
};
</script>
