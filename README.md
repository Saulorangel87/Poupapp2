# PoupApp

PoupApp e uma interface de controle financeiro criada como projeto ficticio da Alura. A aplicacao apresenta um painel com resumo do orcamento diario, progresso de meta financeira, movimentacoes recentes e contas cadastradas.

O objetivo do projeto e praticar a construcao de uma tela moderna com React, componetizacao e estilização com Tailwind CSS, mantendo os elementos visuais organizados em cards reutilizaveis.

## Funcionalidades

- Exibicao do orcamento diario disponivel.
- Card com progresso da meta financeira.
- Lista de movimentacoes financeiras com entradas e saidas destacadas por cor.
- Lista de contas bancarias com saldo.
- Campo de busca no topo da area principal.
- Layout com menu lateral, area principal e cards de resumo.

## Tecnologias utilizadas

- React: biblioteca usada para criar a interface com componentes reutilizaveis.
- Vite: ferramenta usada para criar, rodar e gerar o build do projeto.
- Tailwind CSS: framework de CSS usado para estilizar os componentes com classes utilitarias.
- JavaScript: linguagem principal da aplicacao.
- ESLint: ferramenta usada para manter padroes e boas praticas no codigo.

## Estrutura do projeto

```txt
src/
  assets/            Imagens utilizadas no projeto
  components/        Componentes reutilizaveis da interface
  App.jsx            Composicao principal da tela
  index.css          Configuracao de tema e estilos globais
  main.jsx           Ponto de entrada da aplicacao
```

## Como executar

Instale as dependencias:

```bash
npm install
```

Rode o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

Gere a versao de producao:

```bash
npm run build
```

Visualize o build gerado:

```bash
npm run preview
```

## Scripts disponiveis

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: gera os arquivos finais da aplicacao.
- `npm run lint`: executa a verificacao do codigo com ESLint.
- `npm run preview`: abre uma pre-visualizacao do build.

## Status

Projeto em desenvolvimento, com foco na estilização do dashboard financeiro e organizacao dos componentes da interface.
