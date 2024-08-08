FROM node:latest

WORKDIR /tmp/salesInterface

COPY . .

RUN rm -rf node_modules

RUN npm install

RUN npm run build

RUN mkdir -p /var/salesInterface/html

RUN mv dist/* /var/salesInterface/html

WORKDIR /

RUN rm -rf /tmp/salesInterface