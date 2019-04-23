FROM node:9-alpine

WORKDIR /usr/node/app

COPY package.json .
COPY package-lock.json .

RUN apk update && apk add
RUN npm install --quiet

COPY . .