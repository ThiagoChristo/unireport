import React from 'react';

export default function PreviewPane({ data, activeSection, onTogglePreview }) {
    // Helper para renderizar campos com placeholders acadêmicos
    const renderField = (value, placeholder = "[preencher]") => {
        if (value && value.toString().trim() !== "") {
            return <span>{value}</span>;
        }
        return <span className="placeholder">{placeholder}</span>;
    };

    // Helper para campos da capa
    const renderCoverField = (value, prefix, placeholder) => {
        if (value && value.toString().trim() !== "") {
            return <div>{prefix}{value}</div>;
        }
        return <div className="preview-field empty-field">{prefix}{placeholder}</div>;
    };

    // Helper para renderizar listas
    const renderList = (listKey, placeholderText) => {
        const list = data[listKey] || [];
        const validItems = list.filter(item => item && item.trim() !== "");

        if (validItems.length > 0) {
            return (
                <ul className="academic-list">
                    {validItems.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            );
        } else {
            return (
                <ul className="academic-list placeholder-list">
                    <li>[{placeholderText} 1]</li>
                    <li>[{placeholderText} 2]</li>
                    <li>[{placeholderText} 3]</li>
                </ul>
            );
        }
    };

    // Helper para renderizar tabelas simples (Competências, Tecnologias, Desafios)
    const renderTable = (tableKey, labelText) => {
        const list = data[tableKey] || [];
        return (
            <table className="academic-table">
                <thead>
                    <tr>
                        <th style={{ width: '35%' }}>{labelText}</th>
                        <th style={{ width: '65%' }}>Por que ela é importante? / Uso</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, idx) => {
                        const hasName = item.nome && item.nome.trim() !== "";
                        const hasDesc = item.desc && item.desc.trim() !== "";
                        return (
                            <tr key={idx}>
                                <td className={hasName ? '' : 'placeholder'}>
                                    {hasName ? item.nome : `[${labelText} ${idx + 1}]`}
                                </td>
                                <td className={hasDesc ? '' : 'placeholder'}>
                                    {hasDesc ? item.desc : `[Explicação / Motivo da importância]`}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    };

    return (
        <aside id="preview-pane">
            <div className="preview-header">
                <h3>Pré-visualização do Relatório (Padrão Acadêmico)</h3>
                <div className="preview-controls">
                    <span className="preview-badge">Visualização de Folha</span>
                    <button id="btn-toggle-preview" className="btn btn-secondary btn-sm" onClick={onTogglePreview}>Ocultar</button>
                </div>
            </div>

            {/* Folha A4 Simulada */}
            <div className="a4-page-container">
                <div id="report-document" className="a4-page font-arial">
                    
                    {/* CAPA */}
                    <div className="page capa-page">
                        <div className="capa-header">
                            <div>CENTRO UNIVERSITÁRIO INTERNACIONAL UNINTER</div>
                            {renderCoverField(data.curso, "CURSO: ", "[NOME DO CURSO]")}
                        </div>
                        
                        <div className="capa-title-container">
                            <h1 className="capa-title">PROJETO INTERDISCIPLINAR I</h1>
                            <h2 className="capa-subtitle">RELATÓRIO: MINHA PROFISSÃO EM COMPUTAÇÃO</h2>
                        </div>

                        <div className="capa-student-box">
                            {renderCoverField(data.aluno, "ALUNO(A): ", "[NOME DO ALUNO]")}
                            {renderCoverField(data.ru, "RU: ", "[RU DO ALUNO]")}
                        </div>

                        <div className="capa-footer">
                            <div className="professor">PROFESSOR ORIENTADOR: PROF. EROS LEON KOHLER, ME.</div>
                            <div className="ano">{data.ano || 2026}</div>
                        </div>
                    </div>

                    {/* SUMÁRIO */}
                    <div className="page sumario-page">
                        <h2 className="section-title text-center">SUMÁRIO</h2>
                        <ul className="sumario-list">
                            <li><span className="sumario-text">1. Introdução</span><span className="sumario-dots"></span><span class="sumario-num">3</span></li>
                            <li><span className="sumario-text">2. Profissão ou área escolhida</span><span class="sumario-dots"></span><span class="sumario-num">3</span></li>
                            <li><span className="sumario-sub-text">2.1 O que faz esse profissional?</span><span class="sumario-dots"></span><span class="sumario-num">3</span></li>
                            <li><span className="sumario-sub-text">2.2 Onde esse profissional pode atuar?</span><span class="sumario-dots"></span><span class="sumario-num">3</span></li>
                            <li><span className="sumario-text">3. Competências necessárias</span><span class="sumario-dots"></span><span class="sumario-num">4</span></li>
                            <li><span className="sumario-sub-text">3.1 Competências técnicas</span><span class="sumario-dots"></span><span class="sumario-num">4</span></li>
                            <li><span className="sumario-sub-text">3.2 Competências comportamentais</span><span class="sumario-dots"></span><span class="sumario-num">4</span></li>
                            <li><span className="sumario-text">4. Tecnologias, ferramentas e conhecimentos utilizados</span><span class="sumario-dots"></span><span class="sumario-num">4</span></li>
                            <li><span className="sumario-text">5. Formas de ingresso na área</span><span class="sumario-dots"></span><span class="sumario-num">5</span></li>
                            <li><span className="sumario-text">6. Desafios da profissão</span><span class="sumario-dots"></span><span class="sumario-num">5</span></li>
                            <li><span className="sumario-text">7. Tendências e futuro da área</span><span class="sumario-dots"></span><span class="sumario-num">5</span></li>
                            <li><span className="sumario-text">8. Relação com meu curso</span><span class="sumario-dots"></span><span class="sumario-num">5</span></li>
                            <li><span className="sumario-text">9. Reflexão pessoal: minha trajetória e a profissão pesquisada</span><span class="sumario-dots"></span><span class="sumario-num">6</span></li>
                            <li><span className="sumario-sub-text">9.1 Por que essa profissão chamou minha atenção?</span><span class="sumario-dots"></span><span class="sumario-num">6</span></li>
                            <li><span className="sumario-sub-text">9.2 Quais aspectos da profissão mais despertaram meu interesse?</span><span class="sumario-dots"></span><span class="sumario-num">6</span></li>
                            <li><span className="sumario-sub-text">9.3 Quais competências eu já possuo que podem ajudar nessa trajetória?</span><span class="sumario-dots"></span><span class="sumario-num">6</span></li>
                            <li><span className="sumario-sub-text">9.4 Quais competências preciso desenvolver?</span><span class="sumario-dots"></span><span class="sumario-num">6</span></li>
                            <li><span className="sumario-sub-text">9.5 Quais dificuldades podem surgir na minha trajetória?</span><span class="sumario-dots"></span><span class="sumario-num">7</span></li>
                            <li><span className="sumario-sub-text">9.6 Como minha realidade de vida influencia meu caminho profissional?</span><span class="sumario-dots"></span><span class="sumario-num">7</span></li>
                            <li><span class="sumario-sub-text">9.7 Como posso me preparar melhor para atuar nessa área?</span><span class="sumario-dots"></span><span class="sumario-num">7</span></li>
                            <li><span className="sumario-text">10. Planejamento inicial de carreira</span><span class="sumario-dots"></span><span class="sumario-num">7</span></li>
                            <li><span class="sumario-text">11. Educação financeira aplicada à carreira</span><span class="sumario-dots"></span><span class="sumario-num">7</span></li>
                            <li><span class="sumario-sub-text">11.1 Possíveis custos para minha formação</span><span class="sumario-dots"></span><span class="sumario-num">8</span></li>
                            <li><span class="sumario-sub-text">11.2 Prioridades financeiras</span><span class="sumario-dots"></span><span class="sumario-num">8</span></li>
                            <li><span class="sumario-text">12. Conclusão</span><span class="sumario-dots"></span><span class="sumario-num">8</span></li>
                            <li><span class="sumario-text">13. Referências</span><span class="sumario-dots"></span><span class="sumario-num">9</span></li>
                        </ul>
                    </div>

                    {/* TEXTO E CONTEÚDO */}
                    <div className="page body-page">
                        <h2 className="section-title">1. Introdução</h2>
                        <div className="academic-text">
                            Neste trabalho, será apresentada uma pesquisa sobre a profissão/área de atuação de {renderField(data.intro_profissao, "[profissão ou área escolhida]")}. 
                            Escolhi essa profissão/área porque {renderField(data.intro_motivo, "[explique brevemente o motivo da escolha]")}. 
                            O objetivo deste trabalho é compreender melhor como essa profissão funciona, quais competências são necessárias, quais tecnologias são utilizadas, quais desafios existem para ingressar na área e como essa trajetória se relaciona com meus objetivos acadêmicos, profissionais e pessoais.
                        </div>

                        <h2 className="section-title" style={{ marginTop: '2rem' }}>2. Profissão ou área escolhida</h2>
                        <table className="academic-table compact">
                            <thead>
                                <tr>
                                    <th style={{ width: '40%' }}>Campo</th>
                                    <th style={{ width: '60%' }}>Preenchimento</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Profissão/área pesquisada</strong></td>
                                    <td>{renderField(data.intro_profissao, "[profissão ou área escolhida]")}</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3 className="subsection-title">2.1 O que faz esse profissional?</h3>
                        <p className="academic-instructions">As principais atividades realizadas por esse profissional são:</p>
                        {renderList('atividades', 'Atividade')}

                        <h3 className="subsection-title">2.2 Onde esse profissional pode atuar?</h3>
                        <p className="academic-instructions">Ambientes e setores onde essa profissão aparece:</p>
                        {renderList('setores', 'Ambiente de atuação')}
                    </div>

                    <div className="page body-page">
                        <h2 className="section-title">3. Competências necessárias</h2>
                        <h3 className="subsection-title">3.1 Competências técnicas</h3>
                        {renderTable('comp_tecnicas', 'Competência Técnica')}

                        <h3 className="subsection-title" style={{ marginTop: '2rem' }}>3.2 Competências comportamentais</h3>
                        {renderTable('comp_comportamentais', 'Competência Comportamental')}
                    </div>

                    <div className="page body-page">
                        <h2 className="section-title">4. Tecnologias, ferramentas e conhecimentos utilizados</h2>
                        {renderTable('tecnologias', 'Tecnologia / Ferramenta')}

                        <h2 className="section-title" style={{ marginTop: '3rem' }}>5. Formas de ingresso na área</h2>
                        <p className="academic-instructions">Formas pelas quais uma pessoa pode começar nessa profissão:</p>
                        {renderList('ingresso', 'Forma de ingresso')}
                    </div>

                    <div className="page body-page">
                        <h2 className="section-title">6. Desafios da profissão</h2>
                        <table className="academic-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '40%' }}>Desafio</th>
                                    <th style={{ width: '60%' }}>Como esse desafio pode ser enfrentado?</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.desafios.map((item, idx) => {
                                    const hasName = item.nome && item.nome.trim() !== "";
                                    const hasDesc = item.desc && item.desc.trim() !== "";
                                    return (
                                        <tr key={idx}>
                                            <td className={hasName ? '' : 'placeholder'}>
                                                {hasName ? item.nome : `[Desafio ${idx + 1}]`}
                                            </td>
                                            <td className={hasDesc ? '' : 'placeholder'}>
                                                {hasDesc ? item.desc : `[Solução para o desafio]`}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                        <h2 className="section-title" style={{ marginTop: '3rem' }}>7. Tendências e futuro da área</h2>
                        <p className="academic-instructions">Tendências que podem influenciar essa profissão nos próximos anos:</p>
                        {renderList('tendencias', 'Tendência')}

                        <h2 className="section-title" style={{ marginTop: '3rem' }}>8. Relação com meu curso</h2>
                        <p className="academic-instructions">Como a profissão pesquisada se relaciona com o meu curso:</p>
                        {renderList('relacao', 'Conexão com disciplina')}
                    </div>

                    <div className="page body-page">
                        <h2 className="section-title">9. Reflexão pessoal: minha trajetória e a profissão pesquisada</h2>
                        
                        <div className="academic-subsection-q">
                            <strong>9.1 Por que essa profissão chamou minha atenção?</strong>
                            <p className={`academic-text ${data.ref_91.trim() ? '' : 'placeholder'}`}>
                                {data.ref_91.trim() ? data.ref_91 : '[Resposta do estudante não preenchida]'}
                            </p>
                        </div>
                        <div className="academic-subsection-q">
                            <strong>9.2 Quais aspectos da profissão mais despertaram meu interesse?</strong>
                            <p className={`academic-text ${data.ref_92.trim() ? '' : 'placeholder'}`}>
                                {data.ref_92.trim() ? data.ref_92 : '[Resposta do estudante não preenchida]'}
                            </p>
                        </div>
                        <div className="academic-subsection-q">
                            <strong>9.3 Quais competências eu já possuo que podem ajudar nessa trajetória?</strong>
                            <p className={`academic-text ${data.ref_93.trim() ? '' : 'placeholder'}`}>
                                {data.ref_93.trim() ? data.ref_93 : '[Resposta do estudante não preenchida]'}
                            </p>
                        </div>
                        <div className="academic-subsection-q">
                            <strong>9.4 Quais competências preciso desenvolver?</strong>
                            <p className={`academic-text ${data.ref_94.trim() ? '' : 'placeholder'}`}>
                                {data.ref_94.trim() ? data.ref_94 : '[Resposta do estudante não preenchida]'}
                            </p>
                        </div>
                        <div className="academic-subsection-q">
                            <strong>9.5 Quais dificuldades pessoais, acadêmicas ou profissionais podem surgir na minha trajetória?</strong>
                            <p className={`academic-text ${data.ref_95.trim() ? '' : 'placeholder'}`}>
                                {data.ref_95.trim() ? data.ref_95 : '[Resposta do estudante não preenchida]'}
                            </p>
                        </div>
                        <div className="academic-subsection-q">
                            <strong>9.6 Como minha realidade de vida influencia meu caminho profissional?</strong>
                            <p className={`academic-text ${data.ref_96.trim() ? '' : 'placeholder'}`}>
                                {data.ref_96.trim() ? data.ref_96 : '[Resposta do estudante não preenchida]'}
                            </p>
                        </div>
                        <div className="academic-subsection-q">
                            <strong>9.7 Como posso me preparar melhor para atuar nessa área?</strong>
                            <p className={`academic-text ${data.ref_97.trim() ? '' : 'placeholder'}`}>
                                {data.ref_97.trim() ? data.ref_97 : '[Resposta do estudante não preenchida]'}
                            </p>
                        </div>
                    </div>

                    <div className="page body-page">
                        <h2 className="section-title">10. Planejamento inicial de carreira</h2>
                        <table className="academic-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '20%' }}>Prazo</th>
                                    <th style={{ width: '25%' }}>Meta acadêmica</th>
                                    <th style={{ width: '25%' }}>Meta profissional</th>
                                    <th style={{ width: '30%' }}>Ação prática</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.planejamento.map((p, idx) => (
                                    <tr key={idx}>
                                        <td><strong>{p.prazo}</strong></td>
                                        <td className={p.acad.trim() ? '' : 'placeholder'}>
                                            {p.acad.trim() ? p.acad : '[Estudos/Disciplinas]'}
                                        </td>
                                        <td className={p.prof.trim() ? '' : 'placeholder'}>
                                            {p.prof.trim() ? p.prof : '[Foco Profissional]'}
                                        </td>
                                        <td className={p.acao.trim() ? '' : 'placeholder'}>
                                            {p.acao.trim() ? p.acao : '[Ação prática]'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <h2 className="section-title" style={{ marginTop: '3rem' }}>11. Educação financeira aplicada à carreira</h2>
                        <p className="academic-text">Construir uma carreira em Computação exige planejamento. Além de estudar, o estudante pode precisar investir em equipamentos, internet, cursos, certificações, livros, eventos ou ferramentas.</p>
                        
                        <h3 className="subsection-title">11.1 Possíveis custos para minha formação</h3>
                        <table className="academic-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '30%' }}>Item</th>
                                    <th style={{ width: '20%' }}>É necessário agora?</th>
                                    <th style={{ width: '20%' }}>Valor estimado</th>
                                    <th style={{ width: '30%' }}>Observação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.custos.map((c, idx) => (
                                    <tr key={idx}>
                                        <td>{c.item}</td>
                                        <td>{c.nec}</td>
                                        <td>R$ {c.valor || '0,00'}</td>
                                        <td>{c.obs || '-'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="page body-page">
                        <h3 className="subsection-title">11.2 Prioridades financeiras</h3>
                        <table className="academic-table compact">
                            <thead>
                                <tr>
                                    <th style={{ width: '45%' }}>Campo</th>
                                    <th style={{ width: '55%' }}>Preenchimento</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Minha meta financeira relacionada à carreira</strong></td>
                                    <td>{renderField(data.fin_meta, "[Minha meta financeira]")}</td>
                                </tr>
                                <tr>
                                    <td><strong>Valor estimado</strong></td>
                                    <td>{renderField(data.fin_valor, "R$ [Valor]")}</td>
                                </tr>
                                <tr>
                                    <td><strong>Prazo para alcançar a meta</strong></td>
                                    <td>{renderField(data.fin_prazo, "[Prazo]")}</td>
                                </tr>
                                <tr>
                                    <td><strong>Quanto precisaria guardar por mês</strong></td>
                                    <td>{renderField(data.fin_mensal, "R$ [Valor mensal]")}</td>
                                </tr>
                                <tr>
                                    <td><strong>O que posso ajustar na minha rotina</strong></td>
                                    <td>{renderField(data.fin_ajuste, "[Ajustes necessários]")}</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2 className="section-title" style={{ marginTop: '3rem' }}>12. Conclusão</h2>
                        <p className="academic-text">Neste trabalho, compreendi que a profissão/área de {renderField(data.intro_profissao, "[profissão ou área escolhida]")} exige conhecimentos técnicos, competências comportamentais e planejamento contínuo.</p>
                        
                        <p className="academic-instructions">Os principais aprendizados que tive foram:</p>
                        {renderList('aprendizados', 'Aprendizado')}

                        <p className="academic-instructions">A pesquisa contribuiu para minha visão de carreira porque:</p>
                        {renderList('contribuicao', 'Contribuição')}

                        <p className="academic-instructions">A partir deste estudo, pretendo:</p>
                        {renderList('intencoes', 'Intenção')}
                    </div>

                    <div className="page body-page">
                        <h2 className="section-title">13. Referências</h2>
                        <p className="academic-instructions">Fontes bibliográficas e digitais consultadas:</p>
                        {renderList('referencias', 'Referência bibliográfica')}
                    </div>
                </div>
            </div>
        </aside>
    );
}
