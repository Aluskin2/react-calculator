# Budowanie aplikacji
FROM node:22-alpine AS build

# Ustawienie katalogu roboczego
WORKDIR /app

# Skopiowanie package.json oraz package-lock.json, aby zainstalować zależności
COPY package.json package-lock.json ./

# Instalacja zależności
RUN npm install

# Skopiowanie reszty plików projektu do obrazu
COPY . .

# Budowanie aplikacji React
RUN npm run build

# Etap 2: Serwowanie aplikacji
FROM nginx:alpine

# Skopiowanie zbudowanej aplikacji z etapu budowania do katalogu, z którego Nginx serwuje pliki
COPY --from=build /app/build /usr/share/nginx/html

# Domyślny port, na którym działa Nginx
EXPOSE 80

# Komenda do uruchomienia serwera Nginx
CMD ["nginx", "-g", "daemon off;"]