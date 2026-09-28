# Simulado - Sistema de Gestão - Oficina Mecânica

Simulado de treino no mesmo formato do SAEP. Sistema de cadastro e
gerenciamento de clientes, veículos e ordens de serviço, com
autenticação de usuários e controle seguro de dados.

## Tecnologias

- Front-end: HTML, CSS (Bootstrap 5), JavaScript
- Back-end: Node.js + Express
- Banco de dados: PostgreSQL

## Como rodar

1. Crie um banco chamado `oficina_db` e rode o script
   `oficina_db.sql` (raiz do projeto, fora da pasta `sistema/`).
2. Ajuste `config/db.js` se necessário.
3. Dentro de `sistema/`: `npm install`
4. `npm start`
5. Acesse http://localhost:3000/login.html

Usuários de teste:

| Usuário | Senha  |
|---------|--------|
| admin   | 123456 |
| marcos  | 123456 |
| paula   | 123456 |

Veja **GUIA_DE_DESENVOLVIMENTO.md** para o roteiro de cada parte
pendente.
