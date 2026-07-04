import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import EditorPane from './components/EditorPane';
import PreviewPane from './components/PreviewPane';
import { defaultData, checklistItems } from './data/defaultData';

const STORAGE_KEY = 'uninter_report_project_data';

export default function App() {
    const [data, setData] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                return { ...defaultData, ...parsed };
            } catch (e) {
                console.error("Erro ao carregar dados do localStorage. Usando padrão.", e);
                return { ...defaultData };
            }
        }
        return { ...defaultData };
    });

    const [activeSection, setActiveSection] = useState('capa');
    const [showPreviewMobile, setShowPreviewMobile] = useState(false);
    const [progress, setProgress] = useState(0);

    // Salvar no localStorage sempre que 'data' mudar
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        calculateProgress();
    }, [data]);

    // Calcular o progresso de preenchimento do relatório
    const calculateProgress = () => {
        let completedCount = 0;
        
        // Critérios básicos de preenchimento
        if (data.curso && data.curso.trim() !== "") completedCount++;
        if (data.aluno && data.aluno.trim() !== "") completedCount++;
        if (data.ru && data.ru.trim() !== "") completedCount++;
        
        if (data.intro_profissao && data.intro_profissao.trim() !== "" && 
            data.intro_motivo && data.intro_motivo.trim() !== "") completedCount++;
            
        if (data.atividades && data.atividades.filter(a => a && a.trim() !== "").length >= 3) completedCount++;
        if (data.setores && data.setores.filter(s => s && s.trim() !== "").length >= 3) completedCount++;
        
        // Competências
        const validCompTec = data.comp_tecnicas.filter(c => c.nome && c.nome.trim() !== "" && c.desc && c.desc.trim() !== "");
        if (validCompTec.length >= 5) completedCount++;
        
        const validCompComp = data.comp_comportamentais.filter(c => c.nome && c.nome.trim() !== "" && c.desc && c.desc.trim() !== "");
        if (validCompComp.length >= 5) completedCount++;
        
        const validTec = data.tecnologias.filter(c => c.nome && c.nome.trim() !== "" && c.desc && c.desc.trim() !== "");
        if (validTec.length >= 5) completedCount++;
        
        if (data.ingresso && data.ingresso.filter(i => i && i.trim() !== "").length >= 3) completedCount++;
        
        const validDesafios = data.desafios.filter(d => d.nome && d.nome.trim() !== "" && d.desc && d.desc.trim() !== "");
        if (validDesafios.length >= 3) completedCount++;
        
        if (data.tendencias && data.tendencias.filter(t => t && t.trim() !== "").length >= 3) completedCount++;
        if (data.relacao && data.relacao.filter(r => r && r.trim() !== "").length >= 3) completedCount++;
        
        // Reflexões 9.1 a 9.7
        const validRefs = [data.ref_91, data.ref_92, data.ref_93, data.ref_94, data.ref_95, data.ref_96, data.ref_97]
            .filter(r => r && r.trim() !== "");
        if (validRefs.length >= 7) completedCount++;
        
        // Planejamento
        const validPlan = data.planejamento.filter(p => p.acad && p.acad.trim() !== "" && p.prof && p.prof.trim() !== "" && p.acao && p.acao.trim() !== "");
        if (validPlan.length >= 3) completedCount++;
        
        // Financeiro
        if (data.fin_meta && data.fin_meta.trim() !== "" && data.fin_valor && data.fin_valor.trim() !== "" && data.fin_mensal && data.fin_mensal.trim() !== "") completedCount++;
        
        // Conclusão
        const validAprend = data.aprendizados.filter(a => a && a.trim() !== "");
        const validContrib = data.contribuicao.filter(c => c && c.trim() !== "");
        const validIntenc = data.intencoes.filter(i => i && i.trim() !== "");
        if (validAprend.length >= 2 && validContrib.length >= 2 && validIntenc.length >= 2) completedCount++;
        
        // Referências
        if (data.referencias && data.referencias.filter(r => r && r.trim() !== "").length >= 3) completedCount++;

        // 17 critérios em total
        const percent = Math.min(Math.round((completedCount / 17) * 100), 100);
        setProgress(percent);
    };

    // Sincronizar alterações no estado
    const handleChange = (key, value) => {
        setData(prev => ({
            ...prev,
            [key]: value
        }));
    };

    // Alternar checklist manual
    const toggleChecklist = (itemId) => {
        setData(prev => {
            const currentChecklist = { ...prev.checklist_manual };
            currentChecklist[itemId] = !currentChecklist[itemId];
            return {
                ...prev,
                checklist_manual: currentChecklist
            };
        });
    };

    // Ações de rodapé
    const handlePrint = () => {
        window.print();
    };

    const handleExportJson = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
        const dlAnchorElem = document.createElement('a');
        dlAnchorElem.setAttribute("href", dataStr);
        dlAnchorElem.setAttribute("download", `Backup_Relatorio_UNINTER_${data.aluno.replace(/\s+/g, '_') || 'Estudante'}.json`);
        dlAnchorElem.click();
    };

    const handleImportJson = (importedData) => {
        setData({ ...defaultData, ...importedData });
        alert("Backup restaurado com sucesso!");
    };

    const handleClear = () => {
        if (window.confirm("Atenção: Você perderá todo o progresso do relatório. Deseja mesmo limpar os dados?")) {
            setData({ ...defaultData });
            alert("Dados limpos com sucesso!");
        }
    };

    const handleTogglePreview = () => {
        setShowPreviewMobile(!showPreviewMobile);
    };

    return (
        <div id="app-container">
            <Sidebar 
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                progress={progress}
                onPrint={handlePrint}
                onExportJson={handleExportJson}
                onImportJson={handleImportJson}
                onClear={handleClear}
            />
            
            <EditorPane 
                activeSection={activeSection}
                data={data}
                onChange={handleChange}
                checklistItems={checklistItems}
                toggleChecklist={toggleChecklist}
            />

            <div className={showPreviewMobile ? 'active-mobile' : ''} id="preview-pane-wrapper">
                <PreviewPane 
                    data={data}
                    activeSection={activeSection}
                    onTogglePreview={handleTogglePreview}
                />
            </div>
        </div>
    );
}
