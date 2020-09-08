FROM node:lts as builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run docz:build

FROM nginx/unit:latest

COPY --from=builder /usr/src/app/.docz/dist/ www/

EXPOSE 8000