# FROM node:alpine3.17
# WORKDIR /user/src/app
# COPY . .
# RUN npm install
# CMD [ "npm start" ]

FROM node:14.20.1-alpine3.15 as build
WORKDIR /app
COPY package*.json .
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build

FROM nginx:stable-alpine
COPY cust_nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]