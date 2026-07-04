import {
    Document,
    Packer,
    Paragraph,
    TextRun,
    Table,
    TableRow,
    TableCell,
    AlignmentType,
    HeadingLevel,
    WidthType,
    BorderStyle,
    PageBreak,

} from 'docx';
import { saveAs } from 'file-saver';
import { type ReportData } from '../data/defaultData';

// Constantes ABNT (Conversão de cm para DXA: 1cm = 567 dxa)
const MARGIN_3CM = 1701; // Superior e Esquerda
const MARGIN_2CM = 1134; // Inferior e Direita
const FONT_FAMILY = "Arial";

// Helper para criar parágrafos ABNT normais (Arial, 12pt, espaçamento 1.5, justificado, recuo de 2cm na 1ª linha)
function createAcademicParagraph(text: string, bold = false): Paragraph {
    return new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: { line: 360, before: 120, after: 120 }, // 1.5 line spacing (360 dxa)
        indent: { firstLine: 1134 }, // 2cm indent
        children: [
            new TextRun({
                text: text,
                font: FONT_FAMILY,
                size: 24, // 12pt
                bold: bold
            })
        ]
    });
}

// Helper para títulos de seção principais (Todas maiúsculas, Arial, 12pt, negrito)
function createSectionTitle(text: string): Paragraph {
    return new Paragraph({
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 360, after: 180 },
        children: [
            new TextRun({
                text: text.toUpperCase(),
                font: FONT_FAMILY,
                size: 24, // 12pt
                bold: true
            })
        ]
    });
}

// Helper para títulos de subseção (Arial, 12pt, negrito, caixa baixa com primeira maiúscula)
function createSubsectionTitle(text: string): Paragraph {
    return new Paragraph({
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 240, after: 120 },
        children: [
            new TextRun({
                text: text,
                font: FONT_FAMILY,
                size: 24, // 12pt
                bold: true
            })
        ]
    });
}

// Helper para listas de itens com marcador recuado
function createAcademicListItem(text: string): Paragraph {
    return new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: { line: 360, before: 60, after: 60 },
        indent: { left: 1134 }, // Recuo de 2cm
        bullet: {
            level: 0
        },
        children: [
            new TextRun({
                text: text,
                font: FONT_FAMILY,
                size: 24 // 12pt
            })
        ]
    });
}

// Helper para criar células de tabela formatadas
function createTableCell(content: string, bold = false, widthPercent = 50, bgColor = "FFFFFF"): TableCell {
    return new TableCell({
        width: {
            size: widthPercent,
            type: WidthType.PERCENTAGE
        },
        shading: {
            fill: bgColor
        },
        margins: {
            top: 120,
            bottom: 120,
            left: 180,
            right: 180
        },
        children: [
            new Paragraph({
                alignment: AlignmentType.LEFT,
                spacing: { line: 240 }, // Espaçamento simples em tabelas
                children: [
                    new TextRun({
                        text: content || "-",
                        font: FONT_FAMILY,
                        size: 22, // 11pt para tabelas
                        bold: bold
                    })
                ]
            })
        ]
    });
}

// Helper para criar bordas pretas finas para tabelas
const borderStyle = {
    style: BorderStyle.SINGLE,
    size: 4, // thin border
    color: "000000"
};

const tableBorders = {
    top: borderStyle,
    bottom: borderStyle,
    left: borderStyle,
    right: borderStyle,
    insideHorizontal: borderStyle,
    insideVertical: borderStyle
};

export async function generateWordReport(data: ReportData): Promise<void> {
    const docChildren: any[] = [];

    // ==========================================================================
    // 1. CAPA (PÁGINA 1)
    // ==========================================================================
    
    // Espaçadores iniciais para empurrar o título do cabeçalho
    docChildren.push(
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 240 },
            children: [
                new TextRun({
                    text: "CENTRO UNIVERSITÁRIO INTERNACIONAL UNINTER",
                    font: FONT_FAMILY,
                    size: 24,
                    bold: true
                })
            ]
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 120 },
            children: [
                new TextRun({
                    text: `CURSO: ${data.curso.toUpperCase() || "[NOME DO CURSO]"}`,
                    font: FONT_FAMILY,
                    size: 24,
                    bold: true
                })
            ]
        })
    );

    // Adiciona linhas vazias para espaçamento central
    for (let i = 0; i < 8; i++) {
        docChildren.push(new Paragraph({}));
    }

    // Título Principal
    docChildren.push(
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 240 },
            children: [
                new TextRun({
                    text: "PROJETO INTERDISCIPLINAR I",
                    font: FONT_FAMILY,
                    size: 32, // 16pt
                    bold: true
                })
            ]
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 120 },
            children: [
                new TextRun({
                    text: "RELATÓRIO: MINHA PROFISSÃO EM COMPUTAÇÃO",
                    font: FONT_FAMILY,
                    size: 26, // 13pt
                    bold: true
                })
            ]
        })
    );

    // Adiciona linhas vazias para empurrar os dados do estudante
    for (let i = 0; i < 9; i++) {
        docChildren.push(new Paragraph({}));
    }

    // Dados do Aluno
    docChildren.push(
        new Paragraph({
            alignment: AlignmentType.RIGHT,
            indent: { right: 1134 },
            children: [
                new TextRun({
                    text: `ALUNO(A): ${data.aluno.toUpperCase() || "[NOME DO ALUNO]"}`,
                    font: FONT_FAMILY,
                    size: 24,
                    bold: true
                })
            ]
        }),
        new Paragraph({
            alignment: AlignmentType.RIGHT,
            indent: { right: 1134 },
            spacing: { before: 120 },
            children: [
                new TextRun({
                    text: `RU: ${data.ru || "[RU DO ESTUDANTE]"}`,
                    font: FONT_FAMILY,
                    size: 24,
                    bold: true
                })
            ]
        })
    );

    // Adiciona linhas vazias para empurrar o rodapé
    for (let i = 0; i < 6; i++) {
        docChildren.push(new Paragraph({}));
    }

    // Rodapé da capa
    docChildren.push(
        new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: "PROFESSOR ORIENTADOR: PROF. EROS LEON KOHLER, ME.",
                    font: FONT_FAMILY,
                    size: 22,
                    bold: true
                })
            ]
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 120 },
            children: [
                new TextRun({
                    text: `${data.ano || 2026}`,
                    font: FONT_FAMILY,
                    size: 22,
                    bold: true
                })
            ]
        }),
        new Paragraph({
            children: [new PageBreak()] // Quebra de página física
        })
    );

    // ==========================================================================
    // 2. SUMÁRIO (PÁGINA 2)
    // ==========================================================================
    docChildren.push(
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 240, after: 240 },
            children: [
                new TextRun({
                    text: "SUMÁRIO",
                    font: FONT_FAMILY,
                    size: 24,
                    bold: true
                })
            ]
        })
    );

    const sumarioItens = [
        { label: "1. Introdução", page: "3" },
        { label: "2. Profissão ou área escolhida", page: "3" },
        { label: "   2.1 O que faz esse profissional?", page: "3" },
        { label: "   2.2 Onde esse profissional pode atuar?", page: "3" },
        { label: "3. Competências necessárias", page: "4" },
        { label: "   3.1 Competências técnicas", page: "4" },
        { label: "   3.2 Competências comportamentais", page: "4" },
        { label: "4. Tecnologias, ferramentas e conhecimentos utilizados", page: "4" },
        { label: "5. Formas de ingresso na área", page: "5" },
        { label: "6. Desafios da profissão", page: "5" },
        { label: "7. Tendências e futuro da área", page: "5" },
        { label: "8. Relação com meu curso", page: "5" },
        { label: "9. Reflexão pessoal: minha trajetória e a profissão pesquisada", page: "6" },
        { label: "   9.1 Por que essa profissão chamou minha atenção?", page: "6" },
        { label: "   9.2 Quais aspectos da profissão mais despertaram meu interesse?", page: "6" },
        { label: "   9.3 Quais competências eu já possuo que podem ajudar?", page: "6" },
        { label: "   9.4 Quais competências preciso desenvolver?", page: "6" },
        { label: "   9.5 Quais dificuldades podem surgir na minha trajetória?", page: "7" },
        { label: "   9.6 Como minha realidade de vida influencia meu caminho?", page: "7" },
        { label: "   9.7 Como posso me preparar melhor para atuar na área?", page: "7" },
        { label: "10. Planejamento inicial de carreira", page: "7" },
        { label: "11. Educação financeira aplicada à carreira", page: "7" },
        { label: "   11.1 Possíveis custos para minha formação", page: "8" },
        { label: "   11.2 Prioridades financeiras", page: "8" },
        { label: "12. Conclusão", page: "8" },
        { label: "13. Referências", page: "9" }
    ];

    sumarioItens.forEach(item => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 60, after: 60 },
                children: [
                    new TextRun({
                        text: item.label,
                        font: FONT_FAMILY,
                        size: 22,
                        bold: !item.label.startsWith(" ")
                    }),
                    new TextRun({
                        text: " " + ".".repeat(110 - item.label.length) + " " + item.page,
                        font: FONT_FAMILY,
                        size: 22
                    })
                ]
            })
        );
    });

    docChildren.push(
        new Paragraph({
            children: [new PageBreak()]
        })
    );

    // ==========================================================================
    // 3. INTRODUÇÃO E SEÇÃO 2 (PÁGINA 3)
    // ==========================================================================
    docChildren.push(createSectionTitle("1. Introdução"));
    
    const introText = `Neste trabalho, será apresentada uma pesquisa sobre a profissão/área de atuação de ${data.intro_profissao || "[profissão ou área escolhida]"}. Escolhi essa profissão/área porque ${data.intro_motivo || "[explique brevemente o motivo da escolha]"}. O objetivo deste trabalho é compreender melhor como essa profissão funciona, quais competências são necessárias, quais tecnologias são utilizadas, quais desafios existem para ingressar na área e como essa trajetória se relaciona com meus objetivos acadêmicos, profissionais e pessoais.`;
    docChildren.push(createAcademicParagraph(introText));

    docChildren.push(createSectionTitle("2. Profissão ou área escolhida"));

    // Tabela simples de identificação
    docChildren.push(
        new Table({
            borders: tableBorders,
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    children: [
                        createTableCell("Campo", true, 40, "F2F2F2"),
                        createTableCell("Preenchimento", true, 60, "F2F2F2")
                    ]
                }),
                new TableRow({
                    children: [
                        createTableCell("Profissão/área pesquisada", true, 40),
                        createTableCell(data.intro_profissao || "[Profissão preenchida]", false, 60)
                    ]
                })
            ]
        })
    );

    docChildren.push(createSubsectionTitle("2.1 O que faz esse profissional?"));
    docChildren.push(new Paragraph({
        children: [new TextRun({ text: "As principais atividades realizadas por esse profissional são:", font: FONT_FAMILY, size: 24, italics: true })]
    }));
    
    if (data.atividades.filter(a => a.trim() !== "").length > 0) {
        data.atividades.forEach(a => {
            if (a.trim() !== "") docChildren.push(createAcademicListItem(a));
        });
    } else {
        docChildren.push(createAcademicListItem("[Atividade não preenchida]"));
    }

    docChildren.push(createSubsectionTitle("2.2 Onde esse profissional pode atuar?"));
    docChildren.push(new Paragraph({
        children: [new TextRun({ text: "Ambientes e setores onde essa profissão aparece:", font: FONT_FAMILY, size: 24, italics: true })]
    }));
    
    if (data.setores.filter(s => s.trim() !== "").length > 0) {
        data.setores.forEach(s => {
            if (s.trim() !== "") docChildren.push(createAcademicListItem(s));
        });
    } else {
        docChildren.push(createAcademicListItem("[Setor não preenchido]"));
    }

    docChildren.push(new Paragraph({ children: [new PageBreak()] }));

    // ==========================================================================
    // 4. COMPETÊNCIAS E TECNOLOGIAS (PÁGINA 4)
    // ==========================================================================
    docChildren.push(createSectionTitle("3. Competências necessárias"));
    docChildren.push(createSubsectionTitle("3.1 Competências técnicas"));
    
    // Tabela Competencias Tecnicas
    const compTecRows = [
        new TableRow({
            children: [
                createTableCell("Competência Técnica", true, 40, "F2F2F2"),
                createTableCell("Por que ela é importante?", true, 60, "F2F2F2")
            ]
        })
    ];
    data.comp_tecnicas.forEach(c => {
        compTecRows.push(
            new TableRow({
                children: [
                    createTableCell(c.nome, true, 40),
                    createTableCell(c.desc, false, 60)
                ]
            })
        );
    });
    docChildren.push(new Table({ borders: tableBorders, width: { size: 100, type: WidthType.PERCENTAGE }, rows: compTecRows }));

    docChildren.push(createSubsectionTitle("3.2 Competências comportamentais"));
    
    // Tabela Competencias Comportamentais
    const compCompRows = [
        new TableRow({
            children: [
                createTableCell("Competência Comportamental", true, 40, "F2F2F2"),
                createTableCell("Por que ela é importante?", true, 60, "F2F2F2")
            ]
        })
    ];
    data.comp_comportamentais.forEach(c => {
        compCompRows.push(
            new TableRow({
                children: [
                    createTableCell(c.nome, true, 40),
                    createTableCell(c.desc, false, 60)
                ]
            })
        );
    });
    docChildren.push(new Table({ borders: tableBorders, width: { size: 100, type: WidthType.PERCENTAGE }, rows: compCompRows }));

    // Seção 4: Tecnologias
    docChildren.push(createSectionTitle("4. Tecnologias, ferramentas e conhecimentos utilizados"));
    
    const tecRows = [
        new TableRow({
            children: [
                createTableCell("Tecnologia, ferramenta ou conhecimento", true, 40, "F2F2F2"),
                createTableCell("Como é usado na profissão?", true, 60, "F2F2F2")
            ]
        })
    ];
    data.tecnologias.forEach(t => {
        tecRows.push(
            new TableRow({
                children: [
                    createTableCell(t.nome, true, 40),
                    createTableCell(t.desc, false, 60)
                ]
            })
        );
    });
    docChildren.push(new Table({ borders: tableBorders, width: { size: 100, type: WidthType.PERCENTAGE }, rows: tecRows }));

    docChildren.push(new Paragraph({ children: [new PageBreak()] }));

    // ==========================================================================
    // 5. INGRESSO, DESAFIOS, TENDÊNCIAS, RELAÇÃO (PÁGINA 5)
    // ==========================================================================
    docChildren.push(createSectionTitle("5. Formas de ingresso na área"));
    docChildren.push(new Paragraph({
        children: [new TextRun({ text: "Estratégias comuns para ingressar na profissão:", font: FONT_FAMILY, size: 24, italics: true })]
    }));
    if (data.ingresso.filter(i => i.trim() !== "").length > 0) {
        data.ingresso.forEach(i => {
            if (i.trim() !== "") docChildren.push(createAcademicListItem(i));
        });
    } else {
        docChildren.push(createAcademicListItem("[Formas de ingresso não preenchidas]"));
    }

    docChildren.push(createSectionTitle("6. Desafios da profissão"));
    
    // Tabela Desafios
    const desafiosRows = [
        new TableRow({
            children: [
                createTableCell("Desafio Identificado", true, 40, "F2F2F2"),
                createTableCell("Como este desafio pode ser enfrentado?", true, 60, "F2F2F2")
            ]
        })
    ];
    data.desafios.forEach(d => {
        desafiosRows.push(
            new TableRow({
                children: [
                    createTableCell(d.nome, true, 40),
                    createTableCell(d.desc, false, 60)
                ]
            })
        );
    });
    docChildren.push(new Table({ borders: tableBorders, width: { size: 100, type: WidthType.PERCENTAGE }, rows: desafiosRows }));

    docChildren.push(createSectionTitle("7. Tendências e futuro da área"));
    docChildren.push(new Paragraph({
        children: [new TextRun({ text: "Tendências tecnológicas e estruturais identificadas:", font: FONT_FAMILY, size: 24, italics: true })]
    }));
    if (data.tendencias.filter(t => t.trim() !== "").length > 0) {
        data.tendencias.forEach(t => {
            if (t.trim() !== "") docChildren.push(createAcademicListItem(t));
        });
    } else {
        docChildren.push(createAcademicListItem("[Tendências não preenchidas]"));
    }

    docChildren.push(createSectionTitle("8. Relação com meu curso"));
    docChildren.push(new Paragraph({
        children: [new TextRun({ text: "Conexões entre a grade acadêmica e a profissão:", font: FONT_FAMILY, size: 24, italics: true })]
    }));
    if (data.relacao.filter(r => r.trim() !== "").length > 0) {
        data.relacao.forEach(r => {
            if (r.trim() !== "") docChildren.push(createAcademicListItem(r));
        });
    } else {
        docChildren.push(createAcademicListItem("[Relações curriculares não preenchidas]"));
    }

    docChildren.push(new Paragraph({ children: [new PageBreak()] }));

    // ==========================================================================
    // 6. REFLEXÃO PESSOAL (PÁGINA 6)
    // ==========================================================================
    docChildren.push(createSectionTitle("9. Reflexão pessoal: minha trajetória e a profissão pesquisada"));

    const reflexoes = [
        { q: "9.1 Por que essa profissão chamou minha atenção?", a: data.ref_91 },
        { q: "9.2 Quais aspectos da profissão mais despertaram meu interesse?", a: data.ref_92 },
        { q: "9.3 Quais competências eu já possuo que podem ajudar nessa trajetória?", a: data.ref_93 },
        { q: "9.4 Quais competências preciso desenvolver?", a: data.ref_94 },
        { q: "9.5 Quais dificuldades pessoais, acadêmicas ou profissionais podem surgir na minha trajetória?", a: data.ref_95 },
        { q: "9.6 Como minha realidade de vida influencia meu caminho profissional?", a: data.ref_96 },
        { q: "9.7 Como posso me preparar melhor para atuar nessa área?", a: data.ref_97 }
    ];

    reflexoes.forEach(r => {
        docChildren.push(
            new Paragraph({
                spacing: { before: 180, after: 60 },
                children: [
                    new TextRun({
                        text: r.q,
                        font: FONT_FAMILY,
                        size: 24,
                        bold: true
                    })
                ]
            }),
            createAcademicParagraph(r.a || "[Resposta do estudante não preenchida]")
        );
    });

    docChildren.push(new Paragraph({ children: [new PageBreak()] }));

    // ==========================================================================
    // 7. PLANEJAMENTO E FINANÇAS (PÁGINA 7)
    // ==========================================================================
    docChildren.push(createSectionTitle("10. Planejamento inicial de carreira"));

    // Tabela Planejamento
    const planRows = [
        new TableRow({
            children: [
                createTableCell("Prazo", true, 20, "F2F2F2"),
                createTableCell("Meta acadêmica", true, 25, "F2F2F2"),
                createTableCell("Meta profissional", true, 25, "F2F2F2"),
                createTableCell("Ação prática", true, 30, "F2F2F2")
            ]
        })
    ];
    data.planejamento.forEach(p => {
        planRows.push(
            new TableRow({
                children: [
                    createTableCell(p.prazo, true, 20),
                    createTableCell(p.acad, false, 25),
                    createTableCell(p.prof, false, 25),
                    createTableCell(p.acao, false, 30)
                ]
            })
        );
    });
    docChildren.push(new Table({ borders: tableBorders, width: { size: 100, type: WidthType.PERCENTAGE }, rows: planRows }));

    docChildren.push(createSectionTitle("11. Educação financeira aplicada à carreira"));
    docChildren.push(
        createAcademicParagraph("Construir uma carreira em Computação exige planejamento. Além de estudar, o estudante pode precisar investir em equipamentos, internet, cursos, certificações, livros, eventos ou ferramentas.")
    );

    docChildren.push(createSubsectionTitle("11.1 Possíveis custos para minha formação"));
    
    // Tabela Custos
    const custosRows = [
        new TableRow({
            children: [
                createTableCell("Item", true, 30, "F2F2F2"),
                createTableCell("É necessário agora?", true, 20, "F2F2F2"),
                createTableCell("Valor estimado", true, 20, "F2F2F2"),
                createTableCell("Observação", true, 30, "F2F2F2")
            ]
        })
    ];
    data.custos.forEach(c => {
        custosRows.push(
            new TableRow({
                children: [
                    createTableCell(c.item, true, 30),
                    createTableCell(c.nec, false, 20),
                    createTableCell(`R$ ${c.valor || '0,00'}`, false, 20),
                    createTableCell(c.obs, false, 30)
                ]
            })
        );
    });
    docChildren.push(new Table({ borders: tableBorders, width: { size: 100, type: WidthType.PERCENTAGE }, rows: custosRows }));

    docChildren.push(new Paragraph({ children: [new PageBreak()] }));

    // ==========================================================================
    // 8. PRIORIDADES FINANCEIRAS E CONCLUSÃO (PÁGINA 8)
    // ==========================================================================
    docChildren.push(createSubsectionTitle("11.2 Prioridades financeiras"));
    
    // Tabela Prioridades
    docChildren.push(
        new Table({
            borders: tableBorders,
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    children: [
                        createTableCell("Campo", true, 45, "F2F2F2"),
                        createTableCell("Preenchimento", true, 55, "F2F2F2")
                    ]
                }),
                new TableRow({
                    children: [
                        createTableCell("Minha meta financeira relacionada à carreira", true, 45),
                        createTableCell(data.fin_meta, false, 55)
                    ]
                }),
                new TableRow({
                    children: [
                        createTableCell("Valor estimado", true, 45),
                        createTableCell(`R$ ${data.fin_valor || '0,00'}`, false, 55)
                    ]
                }),
                new TableRow({
                    children: [
                        createTableCell("Prazo para alcançar a meta", true, 45),
                        createTableCell(data.fin_prazo, false, 55)
                    ]
                }),
                new TableRow({
                    children: [
                        createTableCell("Quanto precisaria guardar por mês", true, 45),
                        createTableCell(`R$ ${data.fin_mensal || '0,00'}`, false, 55)
                    ]
                }),
                new TableRow({
                    children: [
                        createTableCell("O que posso ajustar na minha rotina para alcançar essa meta", true, 45),
                        createTableCell(data.fin_ajuste, false, 55)
                    ]
                })
            ]
        })
    );

    // Seção 12: Conclusão
    docChildren.push(createSectionTitle("12. Conclusão"));
    docChildren.push(
        createAcademicParagraph(`Neste trabalho, compreendi que a profissão/área de ${data.intro_profissao || "[profissão ou área escolhida]"} exige conhecimentos técnicos, competências comportamentais e planejamento contínuo.`)
    );

    docChildren.push(new Paragraph({
        children: [new TextRun({ text: "Os principais aprendizados que tive foram:", font: FONT_FAMILY, size: 24, italics: true })]
    }));
    if (data.aprendizados.filter(a => a.trim() !== "").length > 0) {
        data.aprendizados.forEach(a => {
            if (a.trim() !== "") docChildren.push(createAcademicListItem(a));
        });
    } else {
        docChildren.push(createAcademicListItem("[Aprendizados não preenchidos]"));
    }

    docChildren.push(new Paragraph({
        children: [new TextRun({ text: "A pesquisa contribuiu para minha visão de carreira porque:", font: FONT_FAMILY, size: 24, italics: true })]
    }));
    if (data.contribuicao.filter(c => c.trim() !== "").length > 0) {
        data.contribuicao.forEach(c => {
            if (c.trim() !== "") docChildren.push(createAcademicListItem(c));
        });
    } else {
        docChildren.push(createAcademicListItem("[Contribuição não preenchida]"));
    }

    docChildren.push(new Paragraph({
        children: [new TextRun({ text: "A partir deste estudo, pretendo:", font: FONT_FAMILY, size: 24, italics: true })]
    }));
    if (data.intencoes.filter(i => i.trim() !== "").length > 0) {
        data.intencoes.forEach(i => {
            if (i.trim() !== "") docChildren.push(createAcademicListItem(i));
        });
    } else {
        docChildren.push(createAcademicListItem("[Intenções de carreira não preenchidas]"));
    }

    docChildren.push(new Paragraph({ children: [new PageBreak()] }));

    // ==========================================================================
    // 9. REFERÊNCIAS (PÁGINA 9)
    // ==========================================================================
    docChildren.push(createSectionTitle("13. Referências"));
    docChildren.push(new Paragraph({
        children: [new TextRun({ text: "Fontes bibliográficas e digitais consultadas:", font: FONT_FAMILY, size: 24, italics: true })]
    }));
    if (data.referencias.filter(r => r.trim() !== "").length > 0) {
        data.referencias.forEach(r => {
            if (r.trim() !== "") docChildren.push(createAcademicListItem(r));
        });
    } else {
        docChildren.push(createAcademicListItem("[Referências não preenchidas]"));
    }

    // ==========================================================================
    // COMPILAR E SALVAR O DOCUMENTO
    // ==========================================================================
    const doc = new Document({
        sections: [
            {
                properties: {
                    page: {
                        margin: {
                            top: MARGIN_3CM,
                            bottom: MARGIN_2CM,
                            left: MARGIN_3CM,
                            right: MARGIN_2CM
                        }
                    }
                },
                children: docChildren
            }
        ]
    });

    const blob = await Packer.toBlob(doc);
    const fileName = `Relatorio_Interdisciplinar_I_${data.aluno.trim().replace(/\s+/g, '_') || 'Estudante'}.docx`;
    saveAs(blob, fileName);
}
