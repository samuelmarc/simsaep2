# SIMULADO SAEP — Técnico em Desenvolvimento de Sistemas
## Caderno de Prova 01 (Treino)

Tempo total: 3 horas (180 minutos), após 30 minutos de ambientação.

---

## CONTEXTUALIZAÇÃO

Uma oficina mecânica enfrenta dificuldades em sua rotina de atendimentos
devido à ausência de um sistema informatizado. O controle manual dos
cadastros de clientes, veículos e ordens de serviço tem ocasionado perda
de informações, duplicidade de registros e falhas no armazenamento de
dados. Além disso, a falta de segurança no armazenamento de dados
sensíveis, como o CPF dos clientes, coloca a oficina em risco de
descumprimento da Lei Geral de Proteção de Dados (LGPD).

Para resolver essa situação, o gestor da oficina contratou sua equipe
para desenvolver uma solução de software que organize o cadastro de
clientes, veículos e o controle das ordens de serviço. Durante a reunião
inicial, o gestor destacou a importância da autenticação dos usuários
com tempo de expiração, da segurança dos dados sensíveis e da
documentação técnica do sistema, incluindo requisitos funcionais e
geração do diagrama entidade relacionamento, a fim de garantir a
manutenção futura do sistema.

Após a reunião com o gestor da oficina, foram definidas algumas regras
de negócio:

- No script do banco de dados devem existir pelo menos três registros
  para todas as tabelas criadas, respeitando os tipos de dados, chaves
  primárias e estrangeiras.
- Na funcionalidade de login, fazer validação em caso de falha na
  autenticação.
- Os dados sensíveis devem ser criptografados no banco de dados.
- A funcionalidade principal do sistema deve exibir: nome do usuário
  logado e uma forma de acessar os demais recursos, assim como uma
  maneira de sair do sistema.
- A funcionalidade de cliente deve conter: um recurso de busca para que
  o usuário possa inserir o termo, o qual, após inserção e confirmação,
  deverá exibir para o usuário a atualização da listagem dos valores da
  tabela com os registros que correspondem.
- A funcionalidade de ordem de serviço deve exibir: listagem das ordens
  de serviço cadastradas ordenada por data de abertura, trazendo todos
  os dados do cliente e do veículo.
- Ao cadastrar um novo veículo, o usuário deve associá-lo a um cliente.

---

## DESAFIO

Você, como desenvolvedor, deverá criar um sistema que permita o
cadastro e gerenciamento de clientes, veículos e ordens de serviço,
com autenticação de usuários e controle seguro de dados.

---

## ENTREGAS

| Nº | Entrega | Arquivo/Formato | Tempo estimado (min) |
|---|---|---|---|
| 1 | Documentação de software (Anexo 1) | documentacao.pdf | 15 |
| 2 | Diagrama entidade relacionamento | imagem ou .pdf | 5 |
| 3 | Script de criação e população do banco de dados | oficina_db.sql | 20 |
| 4 | Código-fonte da funcionalidade de login | dentro de `sistema/` | 20 |
| 5 | Código-fonte da funcionalidade principal do sistema | dentro de `sistema/` | 20 |
| 6 | Código-fonte da funcionalidade de gerenciamento de Cliente | dentro de `sistema/` | 30 |
| 7 | Código-fonte da funcionalidade de gerenciamento de Veículo | dentro de `sistema/` | 30 |
| 8 | Código-fonte da funcionalidade de gerenciamento de Ordem de Serviço | dentro de `sistema/` | 40 |

## RESULTADOS E ENTREGAS ESPERADAS

Crie um diretório compactado (.zip, .rar ou .7zip) nomeado com seu nome
completo, contendo todos os arquivos acima.
