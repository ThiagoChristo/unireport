<template>
  <aside id="preview-pane-wrapper" class="bg-slate-950 border-l border-slate-800 flex flex-col h-full overflow-hidden">
    <!-- Cabeçalho do Preview -->
    <div class="bg-slate-900 border-b border-slate-800 px-6 py-4 flex justify-between items-center flex-shrink-0">
      <h3 class="text-xs font-bold text-slate-200">Pré-visualização (Normas ABNT/UNINTER)</h3>
      <div class="flex items-center gap-3">
        <span class="text-[10px] font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20 px-2 py-0.5 rounded-full">
          Simulação A4
        </span>
        <button 
          @click="store.showPreviewMobile = false" 
          class="btn btn-secondary btn-sm md:hidden text-xs font-medium text-slate-400 hover:text-slate-200 cursor-pointer"
        >
          Ocultar
        </button>
      </div>
    </div>

    <!-- Container da Folha A4 -->
    <div class="flex-1 overflow-y-auto p-8 flex justify-center bg-slate-950">
      <div id="report-document" class="a4-page font-arial shadow-2xl shadow-black/80">
        
        <!-- CAPA -->
        <div class="page capa-page">
          <div class="capa-header text-xs tracking-wide">
            <div>CENTRO UNIVERSITÁRIO INTERNACIONAL UNINTER</div>
            <div v-if="hasValue(store.reportData.curso)">CURSO: {{ store.reportData.curso }}</div>
            <div v-else class="preview-field empty-field">CURSO: [NOME DO CURSO]</div>
          </div>
          
          <div class="capa-title-container">
            <h1 class="capa-title">PROJETO INTERDISCIPLINAR I</h1>
            <h2 class="capa-subtitle">RELATÓRIO: MINHA PROFISSÃO EM COMPUTAÇÃO</h2>
          </div>

          <div class="capa-student-box text-right text-xs mr-8">
            <div v-if="hasValue(store.reportData.aluno)">ALUNO(A): {{ store.reportData.aluno }}</div>
            <div v-else class="preview-field empty-field">ALUNO(A): [NOME DO ALUNO]</div>
            <div v-if="hasValue(store.reportData.ru)" class="mt-1">RU: {{ store.reportData.ru }}</div>
            <div v-else class="preview-field empty-field mt-1">RU: [RU DO ALUNO]</div>
          </div>

          <div class="capa-footer text-[10pt]">
            <div class="professor mb-1">PROFESSOR ORIENTADOR: PROF. EROS LEON KOHLER, ME.</div>
            <div class="ano">{{ store.reportData.ano || 2026 }}</div>
          </div>
        </div>

        <!-- SUMÁRIO -->
        <div class="page sumario-page">
          <h2 class="section-title text-center">SUMÁRIO</h2>
          <ul class="sumario-list">
            <li><span class="sumario-text">1. Introdução</span><span class="sumario-dots"></span><span class="sumario-num">3</span></li>
            <li><span class="sumario-text">2. Profissão ou área escolhida</span><span class="sumario-dots"></span><span class="sumario-num">3</span></li>
            <li><span class="sumario-sub-text">2.1 O que faz esse profissional?</span><span class="sumario-dots"></span><span class="sumario-num">3</span></li>
            <li><span class="sumario-sub-text">2.2 Onde esse profissional pode atuar?</span><span class="sumario-dots"></span><span class="sumario-num">3</span></li>
            <li><span class="sumario-text">3. Competências necessárias</span><span class="sumario-dots"></span><span class="sumario-num">4</span></li>
            <li><span class="sumario-sub-text">3.1 Competências técnicas</span><span class="sumario-dots"></span><span class="sumario-num">4</span></li>
            <li><span class="sumario-sub-text">3.2 Competências comportamentais</span><span class="sumario-dots"></span><span class="sumario-num">4</span></li>
            <li><span class="sumario-text">4. Tecnologias, ferramentas e conhecimentos utilizados</span><span class="sumario-dots"></span><span class="sumario-num">4</span></li>
            <li><span class="sumario-text">5. Formas de ingresso na área</span><span class="sumario-dots"></span><span class="sumario-num">5</span></li>
            <li><span class="sumario-text">6. Desafios da profissão</span><span class="sumario-dots"></span><span class="sumario-num">5</span></li>
            <li><span class="sumario-text">7. Tendências e futuro da área</span><span class="sumario-dots"></span><span class="sumario-num">5</span></li>
            <li><span class="sumario-text">8. Relação com meu curso</span><span class="sumario-dots"></span><span class="sumario-num">5</span></li>
            <li><span class="sumario-text">9. Reflexão pessoal: minha trajetória e a profissão pesquisada</span><span class="sumario-dots"></span><span class="sumario-num">6</span></li>
            <li><span class="sumario-sub-text">9.1 Por que essa profissão chamou minha atenção?</span><span class="sumario-dots"></span><span class="sumario-num">6</span></li>
            <li><span class="sumario-sub-text">9.2 Quais aspectos da profissão mais despertaram meu interesse?</span><span class="sumario-dots"></span><span class="sumario-num">6</span></li>
            <li><span class="sumario-sub-text">9.3 Quais competências eu já possuo que podem ajudar?</span><span class="sumario-dots"></span><span class="sumario-num">6</span></li>
            <li><span class="sumario-sub-text">9.4 Quais competências preciso desenvolver?</span><span class="sumario-dots"></span><span class="sumario-num">6</span></li>
            <li><span class="sumario-sub-text">9.5 Quais dificuldades podem surgir na minha trajetória?</span><span class="sumario-dots"></span><span class="sumario-num">7</span></li>
            <li><span class="sumario-sub-text">9.6 Como minha realidade de vida influencia meu caminho?</span><span class="sumario-dots"></span><span class="sumario-num">7</span></li>
            <li><span class="sumario-sub-text">9.7 Como posso me preparar melhor para atuar na área?</span><span class="sumario-dots"></span><span class="sumario-num">7</span></li>
            <li><span class="sumario-text">10. Planejamento inicial de carreira</span><span class="sumario-dots"></span><span class="sumario-num">7</span></li>
            <li><span class="sumario-text">11. Educação financeira aplicada à carreira</span><span class="sumario-dots"></span><span class="sumario-num">7</span></li>
            <li><span class="sumario-sub-text">11.1 Possíveis custos para minha formação</span><span class="sumario-dots"></span><span class="sumario-num">8</span></li>
            <li><span class="sumario-sub-text">11.2 Prioridades financeiras</span><span class="sumario-dots"></span><span class="sumario-num">8</span></li>
            <li><span class="sumario-text">12. Conclusão</span><span class="sumario-dots"></span><span class="sumario-num">8</span></li>
            <li><span class="sumario-text">13. Referências</span><span class="sumario-dots"></span><span class="sumario-num">9</span></li>
          </ul>
        </div>

        <!-- INTRODUÇÃO E SEÇÃO 2 -->
        <div class="page body-page">
          <h2 class="section-title">1. Introdução</h2>
          <div class="academic-text">
            Neste trabalho, será apresentada uma pesquisa sobre a profissão/área de atuação de 
            <span :class="{ 'placeholder': !hasValue(store.reportData.intro_profissao) }">
              {{ store.reportData.intro_profissao || '[profissão ou área escolhida]' }}
            </span>.
            Escolhi essa profissão/área porque 
            <span :class="{ 'placeholder': !hasValue(store.reportData.intro_motivo) }">
              {{ store.reportData.intro_motivo || '[explique brevemente o motivo da escolha]' }}
            </span>.
            O objetivo deste trabalho é compreender melhor como essa profissão funciona, quais competências são necessárias, quais tecnologias são utilizadas, quais desafios existem para ingressar na área e como essa trajetória se relaciona com meus objetivos acadêmicos, profissionais e pessoais.
          </div>

          <h2 class="section-title" style="margin-top: 2rem;">2. Profissão ou área escolhida</h2>
          <table class="academic-table compact">
            <thead>
              <tr>
                <th style="width: 40%">Campo</th>
                <th style="width: 60%">Preenchimento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Profissão/área pesquisada</strong></td>
                <td>
                  <span :class="{ 'placeholder': !hasValue(store.reportData.intro_profissao) }">
                    {{ store.reportData.intro_profissao || '[profissão ou área escolhida]' }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <h3 class="subsection-title">2.1 O que faz esse profissional?</h3>
          <p class="academic-instructions">As principais atividades realizadas por esse profissional são:</p>
          <ul v-if="hasListItems(store.reportData.atividades)" class="academic-list">
            <li v-for="(item, idx) in filterEmpty(store.reportData.atividades)" :key="idx">{{ item }}</li>
          </ul>
          <ul v-else class="academic-list placeholder-list">
            <li>[Atividade 1]</li>
            <li>[Atividade 2]</li>
            <li>[Atividade 3]</li>
          </ul>

          <h3 class="subsection-title">2.2 Onde esse profissional pode atuar?</h3>
          <p class="academic-instructions">Ambientes e setores onde essa profissão aparece:</p>
          <ul v-if="hasListItems(store.reportData.setores)" class="academic-list">
            <li v-for="(item, idx) in filterEmpty(store.reportData.setores)" :key="idx">{{ item }}</li>
          </ul>
          <ul v-else class="academic-list placeholder-list">
            <li>[Setor/Ambiente 1]</li>
            <li>[Setor/Ambiente 2]</li>
            <li>[Setor/Ambiente 3]</li>
          </ul>
        </div>

        <!-- COMPETÊNCIAS -->
        <div class="page body-page">
          <h2 class="section-title">3. Competências necessárias</h2>
          
          <h3 class="subsection-title">3.1 Competências técnicas</h3>
          <table class="academic-table">
            <thead>
              <tr>
                <th style="width: 35%">Competência técnica</th>
                <th style="width: 65%">Por que ela é importante?</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(c, idx) in store.reportData.comp_tecnicas" :key="idx">
                <td :class="{ 'placeholder': !c.nome }">{{ c.nome || `[Competência Técnica ${idx + 1}]` }}</td>
                <td :class="{ 'placeholder': !c.desc }">{{ c.desc || '[Explicação prática]' }}</td>
              </tr>
            </tbody>
          </table>

          <h3 class="subsection-title" style="margin-top: 2rem;">3.2 Competências comportamentais</h3>
          <table class="academic-table">
            <thead>
              <tr>
                <th style="width: 35%">Competência comportamental</th>
                <th style="width: 65%">Por que ela é importante?</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(c, idx) in store.reportData.comp_comportamentais" :key="idx">
                <td :class="{ 'placeholder': !c.nome }">{{ c.nome || `[Competência Comportamental ${idx + 1}]` }}</td>
                <td :class="{ 'placeholder': !c.desc }">{{ c.desc || '[Explicação prática]' }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- TECNOLOGIAS E INGRESSO -->
        <div class="page body-page">
          <h2 class="section-title">4. Tecnologias, ferramentas e conhecimentos utilizados</h2>
          <table class="academic-table">
            <thead>
              <tr>
                <th style="width: 35%">Tecnologia / Ferramenta</th>
                <th style="width: 65%">Como é usado na profissão?</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(t, idx) in store.reportData.tecnologias" :key="idx">
                <td :class="{ 'placeholder': !t.nome }">{{ t.nome || `[Tecnologia ${idx + 1}]` }}</td>
                <td :class="{ 'placeholder': !t.desc }">{{ t.desc || '[Como é usada]' }}</td>
              </tr>
            </tbody>
          </table>

          <h2 class="section-title" style="margin-top: 3rem;">5. Formas de ingresso na área</h2>
          <p class="academic-instructions">Formas pelas quais uma pessoa pode começar nessa profissão:</p>
          <ul v-if="hasListItems(store.reportData.ingresso)" class="academic-list">
            <li v-for="(item, idx) in filterEmpty(store.reportData.ingresso)" :key="idx">{{ item }}</li>
          </ul>
          <ul v-else class="academic-list placeholder-list">
            <li>[Forma de ingresso 1]</li>
            <li>[Forma de ingresso 2]</li>
            <li>[Forma de ingresso 3]</li>
          </ul>
        </div>

        <!-- DESAFIOS E TENDÊNCIAS -->
        <div class="page body-page">
          <h2 class="section-title">6. Desafios da profissão</h2>
          <table class="academic-table">
            <thead>
              <tr>
                <th style="width: 40%">Desafio</th>
                <th style="width: 60%">Como esse desafio pode ser enfrentado?</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(d, idx) in store.reportData.desafios" :key="idx">
                <td :class="{ 'placeholder': !d.nome }">{{ d.nome || `[Desafio ${idx + 1}]` }}</td>
                <td :class="{ 'placeholder': !d.desc }">{{ d.desc || '[Solução / Enfrentamento]' }}</td>
              </tr>
            </tbody>
          </table>

          <h2 class="section-title" style="margin-top: 3rem;">7. Tendências e futuro da área</h2>
          <p class="academic-instructions">Tendências que podem influenciar essa profissão nos próximos anos:</p>
          <ul v-if="hasListItems(store.reportData.tendencias)" class="academic-list">
            <li v-for="(item, idx) in filterEmpty(store.reportData.tendencias)" :key="idx">{{ item }}</li>
          </ul>
          <ul v-else class="academic-list placeholder-list">
            <li>[Tendência tecnológica 1]</li>
            <li>[Tendência tecnológica 2]</li>
            <li>[Tendência tecnológica 3]</li>
          </ul>

          <h2 class="section-title" style="margin-top: 3rem;">8. Relação com meu curso</h2>
          <p class="academic-instructions">Como a profissão pesquisada se relaciona com o meu curso:</p>
          <ul v-if="hasListItems(store.reportData.relacao)" class="academic-list">
            <li v-for="(item, idx) in filterEmpty(store.reportData.relacao)" :key="idx">{{ item }}</li>
          </ul>
          <ul v-else class="academic-list placeholder-list">
            <li>[Relação curricular 1]</li>
            <li>[Relação curricular 2]</li>
            <li>[Relação curricular 3]</li>
          </ul>
        </div>

        <!-- REFLEXÃO PESSOAL -->
        <div class="page body-page">
          <h2 class="section-title">9. Reflexão pessoal: minha trajetória e a profissão pesquisada</h2>
          
          <div class="academic-subsection-q">
            <strong>9.1 Por que essa profissão chamou minha atenção?</strong>
            <p :class="[hasValue(store.reportData.ref_91) ? 'academic-text' : 'academic-text placeholder']">
              {{ store.reportData.ref_91 || '[Resposta do estudante não preenchida]' }}
            </p>
          </div>
          <div class="academic-subsection-q">
            <strong>9.2 Quais aspectos da profissão mais despertaram meu interesse?</strong>
            <p :class="[hasValue(store.reportData.ref_92) ? 'academic-text' : 'academic-text placeholder']">
              {{ store.reportData.ref_92 || '[Resposta do estudante não preenchida]' }}
            </p>
          </div>
          <div class="academic-subsection-q">
            <strong>9.3 Quais competências eu já possuo que podem ajudar nessa trajetória?</strong>
            <p :class="[hasValue(store.reportData.ref_93) ? 'academic-text' : 'academic-text placeholder']">
              {{ store.reportData.ref_93 || '[Resposta do estudante não preenchida]' }}
            </p>
          </div>
          <div class="academic-subsection-q">
            <strong>9.4 Quais competências preciso desenvolver?</strong>
            <p :class="[hasValue(store.reportData.ref_94) ? 'academic-text' : 'academic-text placeholder']">
              {{ store.reportData.ref_94 || '[Resposta do estudante não preenchida]' }}
            </p>
          </div>
          <div class="academic-subsection-q">
            <strong>9.5 Quais dificuldades pessoais, acadêmicas ou profissionais podem surgir na minha trajetória?</strong>
            <p :class="[hasValue(store.reportData.ref_95) ? 'academic-text' : 'academic-text placeholder']">
              {{ store.reportData.ref_95 || '[Resposta do estudante não preenchida]' }}
            </p>
          </div>
          <div class="academic-subsection-q">
            <strong>9.6 Como minha realidade de vida influencia meu caminho profissional?</strong>
            <p :class="[hasValue(store.reportData.ref_96) ? 'academic-text' : 'academic-text placeholder']">
              {{ store.reportData.ref_96 || '[Resposta do estudante não preenchida]' }}
            </p>
          </div>
          <div class="academic-subsection-q">
            <strong>9.7 Como posso me preparar melhor para atuar nessa área?</strong>
            <p :class="[hasValue(store.reportData.ref_97) ? 'academic-text' : 'academic-text placeholder']">
              {{ store.reportData.ref_97 || '[Resposta do estudante não preenchida]' }}
            </p>
          </div>
        </div>

        <!-- PLANEJAMENTO E CUSTOS -->
        <div class="page body-page">
          <h2 class="section-title">10. Planejamento inicial de carreira</h2>
          <table class="academic-table">
            <thead>
              <tr>
                <th style="width: 20%">Prazo</th>
                <th style="width: 25%">Meta acadêmica</th>
                <th style="width: 25%">Meta profissional</th>
                <th style="width: 30%">Ação prática</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(p, idx) in store.reportData.planejamento" :key="idx">
                <td><strong>{{ p.prazo }}</strong></td>
                <td :class="{ 'placeholder': !p.acad }">{{ p.acad || '[Estudos / Cursos]' }}</td>
                <td :class="{ 'placeholder': !p.prof }">{{ p.prof || '[Foco Profissional]' }}</td>
                <td :class="{ 'placeholder': !p.acao }">{{ p.acao || '[Ação prática]' }}</td>
              </tr>
            </tbody>
          </table>

          <h2 class="section-title" style="margin-top: 3rem;">11. Educação financeira aplicada à carreira</h2>
          <p class="academic-text">Construir uma carreira em Computação exige planejamento. Além de estudar, o estudante pode precisar investir em equipamentos, internet, cursos, certificações, livros, eventos ou ferramentas.</p>
          
          <h3 class="subsection-title">11.1 Possíveis custos para minha formação</h3>
          <table class="academic-table">
            <thead>
              <tr>
                <th style="width: 30%">Item</th>
                <th style="width: 20%">É necessário agora?</th>
                <th style="width: 20%">Valor estimado</th>
                <th style="width: 30%">Observação</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(c, idx) in store.reportData.custos" :key="idx">
                <td>{{ c.item }}</td>
                <td>{{ c.nec }}</td>
                <td>R$ {{ c.valor || '0,00' }}</td>
                <td>{{ c.obs || '-' }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- PRIORIDADES E CONCLUSÃO -->
        <div class="page body-page">
          <h3 class="subsection-title">11.2 Prioridades financeiras</h3>
          <table class="academic-table compact">
            <thead>
              <tr>
                <th style="width: 45%">Campo</th>
                <th style="width: 55%">Preenchimento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Minha meta financeira relacionada à carreira</strong></td>
                <td>
                  <span :class="{ 'placeholder': !hasValue(store.reportData.fin_meta) }">
                    {{ store.reportData.fin_meta || '[Preencher meta financeira]' }}
                  </span>
                </td>
              </tr>
              <tr>
                <td><strong>Valor estimado</strong></td>
                <td>
                  <span :class="{ 'placeholder': !hasValue(store.reportData.fin_valor) }">
                    {{ store.reportData.fin_valor ? `R$ ${store.reportData.fin_valor}` : 'R$ [Valor]' }}
                  </span>
                </td>
              </tr>
              <tr>
                <td><strong>Prazo para alcançar a meta</strong></td>
                <td>
                  <span :class="{ 'placeholder': !hasValue(store.reportData.fin_prazo) }">
                    {{ store.reportData.fin_prazo || '[Prazo]' }}
                  </span>
                </td>
              </tr>
              <tr>
                <td><strong>Quanto precisaria guardar por mês</strong></td>
                <td>
                  <span :class="{ 'placeholder': !hasValue(store.reportData.fin_mensal) }">
                    {{ store.reportData.fin_mensal ? `R$ ${store.reportData.fin_mensal}` : 'R$ [Mensal]' }}
                  </span>
                </td>
              </tr>
              <tr>
                <td><strong>O que posso ajustar na minha rotina</strong></td>
                <td>
                  <span :class="{ 'placeholder': !hasValue(store.reportData.fin_ajuste) }">
                    {{ store.reportData.fin_ajuste || '[Ajustes na rotina]' }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <h2 class="section-title" style="margin-top: 3rem;">12. Conclusão</h2>
          <p class="academic-text">
            Neste trabalho, compreendi que a profissão/área de 
            <span :class="{ 'placeholder': !hasValue(store.reportData.intro_profissao) }">
              {{ store.reportData.intro_profissao || '[profissão ou área escolhida]' }}
            </span> 
            exige conhecimentos técnicos, competências comportamentais e planejamento contínuo.
          </p>
          
          <p class="academic-instructions">Os principais aprendizados que tive foram:</p>
          {{" "}}
          <ul v-if="hasListItems(store.reportData.aprendizados)" class="academic-list">
            <li v-for="(item, idx) in filterEmpty(store.reportData.aprendizados)" :key="idx">{{ item }}</li>
          </ul>
          <ul v-else class="academic-list placeholder-list">
            <li>[Aprendizado 1]</li>
            <li>[Aprendizado 2]</li>
          </ul>

          <p class="academic-instructions">A pesquisa contribuiu para minha visão de carreira porque:</p>
          <ul v-if="hasListItems(store.reportData.contribuicao)" class="academic-list">
            <li v-for="(item, idx) in filterEmpty(store.reportData.contribuicao)" :key="idx">{{ item }}</li>
          </ul>
          <ul v-else class="academic-list placeholder-list">
            <li>[Contribuição de carreira 1]</li>
            <li>[Contribuição de carreira 2]</li>
          </ul>

          <p class="academic-instructions">A partir deste estudo, pretendo:</p>
          <ul v-if="hasListItems(store.reportData.intencoes)" class="academic-list">
            <li v-for="(item, idx) in filterEmpty(store.reportData.intencoes)" :key="idx">{{ item }}</li>
          </ul>
          <ul v-else class="academic-list placeholder-list">
            <li>[Próxima intenção / Meta 1]</li>
            <li>[Próxima intenção / Meta 2]</li>
          </ul>
        </div>

        <!-- REFERÊNCIAS -->
        <div class="page body-page">
          <h2 class="section-title">13. Referências</h2>
          <p class="academic-instructions">Fontes bibliográficas e digitais consultadas:</p>
          <ul v-if="hasListItems(store.reportData.referencias)" class="academic-list">
            <li v-for="(item, idx) in filterEmpty(store.reportData.referencias)" :key="idx">{{ item }}</li>
          </ul>
          <ul v-else class="academic-list placeholder-list">
            <li>[Fonte consultada 1]</li>
            <li>[Fonte consultada 2]</li>
            <li>[Fonte consultada 3]</li>
          </ul>
        </div>

      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useReportStore } from '../stores/reportStore';
const store = useReportStore();

// Helpers para avaliar campos e listas
const hasValue = (val: any) => {
  return val !== undefined && val !== null && val.toString().trim() !== "";
};

const filterEmpty = (list: string[]) => {
  return list ? list.filter(item => item && item.trim() !== "") : [];
};

const hasListItems = (list: string[]) => {
  return filterEmpty(list).length > 0;
};
</script>
