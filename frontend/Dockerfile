FROM node:alpine as base
WORKDIR /frontend
COPY package.json .
RUN npm install
COPY . .

FROM base as development
EXPOSE 5173
ENTRYPOINT [ "npm", "run", "dev" ]

FROM base as build
RUN npm run build

FROM nginx as production
COPY --from=base /frontend/htmx/htmx.min.js /htmx/htmx.min.js
COPY --from=build /frontend/dist/ /usr/share/nginx/html/
COPY conf/nginx.conf /etc/nginx/conf.d/default.conf
COPY conf/ssl.conf /etc/nginx/ssl.conf
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]