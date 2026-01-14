# Utilisation d'une image Node légère
FROM node:20-alpine

# Dossier de travail
WORKDIR /app

# Copie package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN npm install --production

# Copie du reste du code
COPY . .

# Génération Prisma
RUN npx prisma generate

# Exposition du port
EXPOSE 3000

# Commande de lancement
CMD ["node", "src/app.js"]
