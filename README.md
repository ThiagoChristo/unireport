# 🎓 UniReport - Gerador de Relatório de Computação (Normas ABNT / UNINTER)

O **UniReport** é um editor acadêmico reativo, moderno e intuitivo, desenvolvido especialmente para auxiliar estudantes da área de computação (Engenharia de Software, Análise e Desenvolvimento de Sistemas, Ciência da Computação, etc.) a preencherem e gerarem o **Relatório do Projeto Interdisciplinar I** da UNINTER.

O projeto foi construído focando em **reatividade em tempo real**, **persistência de dados resiliente contra falhas (autosave)** e **geração limpa de arquivos compatíveis com o Microsoft Word (.docx)** e **impressão PDF nativa**.

---

## 🛠️ Stack Tecnológica (Nova Arquitetura)

O sistema foi reconstruído sob uma arquitetura de alta performance:

*   **Runtime & Package Manager**: [Bun](https://bun.sh/) (inicialização instantânea e instalações ultra velozes).
*   **Build Tool**: [Vite](https://vite.dev/) (com suporte a HMR - Hot Module Replacement em milissegundos).
*   **Framework**: [Vue 3](https://vuejs.org/) (Composition API com `<script setup>` e TypeScript estrito).
*   **Estado Global**: [Pinia](https://pinia.vuejs.org/) (estado reativo centralizado com cálculo automático de progresso).
*   **Estilização & UI**: [Tailwind CSS v4](https://tailwindcss.com/) (com tema premium escuro no editor e simulação física de folha A4 no preview).
*   **Persistência Local (Autosave)**: [Dexie.js](https://dexie.org/) (wrapper leve sobre IndexedDB que salva cada tecla digitada).
*   **Ícones**: [Lucide Vue](https://lucide.dev/) (conjunto de ícones vetoriais modernos).
*   **Exportadores**:
    *   **Word (.docx)**: Biblioteca nativa `docx` + `file-saver` para download do binário formatado.
    *   **PDF / Impressão**: CSS Print Media Queries (`@media print`) otimizadas.

---

## ✨ Principais Funcionalidades

1.  **Edição Reativa Instantânea**: Digite no editor central e veja as alterações serem atualizadas imediatamente na folha A4 simulada do lado direito.
2.  **Autosalvamento Resiliente**: Graças ao Dexie.js (IndexedDB), todo o conteúdo digitado é salvo instantaneamente. Você pode fechar a aba do navegador, faltar luz ou reiniciar o computador sem perder nenhuma letra.
3.  **Visualização A4 Realística**: A folha de preview no navegador simula exatamente as margens físicas da norma ABNT (Superior 3cm, Esquerda 3cm, Direita 2cm, Inferior 2cm) e repete essas margens perfeitamente em todas as páginas do relatório.
4.  **Cálculo Dinâmico de Progresso**: A barra lateral mostra a porcentagem geral preenchida com base nas seções obrigatórias exigidas pela UNINTER.
5.  **Exportação Premium para Word (.docx)**: Gera um arquivo `.docx` real com tabelas formatadas em preto e branco (padrão acadêmico), paginação física e margens ABNT, pronto para ser ajustado no Word.
6.  **Impressão PDF Nativa**: Ao clicar em "Imprimir / PDF" ou pressionar `Ctrl + P`, a folha A4 é formatada e todo o menu e painel do editor são ocultados, deixando apenas o documento pronto para salvar em PDF.
7.  **Backup e Restauração de Dados**: Salve um arquivo `.json` local com as suas respostas e importe em outra máquina para continuar de onde parou.
8.  **Checklist de Entrega**: Um checklist interativo das exigências finais da UNINTER para você marcar antes de anexar o arquivo na Univirtus.

---

## 📐 Estrutura de Pastas do Projeto

```text
relatorio-real/
├── package.json                 # Definições de dependências
├── vite.config.ts               # Configurações do Vite (com Tailwind v4)
├── tsconfig.json                # Configurações do TypeScript
├── index.html                   # Entrada HTML da aplicação
├── documento_base/              # Arquivos Markdown originais para escrita offline
└── src/
    ├── App.vue                  # Componente base que monta o layout Grid
    ├── main.ts                  # Ponto de entrada TypeScript do Vue
    ├── assets/
    │   └── main.css             # Diretivas do Tailwind e regras de estilo físico A4 / impressão
    ├── components/
    │   ├── Sidebar.vue          # Barra lateral com navegação, progresso e botões de ação
    │   ├── Preview.vue          # Preview reativo com a renderização das folhas A4
    │   └── forms/               # 15 formulários isolados para cada etapa do relatório
    ├── data/
    │   └── defaultData.ts       # Template padrão UNINTER e interfaces TS
    ├── services/
    │   ├── database.ts          # Banco de dados IndexedDB (Dexie)
    │   └── wordGenerator.ts     # Geração de arquivos .docx nativos
    └── stores/
        └── reportStore.ts       # Gerenciamento de estado global com Pinia
```

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
Você precisará do [Bun](https://bun.sh/) instalado (ou do Node.js + NPM tradicionais).

### Passos para execução:

1.  **Instale as dependências**:
    ```bash
    bun install
    # ou
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento**:
    ```bash
    bun run dev
    # ou
    npm run dev
    ```

3.  **Acesse no navegador**:
    Abra o endereço gerado pelo Vite (normalmente `http://localhost:5173`).

### Gerar Build de Produção:
```bash
bun run build
# ou
npm run build
```
O build estático otimizado será gerado dentro da pasta `/dist`.
