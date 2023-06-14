FROM node:19-alpine

WORKDIR /app

COPY simulation ./simulation
COPY dbconfig.json ./

RUN cd simulation && npm install

CMD cd simulation && node main.js