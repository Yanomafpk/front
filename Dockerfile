# Use o tempo de execução oficial do Node.js como a imagem base
FROM node:18 AS build

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale dependências
RUN npm install

# Copie todo o código do aplicativo para o contêiner
COPY . .

# Crie o aplicativo React para produção
RUN npm run build

# Use o Nginx como o servidor de produção
FROM nginx:alpine

# Copie a configuração personalizada do Nginx
COPY nginx.config /etc/nginx/conf.d/default.conf

# Copie o aplicativo React criado para o diretório do servidor web do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponha a porta 8087 para o servidor Nginx
EXPOSE 8087

# Inicie o Nginx quando o contêiner for executado
CMD ["nginx", "-g", "daemon off;"]