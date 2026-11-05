FROM node:22-alpine

WORKDIR /usr/src/app

ENV PORT=8079

COPY package*.json ./
RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]