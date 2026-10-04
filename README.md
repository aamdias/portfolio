# Portfólio de Alan Dias

Site pessoal em [aamdias.com](https://www.aamdias.com), construído com React 18,
TypeScript, SCSS, MDX, Vite e React Router. Hospedagem na Vercel.

## Desenvolvimento

Use Node.js 22, conforme `package.json`.

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run build
npm run preview
```

## Redesign v3

O layout editorial usa Inter para a interface, Newsreader para títulos e leitura e
Bricolage Grotesque para o wordmark. Os tokens de cores, fontes e movimento ficam
em `src/styles/_variables.scss`. As fontes são carregadas pelo Google Fonts.

- `/`: apresentação, artigos recentes, produtos e categorias de bookmarks.
- `/artigos`: artigos agrupados por ano, do mais recente para o mais antigo.
- `/artigos/:slug`: MDX carregado sob demanda, índice lateral, progresso e próximo artigo.
- `/produtos`: projetos publicados, definidos em `src/data/products.json`.
- `/bookmarks`: curadoria em `src/data/bookmarks.ts`, busca sem distinção de acentos,
  categorias no hash da URL, `/` para buscar e `Esc` para limpar e sair da busca.
- `/sobre`: biografia e contato para serviços personalizados.
- `/agenda`: Google Calendar incorporado e link para abrir em nova aba.

Os endereços antigos `/conteudos` e `/construacomigo` redirecionam para `/artigos`
e `/sobre`. Endereços e artigos inexistentes mostram uma página de recuperação.

O tema é compartilhado entre todas as páginas, segue a preferência do sistema na
primeira visita e salva a escolha em `localStorage['alan-theme']`. Um script no
HTML aplica o tema antes de montar a aplicação. Animações respeitam
`prefers-reduced-motion`.

Artigos e metadados ficam em `src/mdx` e `src/data/articles.json`. Links de contato,
redes sociais e o endereço incorporável do calendário ficam em `src/data/links.ts`.
