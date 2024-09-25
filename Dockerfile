FROM oven/bun:1.1.29-alpine AS build

WORKDIR /app

ARG API_URL=https://api.itpg.cc/demo

COPY package.json .

COPY bun.lockb .

RUN bun install

COPY . .

ENV VITE_API_URL=$API_URL

ENV ADAPTER=bun

RUN bun run build

FROM oven/bun:1.1.29-alpine

LABEL org.opencontainers.image.source=https://github.com/vanillaice/itpg-frontend

COPY --from=build /app/build /build

EXPOSE 3000

CMD ["bun", "/build/index.js"]
