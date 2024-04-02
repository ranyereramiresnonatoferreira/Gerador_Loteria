FROM node:latest as angular
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . . 
run npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/GERADOR_LOTERIA /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t gerador-loteria
# docker run -p 8081:80 gerador-loteria