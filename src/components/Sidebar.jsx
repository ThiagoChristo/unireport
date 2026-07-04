import React, { useRef } from 'react';

export default function Sidebar({
    activeSection,
    setActiveSection,
    progress,
    onPrint,
    onExportJson,
    onImportJson,
    onClear
}) {
    const fileInputRef = useRef(null);

    const navItems = [
        { id: 'capa', num: '00', label: 'Capa' },
        { id: 'introducao', num: '01', label: '1. Introdução' },
        { id: 'profissao', num: '02', label: '2. Profissão Escolhida' },
        { id: 'competencias', num: '03', label: '3. Competências' },
        { id: 'tecnologias', num: '04', label: '4. Tecnologias & Ferr.' },
        { id: 'ingresso', num: '05', label: '5. Formas de Ingresso' },
        { id: 'desafios', num: '06', label: '6. Desafios da Área' },
        { id: 'tendencias', num: '07', label: '7. Tendências & Futuro' },
        { id: 'relacao-curso', num: '08', label: '8. Relação com Curso' },
        { id: 'reflexao', num: '09', label: '9. Reflexão Pessoal' },
        { id: 'planejamento', num: '10', label: '10. Plan. de Carreira' },
        { id: 'financeiro', num: '11', label: '11. Ed. Financeira' },
        { id: 'conclusao', num: '12', label: '12. Conclusão' },
        { id: 'referencias', num: '13', label: '13. Referências' },
        { id: 'checklist', num: '✓', label: 'Checklist de Entrega', isChecklist: true }
    ];

    const handleImportClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (evt) => {
            try {
                const imported = JSON.parse(evt.target.result);
                onImportJson(imported);
            } catch (err) {
                alert("Erro ao ler o arquivo JSON. Certifique-se de que é um backup válido.");
            }
        };
        reader.readAsText(file);
        // Reset file input value so same file can be uploaded again
        e.target.value = null;
    };

    return (
        <aside id="sidebar">
            <div className="sidebar-header">
                <div className="logo">
                    <span className="logo-accent">Uni</span>Report
                </div>
                <div className="subtitle">Projeto Interdisciplinar I</div>
            </div>
            
            <div className="progress-container">
                <div className="progress-label">
                    <span>Progresso Geral</span>
                    <span id="progress-percentage">{progress}%</span>
                </div>
                <div className="progress-bar-bg">
                    <div id="progress-bar-fill" style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            <nav id="section-nav">
                <ul className="nav-list">
                    {navItems.map(item => (
                        <li 
                            key={item.id}
                            className={`nav-item ${item.isChecklist ? 'nav-checklist' : ''} ${activeSection === item.id ? 'active' : ''}`}
                            onClick={() => setActiveSection(item.id)}
                        >
                            <span className="nav-num">{item.num}</span> {item.label}
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="sidebar-footer">
                <button id="btn-print" className="btn btn-primary" onClick={onPrint}>
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 6 2 18 2 18 9"></polyline>
                        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                        <rect x="6" y="14" width="12" height="8"></rect>
                    </svg>
                    Imprimir / PDF
                </button>
                <div className="footer-actions">
                    <button className="btn btn-secondary btn-icon" onClick={onExportJson} title="Salvar Backup (JSON)">
                        Backup
                    </button>
                    <button className="btn btn-secondary btn-icon" onClick={handleImportClick} title="Restaurar Backup (JSON)">
                        Restaurar
                    </button>
                    <button className="btn btn-danger btn-icon" onClick={onClear} title="Limpar Tudo">
                        Limpar
                    </button>
                </div>
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                    style={{ display: 'none' }} 
                    accept=".json" 
                />
            </div>
        </aside>
    );
}
