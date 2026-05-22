# Arquitetura — Sentir para Compreender

## Visão Geral

O projeto segue uma arquitetura em 4 camadas:

1. **Estrutura da aplicação** (`app/`): layouts, rotas, páginas
2. **Componentes** (`components/`): peças reutilizáveis de UI
3. **Conteúdo e dados** (`content/`, `data/`): textos, perguntas, depoimentos
4. **Assets e mídia** (`public/`): áudios, imagens, legendas

## Princípios

- Cada página é fina — importa componentes e dados, não contém lógica pesada
- Conteúdo textual vive em arquivos de dados, nunca hardcoded em componentes
- Componentes são pequenos e com responsabilidade única
- Acessibilidade é transversal, não um módulo separado

## Stack

- Next.js 14 com App Router
- React 18
- TypeScript (strict mode)
- Tailwind CSS
- Vitest + React Testing Library + axe-core

## Convenções

- Componentes em PascalCase: `Header.tsx`
- Dados em camelCase: `navigation.ts`
- Rotas em kebab-case: `/experiencias/visual`
- CSS custom properties para temas
- `@/` como alias para raiz do projeto
