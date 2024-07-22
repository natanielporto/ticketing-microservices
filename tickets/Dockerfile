FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install -g ts-node-dev
RUN npm install --omit=dev
COPY . .

CMD ["npm", "start"]