FROM node:20-alpine as build
WORKDIR /app
COPY /package*.json .
COPY /vite.config.js .
RUN npm install
COPY . .
RUN npm run build

### Stage 2
FROM nginx:alpine
ADD ./config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/app/
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]

