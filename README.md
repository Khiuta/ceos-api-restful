## COMO RODAR A APLICAÇÃO

Para rodar a aplicação, primeiro instale todas as dependências necessárias com o comando "npm install"(sem as aspas).

Depois de instaladas todas as dependências, crie um arquivo .env que vai guardar as variáveis de ambiente necessárias para se conectar ao banco de dados local. As variáveis são:
HOST (endereço do banco de dados)
PORT (porta do banco de dados, padrão postgres: 5432)
USER (usuário postgres)
PASSWORD (senha do usuário postgres)
DB (nome do banco de dados)

Agora, para iniciar a aplicação, execute o comando "npm run dev"(sem as aspas)