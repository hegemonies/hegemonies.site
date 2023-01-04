FROM node:latest as builder

RUN mkdir /app
WORKDIR /app
COPY ./ ./

RUN npm i
RUN npm run build

FROM caddy:latest

RUN mkdir /app
WORKDIR /app
COPY --from=builder /app/public /app/

CMD caddy file_server --domain hegemonies.site --root /app
