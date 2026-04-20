FROM oven/bun:1-alpine

WORKDIR /app

COPY package.json ./
COPY server.js ./
COPY public/ ./public/

EXPOSE 80
VOLUME ["/storage"]

CMD ["bun", "server.js"]
