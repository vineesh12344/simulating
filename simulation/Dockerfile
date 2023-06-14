FROM node:19-alpine

WORKDIR /app

COPY simulation ./simulation
COPY dbconfig.json .

CMD cd simulation && node main.js