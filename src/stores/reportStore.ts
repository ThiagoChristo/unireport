import { defineStore } from 'pinia';
import { defaultData, type ReportData } from '../data/defaultData';
import { saveReportToDb, getReportFromDb } from '../services/database';

export const useReportStore = defineStore('report', {
    state: () => ({
        reportData: JSON.parse(JSON.stringify(defaultData)) as ReportData,
        activeSection: 'capa' as string,
        showPreviewMobile: false as boolean,
        isInitialized: false as boolean
    }),
    getters: {
        // Calcula a porcentagem geral preenchida
        progress(state): number {
            const data = state.reportData;
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
            return Math.min(Math.round((completedCount / 17) * 100), 100);
        }
    },
    actions: {
        // Inicializa a store lendo dados do Dexie
        async initializeStore() {
            if (this.isInitialized) return;
            try {
                const saved = await getReportFromDb();
                if (saved) {
                    // Mescla com dados default caso novas chaves sejam adicionadas
                    this.reportData = { ...JSON.parse(JSON.stringify(defaultData)), ...saved };
                }
            } catch (e) {
                console.error("Erro ao carregar dados do Dexie:", e);
            } finally {
                this.isInitialized = true;
            }
        },

        // Atualiza campo e salva no Dexie
        async updateReportField<K extends keyof ReportData>(key: K, value: ReportData[K]) {
            this.reportData[key] = value;
            await saveReportToDb(this.reportData);
        },

        // Alterna checklist manual
        async toggleChecklist(itemId: string) {
            const currentChecklist = { ...this.reportData.checklist_manual };
            currentChecklist[itemId] = !currentChecklist[itemId];
            this.reportData.checklist_manual = currentChecklist;
            await saveReportToDb(this.reportData);
        },

        // Importa dados a partir do arquivo de backup
        async importBackup(importedData: any) {
            const merged = { ...JSON.parse(JSON.stringify(defaultData)), ...importedData };
            delete merged.id; // Evita conflitos com a chave do banco
            this.reportData = merged;
            await saveReportToDb(this.reportData);
        },

        // Limpa dados voltando ao padrão
        async clearData() {
            this.reportData = JSON.parse(JSON.stringify(defaultData)) as ReportData;
            await saveReportToDb(this.reportData);
        }
    }
});
