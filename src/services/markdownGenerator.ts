import { type ReportData } from '../data/defaultData';

export function compileReportToMarkdown(data: ReportData): string {
    const filterEmptyStr = (val: string, placeholder = "[Não preenchido]") => {
        return val && val.trim() !== "" ? val.trim() : placeholder;
    };

    const filterList = (list: string[], placeholder = "- [Não preenchido]") => {
        const filtered = list.filter(item => item && item.trim() !== "");
        return filtered.length > 0 ? filtered.map(item => `- ${item}`).join('\n') : placeholder;
    };

    // Capa
    let md = `# CENTRO UNIVERSITÁRIO INTERNACIONAL UNINTER
## CURSO: ${filterEmptyStr(data.curso).toUpperCase()}
### PROJETO INTERDISCIPLINAR I
**RELATÓRIO: MINHA PROFISSÃO EM COMPUTAÇÃO**

- **Estudante**: ${filterEmptyStr(data.aluno)}
- **RU**: ${filterEmptyStr(data.ru)}
- **Ano de Entrega**: ${data.ano || 2026}
- **Professor Orientador**: Prof. Eros Leon Kohler, Me.

---

# 1. Introdução

Neste trabalho, é apresentada uma pesquisa sobre a profissão/área de atuação de **${filterEmptyStr(data.intro_profissao)}**. A escolha desta área justifica-se pelo seguinte motivo:

> ${filterEmptyStr(data.intro_motivo)}

O objetivo principal deste relatório é analisar o perfil deste profissional, as competências e tecnologias envolvidas no dia a dia da profissão, as formas de inserção no mercado de trabalho e estabelecer uma reflexão crítica de carreira alinhada aos objetivos do curso.

---

# 2. Profissão ou área escolhida

| Campo | Informação |
| :--- | :--- |
| **Profissão/Área Pesquisada** | ${filterEmptyStr(data.intro_profissao)} |

## 2.1 O que faz esse profissional?
As principais atividades desenvolvidas no dia a dia da profissão são:

${filterList(data.atividades)}

## 2.2 Onde esse profissional pode atuar?
Os principais setores, tipos de empresas ou ambientes de atuação são:

${filterList(data.setores)}

---

# 3. Competências necessárias

## 3.1 Competências técnicas (Hard Skills)
Abaixo estão listadas as 5 principais competências técnicas para o exercício da profissão:

| Competência Técnica | Por que ela é importante? |
| :--- | :--- |
${data.comp_tecnicas.map(c => `| **${filterEmptyStr(c.nome)}** | ${filterEmptyStr(c.desc)} |`).join('\n')}

## 3.2 Competências comportamentais (Soft Skills)
Abaixo estão listadas as 5 principais competências comportamentais importantes:

| Competência Comportamental | Por que ela é importante? |
| :--- | :--- |
${data.comp_comportamentais.map(c => `| **${filterEmptyStr(c.nome)}** | ${filterEmptyStr(c.desc)} |`).join('\n')}

---

# 4. Tecnologias, ferramentas e conhecimentos utilizados
Abaixo são identificadas as 5 ferramentas ou frameworks utilizados por este profissional:

| Tecnologia / Ferramenta | Como é usada na profissão? |
| :--- | :--- |
${data.tecnologias.map(t => `| **${filterEmptyStr(t.nome)}** | ${filterEmptyStr(t.desc)} |`).join('\n')}

---

# 5. Formas de ingresso na área
Principais formas ou estratégias para inserção inicial no mercado de trabalho:

${filterList(data.ingresso)}

---

# 6. Desafios da profissão
Principais desafios enfrentados por este profissional e possíveis formas de mitigação:

| Desafio Identificado | Como este desafio pode ser enfrentado? |
| :--- | :--- |
${data.desafios.map(d => `| **${filterEmptyStr(d.nome)}** | ${filterEmptyStr(d.desc)} |`).join('\n')}

---

# 7. Tendências e futuro da área
Principais tendências que devem influenciar a profissão nos próximos anos:

${filterList(data.tendencias)}

---

# 8. Relação com meu curso
Disciplinas ou conceitos da grade curricular que possuem conexão direta com a profissão pesquisada:

${filterList(data.relacao)}

---

# 9. Reflexão pessoal: minha trajetória e a profissão pesquisada

### 9.1 Por que essa profissão chamou minha atenção?
> ${filterEmptyStr(data.ref_91)}

### 9.2 Quais aspectos da profissão mais despertaram meu interesse?
> ${filterEmptyStr(data.ref_92)}

### 9.3 Quais competências eu já possuo que podem ajudar nessa trajetória?
> ${filterEmptyStr(data.ref_93)}

### 9.4 Quais competências preciso desenvolver?
> ${filterEmptyStr(data.ref_94)}

### 9.5 Quais dificuldades pessoais, acadêmicas ou profissionais podem surgir na minha trajetória?
> ${filterEmptyStr(data.ref_95)}

### 9.6 Como minha realidade de vida influencia meu caminho profissional?
> ${filterEmptyStr(data.ref_96)}

### 9.7 Como posso me preparar melhor para atuar nessa área?
> ${filterEmptyStr(data.ref_97)}

---

# 10. Planejamento inicial de carreira
Metas e planos de curto, médio e longo prazo:

| Prazo | Meta Acadêmica | Meta Profissional | Ação Prática |
| :--- | :--- | :--- | :--- |
${data.planejamento.map(p => `| **${p.prazo}** | ${filterEmptyStr(p.acad)} | ${filterEmptyStr(p.prof)} | ${filterEmptyStr(p.acao)} |`).join('\n')}

---

# 11. Educação financeira aplicada à carreira

## 11.1 Possíveis custos para minha formação
Tabela de orçamento de gastos estimados:

| Item | É necessário agora? | Valor estimado | Observação |
| :--- | :--- | :--- | :--- |
${data.custos.map(c => `| **${c.item}** | ${c.nec} | R$ ${filterEmptyStr(c.valor, "0,00")} | ${filterEmptyStr(c.obs, "-")} |`).join('\n')}

## 11.2 Prioridades financeiras
Metas de investimento de médio a longo prazo na carreira:

| Campo | Planejamento |
| :--- | :--- |
| **Minha meta financeira** | ${filterEmptyStr(data.fin_meta)} |
| **Valor estimado** | R$ ${filterEmptyStr(data.fin_valor, "0,00")} |
| **Prazo planejado** | ${filterEmptyStr(data.fin_prazo)} |
| **Economia mensal necessária** | R$ ${filterEmptyStr(data.fin_mensal, "0,00")} |
| **Ajustes de rotina necessários** | ${filterEmptyStr(data.fin_ajuste)} |

---

# 12. Conclusão

Neste trabalho de pesquisa sobre a área de ${filterEmptyStr(data.intro_profissao)}, foram compreendidos os desafios, competências e caminhos de preparação necessários.

### Os principais aprendizados obtidos foram:
${filterList(data.aprendizados)}

### A contribuição desta pesquisa para minha visão de carreira:
${filterList(data.contribuicao)}

### Pretendo aplicar este aprendizado realizando as seguintes ações:
${filterList(data.intencoes)}

---

# 13. Referências
Fontes consultadas durante a elaboração da pesquisa:

${filterList(data.referencias)}
`;

    return md;
}
