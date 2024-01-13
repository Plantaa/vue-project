FROM node:alpine as base
WORKDIR /backend/
COPY package.json .
RUN npm install
COPY . .

FROM base as development
EXPOSE 5000
ENTRYPOINT [ "npm", "run", "dev" ]

FROM base as production
ENTRYPOINT [ "npm", "start" ]
