FROM node:20

# Directorio de trabajo
WORKDIR /app

# Copiar dependencias
COPY package*.json ./

# Instalar dependencias del proyecto
RUN npm install

# Instalar servidor estático
RUN npm install -g serve

# Copiar el resto del código
COPY . .

# Compilar la aplicación
RUN npm run build

# Exponer el puerto que usará serve
EXPOSE 3000

# Comando para servir la app
CMD ["serve", "-s", "dist", "-l", "3000"]