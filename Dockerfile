# Use a imagem base do Node.js
FROM node:16

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e instale as dependências
COPY package.json package-lock.json ./
RUN npm install

# Copie o código do projeto
COPY . .

# Exponha a porta do microserviço
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "server.js"]
