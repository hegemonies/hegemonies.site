FROM node:latest

RUN mkdir /app
WORKDIR /app
COPY ./ ./

RUN wget -qO- https://get.pnpm.io/install.sh | ENV="~/.shrc" SHELL="$(which sh)" sh -

RUN /root/.local/share/pnpm/pnpm install
RUN /root/.local/share/pnpm/pnpm build

EXPOSE 3000
CMD /root/.local/share/pnpm/pnpm start --host
