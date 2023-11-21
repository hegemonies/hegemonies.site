FROM node:latest

RUN mkdir /app
WORKDIR /app
COPY ./ ./

RUN curl -fsSL https://get.pnpm.io/install.sh | sh -

RUN /root/.local/share/pnpm/pnpm install
RUN /root/.local/share/pnpm/pnpm build

EXPOSE 3000
CMD /root/.local/share/pnpm/pnpm start --host
