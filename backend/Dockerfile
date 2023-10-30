FROM node:alpine

WORKDIR /backend

COPY package.json package.json

RUN npm install

COPY . .

# EXPOSE 80

CMD [ "npm", "start" ]