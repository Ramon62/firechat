FROM node:9.3.0 as node

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --prod

FROM nginx:alpine

COPY --from=node /app/dist/firechat/ /usr/share/nginx/html