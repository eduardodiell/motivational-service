
# 🥋 Motivational Service

Este é um microserviço desenvolvido para fornecer frases motivacionais sobre Jiu-Jitsu. Ele faz parte do projeto **Jiu-Jitsu Training & Diet Tracker**, permitindo integração com outros sistemas por meio de uma API REST.

---

## 📚 Funcionalidades

- **API REST**:
  - **GET /quote**: Retorna uma frase motivacional aleatória.
- **Banco de Dados**:
  - Gerenciamento eficiente de frases com PostgreSQL.
- **Conteinerização**:
  - Configuração simplificada utilizando Docker.

---

## 🛠 Tecnologias Utilizadas

- **Node.js** e **Express.js**: Criação da API REST.
- **PostgreSQL**: Armazenamento e gerenciamento das frases.
- **Docker** e **Docker Compose**: Conteinerização para fácil deploy.

---

## 🚀 Como Executar o Projeto

### Usando Docker (Recomendado)

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/seu-usuario/motivational-service.git
   cd motivational-service
Inicie os Contêineres:

bash
Copy
Edit
docker-compose up --build
Acesse o Serviço: O serviço estará disponível em http://localhost:3000.

🌐 Endpoints Disponíveis
GET /quote
Descrição: Retorna uma frase motivacional aleatória.

Resposta de Exemplo:

json
Copy
Edit
{
  "quote": "A coragem de lutar é maior do que o medo de perder."
}
🧰 Configuração Manual (Opcional)
Pré-requisitos:

Node.js (Baixar aqui).

PostgreSQL instalado e em execução.

Configuração do Banco de Dados:

Crie um banco de dados chamado motivational_service.

Atualize o arquivo .env:

ini
Copy
Edit
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_PORT=5432
DB_NAME=motivational_service
Inicialize o Banco de Dados:

bash
Copy
Edit
node initDb.js
Execute o Servidor:

bash
Copy
Edit
npm install
npm start
O serviço estará disponível em http://localhost:3000.