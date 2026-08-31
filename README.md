# Lista de Compras

Aplicação Angular simples de lista de compras. Permite adicionar itens (nome e quantidade), marcar itens como comprados e ver sugestões de produtos vindas de uma API pública ([FakeStoreAPI](https://fakestoreapi.com)).

## Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org) instalado.

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Suba o servidor de desenvolvimento:

   ```bash
   ng serve
   ```

3. Abra o navegador em `http://localhost:4200/`. A aplicação recarrega automaticamente ao salvar alterações no código.

## Scripts úteis

- `npm start` -> equivalente a `ng serve`
- `npm run build` -> gera o build de produção em `dist/`
- `npm test` -> executa os testes unitários (Karma/Jasmine)
