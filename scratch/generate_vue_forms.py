import os

base_dir = r"d:\engsoftware\proj_interdisciplinar\relatorio-real\src\components\forms"
os.makedirs(base_dir, exist_ok=True)

forms = {
    "CapaForm.vue": """<template>
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
""",

    "IntroducaoForm.vue": """<template>
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
""",

    "ProfissaoForm.vue": """<template>
  <section class="editor-section active">
    <h2 class="text-2xl font-bold mb-2 font-heading text-slate-100">2. Profissão ou Área Escolhida</h2>
    <p class="text-sm text-slate-400 mb-6 leading-relaxed">Detalhe as atividades e os ambientes de atuação deste profissional.</p>
    
    <div class="mb-6">
      <label class="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wide">2.1 O que faz esse profissional?</label>
      <p class="text-xs text-slate-500 mb-3">Descreva pelo menos 3 atividades principais que o profissional realiza no dia a dia.</p>
      
      <div class="flex flex-col gap-3 mb-3">
        <div v-for="(item, idx) in store.reportData.atividades" :key="idx" class="flex gap-2 items-start">
          <textarea 
            rows="2" 
            v-model="store.reportData.atividades[idx]"
            placeholder="Ex: Desenvolver software backend" 
            class="flex-1 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
          ></textarea>
          <button 
            @click="removeActivity(idx)"
            class="bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 rounded-lg p-3 text-lg font-bold leading-none cursor-pointer transition-all"
            title="Remover"
          >×</button>
        </div>
      </div>
      <button 
        @click="addActivity"
        class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all"
      >+ Adicionar Atividade</button>
    </div>

    <div class="mb-6">
      <label class="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wide">2.2 Onde esse profissional pode atuar?</label>
      <p class="text-xs text-slate-500 mb-3">Indique pelo menos 3 ambientes ou setores de atuação (Ex: startups, bancos, trabalho remoto).</p>
      
      <div class="flex flex-col gap-3 mb-3">
        <div v-for="(item, idx) in store.reportData.setores" :key="idx" class="flex gap-2 items-start">
          <textarea 
            rows="2" 
            v-model="store.reportData.setores[idx]"
            placeholder="Ex: Empresas financeiras / Fintechs" 
            class="flex-1 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
          ></textarea>
          <button 
            @click="removeSector(idx)"
            class="bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 rounded-lg p-3 text-lg font-bold leading-none cursor-pointer transition-all"
            title="Remover"
          >×</button>
        </div>
      </div>
      <button 
        @click="addSector"
        class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all"
      >+ Adicionar Setor</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore';
const store = useReportStore();

const addActivity = () => {
  store.reportData.atividades.push("");
};
const removeActivity = (index: number) => {
  store.reportData.atividades.splice(index, 1);
};

const addSector = () => {
  store.reportData.setores.push("");
};
const removeSector = (index: number) => {
  store.reportData.setores.splice(index, 1);
};
</script>
""",

    "CompetenciasForm.vue": """<template>
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
""",

    "TecnologiasForm.vue": """<template>
  <section class="editor-section active">
    <h2 class="text-2xl font-bold mb-2 font-heading text-slate-100">4. Tecnologias, Ferramentas e Conhecimentos</h2>
    <p class="text-sm text-slate-400 mb-6 leading-relaxed">Pesquise e liste 5 tecnologias ou ferramentas comuns usadas no dia a dia da profissão.</p>
    
    <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      <table class="w-full border-collapse text-left">
        <thead>
          <tr class="bg-slate-950 border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wide">
            <th class="px-4 py-3 w-1/3">Tecnologia / Ferramenta</th>
            <th class="px-4 py-3 w-2/3">Como é usada na profissão?</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in store.reportData.tecnologias" :key="idx" class="border-b border-slate-800/50 last:border-none">
            <td class="p-3">
              <input 
                type="text" 
                v-model="item.nome"
                placeholder="Nome da tecnologia" 
                class="w-full bg-slate-950/40 border border-slate-800 rounded-lg text-slate-100 px-3 py-2 text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/20"
              />
            </td>
            <td class="p-3">
              <textarea 
                rows="2" 
                v-model="item.desc"
                placeholder="Descreva como o profissional a utiliza..." 
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
""",

    "IngressoForm.vue": """<template>
  <section class="editor-section active">
    <h2 class="text-2xl font-bold mb-2 font-heading text-slate-100">5. Formas de Ingresso na Área</h2>
    <p class="text-sm text-slate-400 mb-6 leading-relaxed">Explique os caminhos comuns para entrar no mercado nessa área (ex: estágio, portfólio, projetos, freelancer).</p>
    
    <div class="mb-4">
      <label class="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wide">Estratégias de Entrada</label>
      <p class="text-xs text-slate-500 mb-3">Adicione pelo menos 3 estratégias de entrada no mercado.</p>
      
      <div class="flex flex-col gap-3 mb-3">
        <div v-for="(item, idx) in store.reportData.ingresso" :key="idx" class="flex gap-2 items-start">
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
""",

    "DesafiosForm.vue": """<template>
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
""",

    "TendenciasForm.vue": """<template>
  <section class="editor-section active">
    <h2 class="text-2xl font-bold mb-2 font-heading text-slate-100">7. Tendências e Futuro da Área</h2>
    <p class="text-sm text-slate-400 mb-6 leading-relaxed">Pesquise e explique quais tendências podem influenciar essa profissão nos próximos anos.</p>
    
    <div class="mb-4">
      <label class="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wide">Tendências Tecnológicas</label>
      <p class="text-xs text-slate-500 mb-3">Descreva pelo menos 3 fatores importantes (ex: IA, computação em nuvem).</p>
      
      <div class="flex flex-col gap-3 mb-3">
        <div v-for="(item, idx) in store.reportData.tendencias" :key="idx" class="flex gap-2 items-start">
          <textarea 
            rows="2" 
            v-model="store.reportData.tendencias[idx]"
            placeholder="Ex: Adoção massiva de copilotos de IA" 
            class="flex-1 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
          ></textarea>
          <button 
            @click="removeTendencia(idx)"
            class="bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 rounded-lg p-3 text-lg font-bold leading-none cursor-pointer transition-all"
            title="Remover"
          >×</button>
        </div>
      </div>
      <button 
        @click="addTendencia"
        class="inline-flex items-center gap-2 bg-slate-880 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all"
      >+ Adicionar Tendência</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore';
const store = useReportStore();

const addTendencia = () => {
  store.reportData.tendencias.push("");
};
const removeTendencia = (index: number) => {
  store.reportData.tendencias.splice(index, 1);
};
</script>
""",

    "RelacaoForm.vue": """<template>
  <section class="editor-section active">
    <h2 class="text-2xl font-bold mb-2 font-heading text-slate-100">8. Relação com meu Curso</h2>
    <p class="text-sm text-slate-400 mb-6 leading-relaxed">Explique como a profissão pesquisada se relaciona com o curso que você está fazendo. Indique disciplinas aplicadas.</p>
    
    <div class="mb-4">
      <label class="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wide">Disciplinas e Práticas</label>
      <p class="text-xs text-slate-500 mb-3">Indique pelo menos 3 conexões concretas entre a grade e a profissão.</p>
      
      <div class="flex flex-col gap-3 mb-3">
        <div v-for="(item, idx) in store.reportData.relacao" :key="idx" class="flex gap-2 items-start">
          <textarea 
            rows="2" 
            v-model="store.reportData.relacao[idx]"
            placeholder="Ex: Aulas de Lógica estruturando o pensamento computacional" 
            class="flex-1 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
          ></textarea>
          <button 
            @click="removeRelacao(idx)"
            class="bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 rounded-lg p-3 text-lg font-bold leading-none cursor-pointer transition-all"
            title="Remover"
          >×</button>
        </div>
      </div>
      <button 
        @click="addRelacao"
        class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all"
      >+ Adicionar Conexão</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore';
const store = useReportStore();

const addRelacao = () => {
  store.reportData.relacao.push("");
};
const removeRelacao = (index: number) => {
  store.reportData.relacao.splice(index, 1);
};
</script>
""",

    "ReflexaoForm.vue": """<template>
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
""",

    "PlanejamentoForm.vue": """<template>
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
""",

    "FinanceiroForm.vue": """<template>
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
""",

    "ConclusaoForm.vue": """<template>
  <section class="editor-section active">
    <h2 class="text-2xl font-bold mb-2 font-heading text-slate-100">12. Conclusão</h2>
    <p class="text-sm text-slate-400 mb-6 leading-relaxed">Sintetize os aprendizados obtidos durante a realização desta pesquisa.</p>
    
    <div class="mb-6">
      <label class="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wide">Principais aprendizados que tive</label>
      
      <div class="flex flex-col gap-3 mb-3">
        <div v-for="(item, idx) in store.reportData.aprendizados" :key="idx" class="flex gap-2 items-start">
          <textarea 
            rows="2" 
            v-model="store.reportData.aprendizados[idx]"
            placeholder="Ex: A engenharia é multidisciplinar..." 
            class="flex-1 bg-slate-955 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
          ></textarea>
          <button 
            @click="removeAprendizado(idx)"
            class="bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 rounded-lg p-3 text-lg font-bold leading-none cursor-pointer transition-all"
            title="Remover"
          >×</button>
        </div>
      </div>
      <button 
        @click="addAprendizado"
        class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all"
      >+ Adicionar Aprendizado</button>
    </div>

    <div class="mb-6">
      <label class="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wide">A pesquisa contribuiu para minha visão de carreira porque</label>
      
      <div class="flex flex-col gap-3 mb-3">
        <div v-for="(item, idx) in store.reportData.contribuicao" :key="idx" class="flex gap-2 items-start">
          <textarea 
            rows="2" 
            v-model="store.reportData.contribuicao[idx]"
            placeholder="Ex: Me ajudou a entender o fluxo de contratações..." 
            class="flex-1 bg-slate-955 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
          ></textarea>
          <button 
            @click="removeContribuicao(idx)"
            class="bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 rounded-lg p-3 text-lg font-bold leading-none cursor-pointer transition-all"
            title="Remover"
          >×</button>
        </div>
      </div>
      <button 
        @click="addContribuicao"
        class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all"
      >+ Adicionar Contribuição</button>
    </div>

    <div class="mb-6">
      <label class="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wide">A partir deste estudo, pretendo</label>
      
      <div class="flex flex-col gap-3 mb-3">
        <div v-for="(item, idx) in store.reportData.intencoes" :key="idx" class="flex gap-2 items-start">
          <textarea 
            rows="2" 
            v-model="store.reportData.intencoes[idx]"
            placeholder="Ex: Focar em portfólio GitHub..." 
            class="flex-1 bg-slate-955 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
          ></textarea>
          <button 
            @click="removeIntencao(idx)"
            class="bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 rounded-lg p-3 text-lg font-bold leading-none cursor-pointer transition-all"
            title="Remover"
          >×</button>
        </div>
      </div>
      <button 
        @click="addIntencao"
        class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all"
      >+ Adicionar Pretensão</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore';
const store = useReportStore();

const addAprendizado = () => { store.reportData.aprendizados.push(""); };
const removeAprendizado = (idx: number) => { store.reportData.aprendizados.splice(idx, 1); };

const addContribuicao = () => { store.reportData.contribuicao.push(""); };
const removeContribuicao = (idx: number) => { store.reportData.contribuicao.splice(idx, 1); };

const addIntencao = () => { store.reportData.intencoes.push(""); };
const removeIntencao = (idx: number) => { store.reportData.intencoes.splice(idx, 1); };
</script>
""",

    "ReferenciasForm.vue": """<template>
  <section class="editor-section active">
    <h2 class="text-2xl font-bold mb-2 font-heading text-slate-100">13. Referências</h2>
    <p class="text-sm text-slate-400 mb-6 leading-relaxed">Insira os links e referências das fontes que você pesquisou (mínimo 3).</p>
    
    <div class="mb-4">
      <label class="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wide">Fontes Consultadas</label>
      <p class="text-xs text-slate-500 mb-3">Artigos, portais de vagas, sites de empresas, etc.</p>
      
      <div class="flex flex-col gap-3 mb-3">
        <div v-for="(item, idx) in store.reportData.referencias" :key="idx" class="flex gap-2 items-start">
          <textarea 
            rows="2" 
            v-model="store.reportData.referencias[idx]"
            placeholder="Ex: SBC - Sociedade Brasileira de Computação. Acessado em 2026." 
            class="flex-1 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 px-4 py-3 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
          ></textarea>
          <button 
            @click="removeReferencia(index)"
            class="bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 rounded-lg p-3 text-lg font-bold leading-none cursor-pointer transition-all"
            title="Remover"
          >×</button>
        </div>
      </div>
      <button 
        @click="addReferencia"
        class="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all"
      >+ Adicionar Referência</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReportStore } from '../../stores/reportStore';
const store = useReportStore();

const addReferencia = () => {
  store.reportData.referencias.push("");
};
const removeReferencia = (index: number) => {
  store.reportData.referencias.splice(index, 1);
};
</script>
""",

    "ChecklistForm.vue": """<template>
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
"""
}

for name, content in forms.items():
    path = os.path.join(base_dir, name)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Created Vue form component: {name}")
print("Finished generating all Vue form files!")
