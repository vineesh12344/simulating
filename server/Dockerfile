FROM golang:1.18-alpine

WORKDIR /app

COPY go.mod ./
COPY go.sum ./

COPY frontend ./frontend
COPY db ./db
COPY server ./server
COPY dbconfig.json ./

RUN cd server && go build -o /main

EXPOSE 8080

CMD cd server && /main