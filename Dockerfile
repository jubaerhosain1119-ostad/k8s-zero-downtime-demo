FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY . .

ENV PORT=3000
ENV APP_VERSION=v2

EXPOSE 3000

CMD ["npm", "start"]
