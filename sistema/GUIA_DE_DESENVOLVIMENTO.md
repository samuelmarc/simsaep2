# Guia de Desenvolvimento - Simulado

Mesma lógica do guia do sistema principal. Ordem recomendada:

1. Funcionalidade Principal (nome do usuário + logout)
2. Cliente (listar → inserir → excluir → editar → buscar)
3. Veículo (inserir)
4. Ordem de Serviço (listar com join → atualizar data)

## Funcionalidade Principal

- Nome do usuário: `principal.js` já busca `/api/auth/sessao` -
  falta usar o resultado para preencher `#nome-usuario`.
- Logout: veja `exemplos/exemplo-logout.js`. Implemente a rota
  vazia em `routes/auth.js` e chame-a a partir do botão `#btn-sair`.

## Cliente

- Listar (`GET /`): não esqueça de descriptografar o CPF antes de
  responder.
- Inserir (`POST /`): criptografe o CPF antes de salvar.
- Editar (`PUT /:id`): mesma lógica do inserir, mas com UPDATE.
- Excluir (`DELETE /:id`): direto.
- Busca: pode ser filtrando no JavaScript (lista já carregada) ou
  com `ILIKE` no banco (`?busca=termo` na URL). Veja
  `exemplos/exemplo-crud-completo/livros-routes.js` para um
  exemplo completo desse padrão.

## Veículo

- Inserir (`POST /`): sempre vinculado a um `cliente_id`.

## Ordem de Serviço

- Listar (`GET /`): JOIN `ordens_servico -> veiculos -> clientes`,
  `ORDER BY data_abertura`. Veja
  `exemplos/exemplo-join-multiplas-tabelas.sql`.
- Atualizar data (`PUT /:id`): veja o exemplo de UPDATE em
  `exemplos/exemplo-crud-completo/livros-routes.js`.

## Pontos de atenção

- Todas as rotas (exceto login) já vêm protegidas pelo middleware
  `verificarSessao` - não precisa mexer nisso.
- CPF: sempre criptografar antes de salvar, descriptografar antes
  de exibir.
