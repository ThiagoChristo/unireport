import React from 'react';

export default function EditorPane({
    activeSection,
    data,
    onChange,
    checklistItems,
    toggleChecklist
}) {
    // Sincronizar inputs normais
    const handleTextChange = (key, value) => {
        onChange(key, value);
    };

    // Listas dinâmicas (Adicionar/Remover/Alterar)
    const handleListItemChange = (listKey, index, value) => {
        const newList = [...data[listKey]];
        newList[index] = value;
        onChange(listKey, newList);
    };

    const handleAddListItem = (listKey) => {
        const newList = [...data[listKey], ""];
        onChange(listKey, newList);
    };

    const handleRemoveListItem = (listKey, index) => {
        const newList = [...data[listKey]];
        newList.splice(index, 1);
        onChange(listKey, newList);
    };

    // Tabelas normais (Competências, Tecnologias, Desafios)
    const handleTableItemChange = (tableKey, index, field, value) => {
        const newTable = [...data[tableKey]];
        newTable[index] = { ...newTable[index], [field]: value };
        onChange(tableKey, newTable);
    };

    // Tabela de Planejamento
    const handlePlanItemChange = (index, field, value) => {
        const newPlan = [...data.planejamento];
        newPlan[index] = { ...newPlan[index], [field]: value };
        onChange('planejamento', newPlan);
    };

    // Tabela de Custos
    const handleCustoItemChange = (index, field, value) => {
        const newCustos = [...data.custos];
        newCustos[index] = { ...newCustos[index], [field]: value };
        onChange('custos', newCustos);
    };

    return (
        <main id="editor-pane">
            {/* 00. Capa */}
            {activeSection === 'capa' && (
                <section className="editor-section active">
                    <h2>Capa do Relatório</h2>
                    <p className="section-help">Preencha as informações básicas para a capa oficial do seu projeto.</p>
                    
                    <div className="form-group">
                        <label htmlFor="input-curso">Nome do Curso</label>
                        <input 
                            type="text" 
                            id="input-curso" 
                            value={data.curso}
                            onChange={(e) => handleTextChange('curso', e.target.value)}
                            placeholder="Ex: Engenharia de Software" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-aluno">Nome Completo do Aluno</label>
                        <input 
                            type="text" 
                            id="input-aluno" 
                            value={data.aluno}
                            onChange={(e) => handleTextChange('aluno', e.target.value)}
                            placeholder="Digite seu nome completo" 
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="input-ru">RU (Registro Universitário)</label>
                            <input 
                                type="text" 
                                id="input-ru" 
                                value={data.ru}
                                onChange={(e) => handleTextChange('ru', e.target.value)}
                                placeholder="Digite seu RU" 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="input-ano">Ano de Entrega</label>
                            <input 
                                type="number" 
                                id="input-ano" 
                                value={data.ano}
                                onChange={(e) => handleTextChange('ano', parseInt(e.target.value) || 2026)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-professor">Professor Orientador</label>
                        <input 
                            type="text" 
                            id="input-professor" 
                            value="Prof. Eros Leon Kohler, Me." 
                            disabled 
                        />
                    </div>
                </section>
            )}

            {/* 01. Introdução */}
            {activeSection === 'introducao' && (
                <section className="editor-section active">
                    <h2>1. Introdução</h2>
                    <p className="section-help">Apresente a profissão escolhida, justificando os motivos de sua escolha e o objetivo deste relatório.</p>
                    
                    <div className="form-group">
                        <label htmlFor="input-intro-profissao">Profissão ou Área Escolhida</label>
                        <input 
                            type="text" 
                            id="input-intro-profissao" 
                            value={data.intro_profissao}
                            onChange={(e) => handleTextChange('intro_profissao', e.target.value)}
                            placeholder="Ex: Desenvolvedor de Software / Cientista de Dados" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-intro-motivo">Motivo da Escolha</label>
                        <textarea 
                            id="input-intro-motivo" 
                            rows={6} 
                            value={data.intro_motivo}
                            onChange={(e) => handleTextChange('intro_motivo', e.target.value)}
                            placeholder="Explique por que escolheu esta área (curiosidade, relação com o curso, experiência prévia, oportunidades de mercado, etc.)"
                        />
                    </div>
                </section>
            )}

            {/* 02. Profissão Escolhida */}
            {activeSection === 'profissao' && (
                <section className="editor-section active">
                    <h2>2. Profissão ou Área Escolhida</h2>
                    <p className="section-help">Detalhe as atividades e os ambientes de atuação deste profissional.</p>
                    
                    <div className="form-group">
                        <label>2.1 O que faz esse profissional?</label>
                        <p className="field-desc">Descreva pelo menos 3 atividades principais que o profissional realiza no dia a dia.</p>
                        <div className="dynamic-list">
                            {data.atividades.map((text, idx) => (
                                <div key={idx} className="dynamic-list-item">
                                    <textarea 
                                        rows={2} 
                                        value={text} 
                                        onChange={(e) => handleListItemChange('atividades', idx, e.target.value)}
                                        placeholder="Ex: Desenvolver software backend" 
                                    />
                                    <button 
                                        className="btn-remove-item" 
                                        onClick={() => handleRemoveListItem('atividades', idx)}
                                    >×</button>
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-secondary btn-sm" onClick={() => handleAddListItem('atividades')}>+ Adicionar Atividade</button>
                    </div>

                    <div className="form-group" style={{ marginTop: '2rem' }}>
                        <label>2.2 Onde esse profissional pode atuar?</label>
                        <p className="field-desc">Indique pelo menos 3 ambientes ou setores de atuação (Ex: startups, bancos, órgãos públicos, remoto).</p>
                        <div className="dynamic-list">
                            {data.setores.map((text, idx) => (
                                <div key={idx} className="dynamic-list-item">
                                    <textarea 
                                        rows={2} 
                                        value={text} 
                                        onChange={(e) => handleListItemChange('setores', idx, e.target.value)}
                                        placeholder="Ex: Empresas financeiras / Fintechs" 
                                    />
                                    <button 
                                        className="btn-remove-item" 
                                        onClick={() => handleRemoveListItem('setores', idx)}
                                    >×</button>
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-secondary btn-sm" onClick={() => handleAddListItem('setores')}>+ Adicionar Setor</button>
                    </div>
                </section>
            )}

            {/* 03. Competências Necessárias */}
            {activeSection === 'competencias' && (
                <section className="editor-section active">
                    <h2>3. Competências Necessárias</h2>
                    <p className="section-help">Liste e explique 5 competências técnicas (Hard Skills) e 5 comportamentais (Soft Skills) indispensáveis.</p>
                    
                    <h3>3.1 Competências Técnicas (Hard Skills)</h3>
                    <div className="competency-table-wrapper">
                        <table className="editor-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '35%' }}>Competência Técnica</th>
                                    <th style={{ width: '65%' }}>Por que é importante?</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.comp_tecnicas.map((item, idx) => (
                                    <tr key={idx}>
                                        <td>
                                            <input 
                                                type="text" 
                                                value={item.nome}
                                                onChange={(e) => handleTableItemChange('comp_tecnicas', idx, 'nome', e.target.value)}
                                                placeholder={`Competência técnica ${idx + 1}`} 
                                            />
                                        </td>
                                        <td>
                                            <textarea 
                                                rows={2} 
                                                value={item.desc}
                                                onChange={(e) => handleTableItemChange('comp_tecnicas', idx, 'desc', e.target.value)}
                                                placeholder="Explique a aplicação prática..." 
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h3 style={{ marginTop: '2rem' }}>3.2 Competências Comportamentais (Soft Skills)</h3>
                    <div className="competency-table-wrapper">
                        <table className="editor-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '35%' }}>Competência Comportamental</th>
                                    <th style={{ width: '65%' }}>Por que é importante?</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.comp_comportamentais.map((item, idx) => (
                                    <tr key={idx}>
                                        <td>
                                            <input 
                                                type="text" 
                                                value={item.nome}
                                                onChange={(e) => handleTableItemChange('comp_comportamentais', idx, 'nome', e.target.value)}
                                                placeholder={`Competência comportamental ${idx + 1}`} 
                                            />
                                        </td>
                                        <td>
                                            <textarea 
                                                rows={2} 
                                                value={item.desc}
                                                onChange={(e) => handleTableItemChange('comp_comportamentais', idx, 'desc', e.target.value)}
                                                placeholder="Explique a importância no trabalho..." 
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            )}

            {/* 04. Tecnologias, ferramentas e conhecimentos */}
            {activeSection === 'tecnologias' && (
                <section className="editor-section active">
                    <h2>4. Tecnologias, Ferramentas e Conhecimentos</h2>
                    <p className="section-help">Pesquise e liste 5 tecnologias ou ferramentas comuns usadas no dia a dia da profissão.</p>
                    
                    <div className="competency-table-wrapper">
                        <table className="editor-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '35%' }}>Tecnologia / Ferramenta</th>
                                    <th style={{ width: '65%' }}>Como é usada na profissão?</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.tecnologias.map((item, idx) => (
                                    <tr key={idx}>
                                        <td>
                                            <input 
                                                type="text" 
                                                value={item.nome}
                                                onChange={(e) => handleTableItemChange('tecnologias', idx, 'nome', e.target.value)}
                                                placeholder={`Tecnologia / Ferramenta ${idx + 1}`} 
                                            />
                                        </td>
                                        <td>
                                            <textarea 
                                                rows={2} 
                                                value={item.desc}
                                                onChange={(e) => handleTableItemChange('tecnologias', idx, 'desc', e.target.value)}
                                                placeholder="Descreva como o profissional a utiliza..." 
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            )}

            {/* 05. Formas de Ingresso */}
            {activeSection === 'ingresso' && (
                <section className="editor-section active">
                    <h2>5. Formas de Ingresso na Área</h2>
                    <p className="section-help">Explique os caminhos comuns para entrar no mercado nessa área (ex: estágio, portfólio, projetos acadêmicos, freelancer, etc.).</p>
                    
                    <div className="form-group">
                        <label>Formas de Ingresso</label>
                        <p className="field-desc">Adicione pelo menos 3 estratégias de entrada no mercado.</p>
                        <div className="dynamic-list">
                            {data.ingresso.map((text, idx) => (
                                <div key={idx} className="dynamic-list-item">
                                    <textarea 
                                        rows={2} 
                                        value={text} 
                                        onChange={(e) => handleListItemChange('ingresso', idx, e.target.value)}
                                        placeholder="Ex: Estágio remunerado a partir do 2º semestre" 
                                    />
                                    <button 
                                        className="btn-remove-item" 
                                        onClick={() => handleRemoveListItem('ingresso', idx)}
                                    >×</button>
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-secondary btn-sm" onClick={() => handleAddListItem('ingresso')}>+ Adicionar Forma de Ingresso</button>
                    </div>
                </section>
            )}

            {/* 06. Desafios da Profissão */}
            {activeSection === 'desafios' && (
                <section className="editor-section active">
                    <h2>6. Desafios da Profissão</h2>
                    <p className="section-help">Liste pelo menos 3 desafios principais de quem está iniciando ou atuando na área.</p>
                    
                    <div className="competency-table-wrapper">
                        <table className="editor-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '40%' }}>Desafio Identificado</th>
                                    <th style={{ width: '60%' }}>Como este desafio pode ser enfrentado?</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.desafios.map((item, idx) => (
                                    <tr key={idx}>
                                        <td>
                                            <input 
                                                type="text" 
                                                value={item.nome}
                                                onChange={(e) => handleTableItemChange('desafios', idx, 'nome', e.target.value)}
                                                placeholder={`Desafio ${idx + 1}`} 
                                            />
                                        </td>
                                        <td>
                                            <textarea 
                                                rows={2} 
                                                value={item.desc}
                                                onChange={(e) => handleTableItemChange('desafios', idx, 'desc', e.target.value)}
                                                placeholder="Solução..." 
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            )}

            {/* 07. Tendências e Futuro */}
            {activeSection === 'tendencias' && (
                <section className="editor-section active">
                    <h2>7. Tendências e Futuro da Área</h2>
                    <p className="section-help">Explique tendências que mudarão a área nos próximos anos (ex: Inteligência Artificial, Nuvem, Trabalho Remoto).</p>
                    
                    <div className="form-group">
                        <label>Tendências para o Futuro</label>
                        <p className="field-desc">Descreva pelo menos 3 fatores ou avanços tecnológicos importantes.</p>
                        <div className="dynamic-list">
                            {data.tendencias.map((text, idx) => (
                                <div key={idx} className="dynamic-list-item">
                                    <textarea 
                                        rows={2} 
                                        value={text} 
                                        onChange={(e) => handleListItemChange('tendencias', idx, e.target.value)}
                                        placeholder="Ex: Aumento no uso de copilotos de IA" 
                                    />
                                    <button 
                                        className="btn-remove-item" 
                                        onClick={() => handleRemoveListItem('tendencias', idx)}
                                    >×</button>
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-secondary btn-sm" onClick={() => handleAddListItem('tendencias')}>+ Adicionar Tendência</button>
                    </div>
                </section>
            )}

            {/* 08. Relação com o Curso */}
            {activeSection === 'relacao-curso' && (
                <section className="editor-section active">
                    <h2>8. Relação com o meu Curso</h2>
                    <p className="section-help">Conecte a pesquisa com a sua grade curricular atual. Quais disciplinas e conteúdos serão mais aplicados?</p>
                    
                    <div className="form-group">
                        <label>Relação com Disciplinas e Práticas</label>
                        <p className="field-desc">Descreva pelo menos 3 conexões concretas entre o curso e a carreira.</p>
                        <div className="dynamic-list">
                            {data.relacao.map((text, idx) => (
                                <div key={idx} className="dynamic-list-item">
                                    <textarea 
                                        rows={2} 
                                        value={text} 
                                        onChange={(e) => handleListItemChange('relacao', idx, e.target.value)}
                                        placeholder="Ex: Aulas de Lógica estruturando o pensamento computacional" 
                                    />
                                    <button 
                                        className="btn-remove-item" 
                                        onClick={() => handleRemoveListItem('relacao', idx)}
                                    >×</button>
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-secondary btn-sm" onClick={() => handleAddListItem('relacao')}>+ Adicionar Conexão</button>
                    </div>
                </section>
            )}

            {/* 09. Reflexão Pessoal */}
            {activeSection === 'reflexao' && (
                <section className="editor-section active">
                    <h2>9. Reflexão Pessoal: Trajetória e Profissão</h2>
                    <p className="section-help">Responda com sinceridade e autocrítica sobre sua relação com a carreira pretendida.</p>
                    
                    <div className="form-group">
                        <label>9.1 Por que essa profissão chamou minha atenção?</label>
                        <textarea 
                            rows={3} 
                            value={data.ref_91}
                            onChange={(e) => handleTextChange('ref_91', e.target.value)}
                            placeholder="Sua resposta..." 
                        />
                    </div>
                    <div className="form-group">
                        <label>9.2 Quais aspectos da profissão mais despertaram meu interesse?</label>
                        <textarea 
                            rows={3} 
                            value={data.ref_92}
                            onChange={(e) => handleTextChange('ref_92', e.target.value)}
                            placeholder="Sua resposta..." 
                        />
                    </div>
                    <div className="form-group">
                        <label>9.3 Quais competências eu já possuo que podem ajudar nessa trajetória?</label>
                        <textarea 
                            rows={3} 
                            value={data.ref_93}
                            onChange={(e) => handleTextChange('ref_93', e.target.value)}
                            placeholder="Sua resposta..." 
                        />
                    </div>
                    <div className="form-group">
                        <label>9.4 Quais competências preciso desenvolver?</label>
                        <textarea 
                            rows={3} 
                            value={data.ref_94}
                            onChange={(e) => handleTextChange('ref_94', e.target.value)}
                            placeholder="Sua resposta..." 
                        />
                    </div>
                    <div className="form-group">
                        <label>9.5 Quais dificuldades pessoais, acadêmicas ou profissionais podem surgir na minha trajetória?</label>
                        <textarea 
                            rows={3} 
                            value={data.ref_95}
                            onChange={(e) => handleTextChange('ref_95', e.target.value)}
                            placeholder="Sua resposta..." 
                        />
                    </div>
                    <div className="form-group">
                        <label>9.6 Como minha realidade de vida influenza meu caminho profissional?</label>
                        <textarea 
                            rows={3} 
                            value={data.ref_96}
                            onChange={(e) => handleTextChange('ref_96', e.target.value)}
                            placeholder="Sua resposta..." 
                        />
                    </div>
                    <div className="form-group">
                        <label>9.7 Como posso me preparar melhor para atuar nessa área?</label>
                        <textarea 
                            rows={3} 
                            value={data.ref_97}
                            onChange={(e) => handleTextChange('ref_97', e.target.value)}
                            placeholder="Sua resposta..." 
                        />
                    </div>
                </section>
            )}

            {/* 10. Planejamento de Carreira */}
            {activeSection === 'planejamento' && (
                <section className="editor-section active">
                    <h2>10. Planejamento Inicial de Carreira</h2>
                    <p className="section-help">Estabeleça metas claras de curto, médio e longo prazo.</p>
                    
                    <div className="competency-table-wrapper">
                        <table className="editor-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '20%' }}>Prazo</th>
                                    <th style={{ width: '25%' }}>Meta Acadêmica</th>
                                    <th style={{ width: '25%' }}>Meta Profissional</th>
                                    <th style={{ width: '30%' }}>Ação Prática</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.planejamento.map((p, idx) => (
                                    <tr key={idx}>
                                        <td><strong>{p.prazo}</strong></td>
                                        <td>
                                            <textarea 
                                                rows={3} 
                                                value={p.acad}
                                                onChange={(e) => handlePlanItemChange(idx, 'acad', e.target.value)}
                                                placeholder="Estudos / Cursos..." 
                                            />
                                        </td>
                                        <td>
                                            <textarea 
                                                rows={3} 
                                                value={p.prof}
                                                onChange={(e) => handlePlanItemChange(idx, 'prof', e.target.value)}
                                                placeholder="Trabalho / Estágio..." 
                                            />
                                        </td>
                                        <td>
                                            <textarea 
                                                rows={3} 
                                                value={p.acao}
                                                onChange={(e) => handlePlanItemChange(idx, 'acao', e.target.value)}
                                                placeholder="Ações práticas diárias..." 
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            )}

            {/* 11. Educação Financeira */}
            {activeSection === 'financeiro' && (
                <section className="editor-section active">
                    <h2>11. Educação Financeira Aplicada à Carreira</h2>
                    <p className="section-help">Planeje financeiramente os custos exigidos para o desenvolvimento da sua carreira.</p>
                    
                    <h3>11.1 Possíveis custos para minha formação</h3>
                    <div className="competency-table-wrapper">
                        <table className="editor-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '30%' }}>Item</th>
                                    <th style={{ width: '20%' }}>Necessário agora?</th>
                                    <th style={{ width: '20%' }}>Valor estimado</th>
                                    <th style={{ width: '30%' }}>Observação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.custos.map((c, idx) => (
                                    <tr key={idx}>
                                        <td>{c.item}</td>
                                        <td>
                                            <select 
                                                value={c.nec}
                                                onChange={(e) => handleCustoItemChange(idx, 'nec', e.target.value)}
                                            >
                                                <option value="Sim">Sim</option>
                                                <option value="Não">Não</option>
                                            </select>
                                        </td>
                                        <td>
                                            <input 
                                                type="text" 
                                                value={c.valor}
                                                onChange={(e) => handleCustoItemChange(idx, 'valor', e.target.value)}
                                                placeholder="R$ 0,00" 
                                            />
                                        </td>
                                        <td>
                                            <input 
                                                type="text" 
                                                value={c.obs}
                                                onChange={(e) => handleCustoItemChange(idx, 'obs', e.target.value)}
                                                placeholder="Observações..." 
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h3 style={{ marginTop: '2rem' }}>11.2 Prioridades Financeiras</h3>
                    <div className="form-group">
                        <label htmlFor="input-fin-meta">Minha meta financeira relacionada à carreira</label>
                        <input 
                            type="text" 
                            id="input-fin-meta" 
                            value={data.fin_meta}
                            onChange={(e) => handleTextChange('fin_meta', e.target.value)}
                            placeholder="Ex: Economizar para trocar de notebook em 1 ano" 
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="input-fin-valor">Valor Estimado</label>
                            <input 
                                type="text" 
                                id="input-fin-valor" 
                                value={data.fin_valor}
                                onChange={(e) => handleTextChange('fin_valor', e.target.value)}
                                placeholder="R$ 4.000,00" 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="input-fin-prazo">Prazo para Alcançar a Meta</label>
                            <input 
                                type="text" 
                                id="input-fin-prazo" 
                                value={data.fin_prazo}
                                onChange={(e) => handleTextChange('fin_prazo', e.target.value)}
                                placeholder="Ex: 12 meses" 
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-fin-mensal">Quanto precisará guardar por mês</label>
                        <input 
                            type="text" 
                            id="input-fin-mensal" 
                            value={data.fin_mensal}
                            onChange={(e) => handleTextChange('fin_mensal', e.target.value)}
                            placeholder="R$ 333,00" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-fin-ajuste">O que posso ajustar na minha rotina para alcançar essa meta</label>
                        <textarea 
                            id="input-fin-ajuste" 
                            rows={3} 
                            value={data.fin_ajuste}
                            onChange={(e) => handleTextChange('fin_ajuste', e.target.value)}
                            placeholder="Ex: Evitar jantares fora, cancelar assinaturas não usadas..." 
                        />
                    </div>
                </section>
            )}

            {/* 12. Conclusão */}
            {activeSection === 'conclusao' && (
                <section className="editor-section active">
                    <h2>12. Conclusão</h2>
                    <p className="section-help">Sintetize os aprendizados obtidos durante a realização desta pesquisa.</p>
                    
                    <div className="form-group">
                        <label>Principais aprendizados que tive</label>
                        <div className="dynamic-list">
                            {data.aprendizados.map((text, idx) => (
                                <div key={idx} className="dynamic-list-item">
                                    <textarea 
                                        rows={2} 
                                        value={text} 
                                        onChange={(e) => handleListItemChange('aprendizados', idx, e.target.value)}
                                        placeholder="Ex: Aprendi a importância de planejar estudos" 
                                    />
                                    <button 
                                        className="btn-remove-item" 
                                        onClick={() => handleRemoveListItem('aprendizados', idx)}
                                    >×</button>
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-secondary btn-sm" onClick={() => handleAddListItem('aprendizados')}>+ Adicionar Aprendizado</button>
                    </div>

                    <div className="form-group" style={{ marginTop: '2rem' }}>
                        <label>A pesquisa contribuiu para minha visão de carreira porque</label>
                        <div className="dynamic-list">
                            {data.contribuicao.map((text, idx) => (
                                <div key={idx} className="dynamic-list-item">
                                    <textarea 
                                        rows={2} 
                                        value={text} 
                                        onChange={(e) => handleListItemChange('contribuicao', idx, e.target.value)}
                                        placeholder="Ex: Conectou o curso às oportunidades de TI" 
                                    />
                                    <button 
                                        className="btn-remove-item" 
                                        onClick={() => handleRemoveListItem('contribuicao', idx)}
                                    >×</button>
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-secondary btn-sm" onClick={() => handleAddListItem('contribuicao')}>+ Adicionar Contribuição</button>
                    </div>

                    <div className="form-group" style={{ marginTop: '2rem' }}>
                        <label>A partir deste estudo, pretendo</label>
                        <div className="dynamic-list">
                            {data.intencoes.map((text, idx) => (
                                <div key={idx} className="dynamic-list-item">
                                    <textarea 
                                        rows={2} 
                                        value={text} 
                                        onChange={(e) => handleListItemChange('intencoes', idx, e.target.value)}
                                        placeholder="Ex: Criar projetos autorais no GitHub" 
                                    />
                                    <button 
                                        className="btn-remove-item" 
                                        onClick={() => handleRemoveListItem('intencoes', idx)}
                                    >×</button>
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-secondary btn-sm" onClick={() => handleAddListItem('intencoes')}>+ Adicionar Pretensão</button>
                    </div>
                </section>
            )}

            {/* 13. Referências */}
            {activeSection === 'referencias' && (
                <section className="editor-section active">
                    <h2>13. Referências</h2>
                    <p className="section-help">Insira os links e referências das fontes que você pesquisou (mínimo 3).</p>
                    
                    <div className="form-group">
                        <label>Fontes Consultadas (Mínimo 3)</label>
                        <p className="field-desc">Sites, portais de vagas, livros, vídeos, etc.</p>
                        <div className="dynamic-list">
                            {data.referencias.map((text, idx) => (
                                <div key={idx} className="dynamic-list-item">
                                    <textarea 
                                        rows={2} 
                                        value={text} 
                                        onChange={(e) => handleListItemChange('referencias', idx, e.target.value)}
                                        placeholder="Ex: SBC - Sociedade Brasileira de Computação. Acessado em 2026." 
                                    />
                                    <button 
                                        className="btn-remove-item" 
                                        onClick={() => handleRemoveListItem('referencias', idx)}
                                    >×</button>
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-secondary btn-sm" onClick={() => handleAddListItem('referencias')}>+ Adicionar Referência</button>
                    </div>
                </section>
            )}

            {/* Checklist de Entrega */}
            {activeSection === 'checklist' && (
                <section className="editor-section active">
                    <h2>Checklist antes da entrega</h2>
                    <p className="section-help">Confira todos os itens essenciais antes de submeter o relatório em PDF na Univirtus.</p>
                    
                    <div id="checklist-visual-container">
                        {checklistItems.map(item => {
                            const isChecked = data.checklist_manual[item.id] || false;
                            return (
                                <div 
                                    key={item.id} 
                                    className={`checklist-item ${isChecked ? 'checked' : ''}`}
                                    onClick={() => toggleChecklist(item.id)}
                                >
                                    <div className="checklist-checkbox"></div>
                                    <div className="checklist-text">{item.text}</div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}
        </main>
    );
}
