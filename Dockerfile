FROM node:18.12.1 AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

# etc.
RUN npm install -g npm@9.2.0
RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build
## this is stage two , where the app actually runs
FROM node:18.12.1

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/build ./build
COPY --from=builder /app/prisma ./prisma

RUN npm install -g npm@9.2.0
EXPOSE 8080
CMD [  "npm", "run", "start:migrate:prod"]
