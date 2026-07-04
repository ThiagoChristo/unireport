import Dexie, { type Table } from 'dexie';
import { type ReportData } from '../data/defaultData';

export class ReportDatabase extends Dexie {
    reports!: Table<ReportData, number>;

    constructor() {
        super('UniReportDatabase');
        this.version(1).stores({
            reports: '++id, aluno, curso, ru'
        });
    }
}

export const db = new ReportDatabase();

/**
 * Salva o estado atual do relatório no banco local Dexie.
 * Usamos a chave primária id = 1 para manter um único documento ativo de forma resiliente.
 */
export async function saveReportToDb(data: ReportData): Promise<void> {
    const dataToSave = { ...data, id: 1 };
    await db.reports.put(dataToSave);
}

/**
 * Recupera o último relatório salvo no IndexedDB.
 */
export async function getReportFromDb(): Promise<ReportData | undefined> {
    return await db.reports.get(1);
}
