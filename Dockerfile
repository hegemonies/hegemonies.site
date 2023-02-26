FROM node:latest

RUN mkdir /app
WORKDIR /app
COPY ./ ./

RUN wget -qO- https://get.pnpm.io/install.sh | ENV="~/.shrc" SHELL="$(which sh)" sh -

RUN pnpm install
RUN pnpm build

EXPOSE 3000
CMD pnpm dev
