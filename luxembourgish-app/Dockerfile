# Dockerfile multi-stage pour l'application React Luxembourgeoise
# Stage 1: Build l'application React
FROM node:18-alpine AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm ci --only=production

# Copier le code source
COPY . .

# Build l'application pour production
RUN npm run build

# Stage 2: Serveur NGINX pour servir l'application statique
FROM nginx:1.25-alpine

# Copier les fichiers buildés depuis le stage précédent
COPY --from=build /app/build /usr/share/nginx/html

# Copier la configuration NGINX personnalisée
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port 80
EXPOSE 80

# Commande par défaut
CMD ["nginx", "-g", "daemon off;"]