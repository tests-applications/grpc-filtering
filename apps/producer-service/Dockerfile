FROM node:20

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build producer-service

CMD ["node", "dist/apps/producer-service/main"]