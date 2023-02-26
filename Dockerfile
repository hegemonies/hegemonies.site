FROM node:latest as builder

RUN mkdir /app
WORKDIR /app
COPY ./ ./

RUN wget -qO- https://get.pnpm.io/install.sh | ENV="~/.shrc" SHELL="$(which sh)" sh -

RUN pnpm i
RUN pnpm run build

FROM caddy:latest

RUN mkdir /app
WORKDIR /app
COPY --from=builder /app/public /app/

EXPOSE 3000
CMD caddy file_server --domain hegemonies.site --root /app
