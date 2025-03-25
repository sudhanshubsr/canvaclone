FROM oven/bun:latest

WORKDIR /usr/src/app

COPY package*.json  bun.lock* ./

RUN bun install

COPY . .
RUN bun run build

EXPOSE 3000

CMD [ "bun", "run", "start"]
