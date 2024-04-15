FROM node:20-alpine3.18

WORKDIR /app

COPY package.json ./
COPY prisma ./prisma

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

RUN npm install pm2 -g

CMD ["npm", "run", "start:migrate:prod"]