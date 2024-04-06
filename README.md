## COMO RODAR A APLICAÇÃO

Para rodar a aplicação, primeiro instale todas as dependências necessárias com o comando "npm install"(sem as aspas).

Depois de instaladas todas as dependências, crie um arquivo .env que vai guardar as variáveis de ambiente necessárias para se conectar ao banco de dados local. As variáveis são:
HOST (endereço do banco de dados)
PORT (porta do banco de dados, padrão postgres: 5432)
USER (usuário postgres)
PASSWORD (senha do usuário postgres)
DB (nome do banco de dados)
SERVER_PORT (porta para iniciação do servidor)

Agora, execute o comando "npm run db-create", isso irá criar um banco de dados postgres na sua máquina de acordo com as especificações das variáveis de ambiente. Depois, o comando "npm run db-migrate", isso irá criar as tabelas. Finalmente, o comando "npm run dev" irá  iniciar a aplicação na porta especificada.

As rotas são:
GET - http://localhost:5000/employee
GET por id - http://localhost:5000/employee/id
POST - http://localhost:5000/employee
