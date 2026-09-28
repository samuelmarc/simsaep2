# SIMULADO — Lista de Verificação por Atividade

Curso: Técnico em Desenvolvimento de Sistemas
Espelha a estrutura de pesos/capacidades da Lista de Verificação real do SAEP.

## ATIVIDADE 1 — DOCUMENTAÇÃO DE SOFTWARE

| # | Evidência observável | Peso |
|---|---|---|
| 1.1 | Identificou no mínimo 4 requisitos do sistema conforme Anexo 1? | 2 |
| 1.2 | Identificou todos os requisitos de infraestrutura (SGBD e Linguagem de Programação)? | 1 |
| 1.3 | Gerou diagrama entidade relacionamento conforme descrito no caderno de provas? | 1 |

## ATIVIDADE 2 — SCRIPT (CRIAÇÃO E POPULAÇÃO) BANCO DE DADOS

| # | Evidência observável | Peso |
|---|---|---|
| 2.1 | Criou as tabelas no banco de dados respeitando a chave estrangeira de cada relacionamento? | 2 |
| 2.2 | Inseriu pelo menos três registros em cada uma das tabelas criadas? | 1 |

## ATIVIDADE 3 — FUNCIONALIDADE DE LOGIN

| # | Evidência observável | Peso |
|---|---|---|
| 3.1 | Desenvolveu a autenticação do usuário, redirecionando-o ao módulo principal ao inserir login e senha registrados no banco? | 1 |
| 3.2 | Criou uma sessão para o usuário autenticado com tempo de expiração? | 3 |
| 3.3 | Desenvolveu validação (frontend ou backend) caso haja falha de autenticação no login? | 2 |

## ATIVIDADE 4 — FUNCIONALIDADE PRINCIPAL DO SISTEMA

| # | Evidência observável | Peso |
|---|---|---|
| 4.1 | Recuperou o nome do usuário autenticado na sessão e exibiu na funcionalidade principal? | 2 |
| 4.2 | Desenvolveu um meio para sair do sistema? | 1 |
| 4.3 | Desenvolveu um meio de acessar as funcionalidades "Cliente", "Veículo" e "Ordem de Serviço" a partir da funcionalidade "Principal"? | 1 |

## ATIVIDADE 5 — FUNCIONALIDADE DE GERENCIAMENTO DE CLIENTE

| # | Evidência observável | Peso |
|---|---|---|
| 5.1 | Desenvolveu as funcionalidades de listar e excluir os registros de clientes cadastrados? | 2 |
| 5.2 | Desenvolveu uma funcionalidade de busca com no mínimo um termo de busca? | 3 |
| 5.3 | Desenvolveu a funcionalidade para inserção de um novo cliente, com persistência no banco de dados? | 2 |
| 5.4 | Desenvolveu um meio para criptografar pelo menos a senha e o CPF do cliente no banco de dados? | 3 |
| 5.5 | Desenvolveu a programação para editar um cliente já existente no banco de dados? | 3 |

## ATIVIDADE 6 — FUNCIONALIDADE DE GERENCIAMENTO DE VEÍCULO

| # | Evidência observável | Peso |
|---|---|---|
| 6.1 | Desenvolveu a programação para inserção de um novo veículo, associando-o a um cliente no banco de dados? | 3 |

## ATIVIDADE 7 — FUNCIONALIDADE DE GERENCIAMENTO DE ORDEM DE SERVIÇO

| # | Evidência observável | Peso |
|---|---|---|
| 7.1 | Desenvolveu a programação para listar as ordens de serviço ordenadas por data de abertura? | 3 |
| 7.2 | Desenvolveu a programação para atualizar a data de abertura de uma ordem de serviço? | 2 |
