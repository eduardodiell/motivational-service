# Motivational Service

Este projeto é um microserviço para fornecer frases motivacionais com foco no tema **Jiu-Jitsu**. Ele foi desenvolvido usando **Node.js**, **PostgreSQL** e **Docker**.

## Funcionalidades

- Retorna frases motivacionais aleatórias via API.
- Banco de dados gerenciado com PostgreSQL.
- Totalmente configurável e pronto para uso com Docker.

## Requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

## Como usar

### Configuração inicial

1. Clone este repositório:

   ```bash
   git clone https://github.com/eduardodiell/motivational-service.git
   cd motivational-service
   
Instale as dependências do projeto:
npm install

Executar com Docker
Inicie os serviços com Docker Compose:
docker-compose up --build

O microserviço estará disponível em http://localhost:3000.

Testar a API
Use ferramentas como Postman ou cURL para testar o endpoint:
GET http://localhost:3000/api/motivational-quote

Banco de Dados
Host: localhost

Porta: 5432

Usuário: postgres

Senha: password

Nome do Banco: motivational

Scripts úteis
Para inicializar o banco de dados:
node initDb.js

Para rodar o servidor localmente sem Docker:
npm start
