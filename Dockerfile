FROM oven/bun:1.1.4-alpine AS build

WORKDIR /app

ARG API_URL=https://api.itpg.cc/demo

COPY package.json .

COPY bun.lockb .

RUN bun install

COPY . .

ENV VITE_API_URL=$API_URL

ENV ADAPTER=bun

RUN bun run build

FROM oven/bun:1.1.4-alpine

COPY --from=build /app/build /build

EXPOSE 3000

CMD ["bun", "/build/index.js"]
