FROM node:20.10 AS build

# Env variables
ARG VITE_API_URL=http://localhost:3001/api/v1

WORKDIR /build
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx AS final
WORKDIR /usr/share/nginx/html
COPY --from=build /build/dist .