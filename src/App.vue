<template>
  <div id="app-container" class="grid grid-cols-[280px_1fr_1fr] w-screen h-screen overflow-hidden">
    <!-- Sidebar de Navegação -->
    <Sidebar />

    <!-- Editor central -->
    <main id="editor-pane" class="bg-slate-950 overflow-y-auto h-full p-10 flex flex-col border-r border-slate-800">
      <CapaForm v-if="store.activeSection === 'capa'" />
      <IntroducaoForm v-else-if="store.activeSection === 'introducao'" />
      <ProfissaoForm v-else-if="store.activeSection === 'profissao'" />
      <CompetenciasForm v-else-if="store.activeSection === 'competencias'" />
      <TecnologiasForm v-else-if="store.activeSection === 'tecnologias'" />
      <IngressoForm v-else-if="store.activeSection === 'ingresso'" />
      <DesafiosForm v-else-if="store.activeSection === 'desafios'" />
      <TendenciasForm v-else-if="store.activeSection === 'tendencias'" />
      <RelacaoForm v-else-if="store.activeSection === 'relacao-curso'" />
      <ReflexaoForm v-else-if="store.activeSection === 'reflexao'" />
      <PlanejamentoForm v-else-if="store.activeSection === 'planejamento'" />
      <FinanceiroForm v-else-if="store.activeSection === 'financeiro'" />
      <ConclusaoForm v-else-if="store.activeSection === 'conclusao'" />
      <ReferenciasForm v-else-if="store.activeSection === 'referencias'" />
      <ChecklistForm v-else-if="store.activeSection === 'checklist'" />
      
      <!-- Toggle flutuante móvel para visualizar folha -->
      <button 
        @click="store.showPreviewMobile = true" 
        class="fixed bottom-6 right-6 bg-sky-500 text-slate-950 font-bold p-4 rounded-full shadow-lg md:hidden hover:bg-sky-400 active:scale-95 transition-all z-50 cursor-pointer"
      >
        Ver Folha A4
      </button>
    </main>

    <!-- Painel de Pré-visualização Acadêmica (Lado Direito) -->
    <div 
      :class="['h-full overflow-hidden transition-all duration-300', store.showPreviewMobile ? 'fixed inset-0 z-40 block w-full bg-slate-950 active-mobile' : 'hidden md:block']"
    >
      <Preview />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useReportStore } from './stores/reportStore';
import { saveReportToDb } from './services/database';

// Importação dos componentes do Editor e Preview
import Sidebar from './components/Sidebar.vue';
import Preview from './components/Preview.vue';

// Importação dos formulários modulares
import CapaForm from './components/forms/CapaForm.vue';
import IntroducaoForm from './components/forms/IntroducaoForm.vue';
import ProfissaoForm from './components/forms/ProfissaoForm.vue';
import CompetenciasForm from './components/forms/CompetenciasForm.vue';
import TecnologiasForm from './components/forms/TecnologiasForm.vue';
import IngressoForm from './components/forms/IngressoForm.vue';
import DesafiosForm from './components/forms/DesafiosForm.vue';
import TendenciasForm from './components/forms/TendenciasForm.vue';
import RelacaoForm from './components/forms/RelacaoForm.vue';
import ReflexaoForm from './components/forms/ReflexaoForm.vue';
import PlanejamentoForm from './components/forms/PlanejamentoForm.vue';
import FinanceiroForm from './components/forms/FinanceiroForm.vue';
import ConclusaoForm from './components/forms/ConclusaoForm.vue';
import ReferenciasForm from './components/forms/ReferenciasForm.vue';
import ChecklistForm from './components/forms/ChecklistForm.vue';

const store = useReportStore();

onMounted(async () => {
  // Carrega o último estado do IndexedDB (via Dexie)
  await store.initializeStore();
  
  // Inscreve a store para realizar Autosave em tempo real
  store.$subscribe((_mutation, state) => {
    saveReportToDb(state.reportData);
  });
});
</script>

<style>
/* Reset de Grid em telas menores */
@media (max-width: 1200px) {
  #app-container {
    grid-template-columns: 250px 1fr !important;
  }
}
</style>
