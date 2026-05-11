FROM node:20

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build consumer-service

CMD ["node", "dist/apps/consumer-service/main"]