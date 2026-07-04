import os

base_dir = r"d:\engsoftware\proj_interdisciplinar\relatorio-real\documento_base"
os.makedirs(base_dir, exist_ok=True)

templates = {
    "00_capa.md": """# PROJETO INTERDISCIPLINAR I
## RELATÓRIO: Minha Profissão em Computação

**Instituição**: Centro Universitário Internacional UNINTER
**Curso**: [Preencher com seu Curso]
**Aluno(a)**: [Preencher Nome]
**RU**: [Preencher RU]
**Professor**: Prof. Eros Leon Kohler, Me.
**Ano**: 2026
""",
    "01_introducao.md": """# 1. Introdução

Neste trabalho, será apresentada uma pesquisa sobre a profissão/área de atuação de [preencher com a profissão ou área escolhida].

Escolhi essa profissão/área porque [explique brevemente o motivo da escolha: curiosidade, relação com o curso, experiência anterior, interesse profissional, oportunidade de mercado etc.].

O objetivo deste trabalho é compreender melhor como essa profissão funciona, quais competências são necessárias, quais tecnologias são utilizadas, quais desafios existem para ingressar na área e como essa trajetória se relaciona com meus objetivos acadêmicos, profissionais e pessoais.
""",
    "02_profissao_escolhida.md": """# 2. Profissão ou área escolhida

| Campo | Preenchimento |
| --- | --- |
| Profissão/área pesquisada | [preencher] |

## 2.1 O que faz esse profissional?

Descreva, com suas palavras, as principais atividades realizadas por esse profissional. Explique que tipo de trabalho ele realiza, que problemas ajuda a resolver e em quais contextos pode atuar.

**Resposta do estudante**:
- [preencher]
- [preencher]
- [preencher]

## 2.2 Onde esse profissional pode atuar?

Indique ambientes e setores onde essa profissão aparece, como empresas de tecnologia, bancos, indústrias, escolas, hospitais, startups, órgãos públicos, consultorias, trabalho remoto ou atuação autônoma.

**Resposta do estudante**:
- [preencher]
- [preencher]
- [preencher]
""",
    "03_competencias.md": """# 3. Competências necessárias

## 3.1 Competências técnicas

Liste e explique pelo menos 5 competências técnicas importantes para essa profissão.

| Competência técnica | Por que ela é importante? |
| --- | --- |
| 1. [preencher] | [preencher] |
| 2. [preencher] | [preencher] |
| 3. [preencher] | [preencher] |
| 4. [preencher] | [preencher] |
| 5. [preencher] | [preencher] |

## 3.2 Competências comportamentais

Liste e explique pelo menos 5 competências comportamentais importantes para essa profissão, como comunicação, organização, trabalho em equipe, autonomia, responsabilidade, pensamento crítico, criatividade, ética e aprendizagem contínua.

| Competência comportamental | Por que ela é importante? |
| --- | --- |
| 1. [preencher] | [preencher] |
| 2. [preencher] | [preencher] |
| 3. [preencher] | [preencher] |
| 4. [preencher] | [preencher] |
| 5. [preencher] | [preencher] |
""",
    "04_tecnologias.md": """# 4. Tecnologias, ferramentas e conhecimentos utilizados

Pesquise quais tecnologias, ferramentas, linguagens, plataformas ou conhecimentos são comuns nessa profissão.

| Tecnologia, ferramenta ou conhecimento | Como é usado na profissão? |
| --- | --- |
| 1. [preencher] | [preencher] |
| 2. [preencher] | [preencher] |
| 3. [preencher] | [preencher] |
| 4. [preencher] | [preencher] |
| 5. [preencher] | [preencher] |
""",
    "05_ingresso.md": """# 5. Formas de ingresso na área

Explique como uma pessoa pode começar nessa profissão. Você pode considerar estágio, primeiro emprego, projetos acadêmicos, cursos complementares, certificações, portfólio, comunidades, redes de contato, trabalho freelancer, concursos, processos seletivos ou experiência prática.

**Resposta do estudante**:
- [preencher]
- [preencher]
- [preencher]
- [preencher]
""",
    "06_desafios.md": """# 6. Desafios da profissão

Descreva pelo menos 3 desafios enfrentados por quem deseja ingressar ou se desenvolver nessa área.

| Desafio | Como esse desafio pode ser enfrentado? |
| --- | --- |
| 1. [preencher] | [preencher] |
| 2. [preencher] | [preencher] |
| 3. [preencher] | [preencher] |
""",
    "07_tendencias.md": """# 7. Tendências e futuro da área

Pesquise e explique quais tendências podem influenciar essa profissão nos próximos anos. Considere temas como inteligência artificial, automação, segurança digital, nuvem, análise de dados, IoT, acessibilidade digital e trabalho remoto.

**Resposta do estudante**:
- [preencher]
- [preencher]
- [preencher]
- [preencher]
""",
    "08_relacao_curso.md": """# 8. Relação com meu curso

Explique como a profissão pesquisada se relaciona com o curso que você está fazendo. Indique quais unidades curriculares, conhecimentos ou experiências do curso podem ajudar nessa profissão.

**Resposta do estudante**:
- [preencher]
- [preencher]
- [preencher]
- [preencher]
""",
    "09_reflexao_pessoal.md": """# 9. Reflexão pessoal: minha trajetória e a profissão pesquisada

### 9.1 Por que essa profissão chamou minha atenção?
[preencher]

### 9.2 Quais aspectos da profissão mais despertaram meu interesse?
[preencher]

### 9.3 Quais competências eu já possuo que podem ajudar nessa trajetória?
[preencher]

### 9.4 Quais competências preciso desenvolver?
[preencher]

### 9.5 Quais dificuldades pessoais, acadêmicas ou profissionais podem surgir na minha trajetória?
[preencher]

### 9.6 Como minha realidade de vida influencia meu caminho profissional?
[preencher]

### 9.7 Como posso me preparar melhor para atuar nessa área?
[preencher]
""",
    "10_planejamento_carreira.md": """# 10. Planejamento inicial de carreira

Preencha o quadro abaixo com metas simples e realistas.

| Prazo | Meta acadêmica | Meta profissional | Ação prática |
| --- | --- | --- | --- |
| Próximos 6 meses | [preencher] | [preencher] | [preencher] |
| Próximo 1 ano | [preencher] | [preencher] | [preencher] |
| Próximos 3 anos | [preencher] | [preencher] | [preencher] |
""",
    "11_educacao_financeira.md": """# 11. Educação financeira aplicada à carreira

Construir uma carreira em Computação exige planejamento. Além de estudar, o estudante pode precisar investir em equipamentos, internet, cursos, certificações, livros, eventos ou ferramentas.

## 11.1 Possíveis custos para minha formação

Preencha a tabela com valores aproximados ou estimados.

| Item | É necessário agora? | Valor estimado | Observação |
| --- | --- | --- | --- |
| Internet/celular | Sim / Não | R$ [preencher] | [preencher] |
| Computador ou manutenção | Sim / Não | R$ [preencher] | [preencher] |
| Curso complementar | Sim / Não | R$ [preencher] | [preencher] |
| Certificação | Sim / Não | R$ [preencher] | [preencher] |
| Livros ou materiais | Sim / Não | R$ [preencher] | [preencher] |
| Transporte ou deslocamento | Sim / Não | R$ [preencher] | [preencher] |
| Outro item | Sim / Não | R$ [preencher] | [preencher] |

## 11.2 Prioridades financeiras

Escolha uma meta financeira relacionada à sua formação ou carreira, como melhorar o computador, pagar um curso, obter certificação, melhorar a internet, participar de evento ou criar reserva de emergência.

| Campo | Preenchimento |
| --- | --- |
| Minha meta financeira relacionada à carreira | [preencher] |
| Valor estimado | R$ [preencher] |
| Prazo para alcançar a meta | [preencher] |
| Quanto precisaria guardar por mês | R$ [preencher] |
| O que posso ajustar na minha rotina para alcançar essa meta | [preencher] |
""",
    "12_conclusao.md": """# 12. Conclusão

Neste trabalho, compreendi que a profissão/área de [preencher] exige conhecimentos técnicos, competências comportamentais e planejamento contínuo.

Os principais aprendizados que tive foram:
- [preencher]
- [preencher]

A pesquisa contribuiu para minha visão de carreira porque:
- [preencher]
- [preencher]

A partir deste estudo, pretendo:
- [preencher]
- [preencher]
""",
    "13_referencias.md": """# 13. Referências

Liste aqui as fontes utilizadas, como sites, vídeos, entrevistas, artigos, portais de vagas, materiais da unidade curricular, relatórios ou documentos institucionais.

- [preencher]
- [preencher]
- [preencher]
"""
}

for name, content in templates.items():
    path = os.path.join(base_dir, name)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Created template: {name}")
print("Finished creating all markdown templates!")
