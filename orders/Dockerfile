FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install -g ts-node-dev
RUN npm install --only=prod
COPY . .

CMD ["npm", "start"]