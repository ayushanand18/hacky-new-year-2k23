FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm ci --only=production
EXPOSE 5000
CMD ["node","app/index.js"]