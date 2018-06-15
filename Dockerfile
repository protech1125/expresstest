FROM node:latest

MAINTAINER Chuanguang Wang

WORKDIR /usr/src/app
RUN npm install
EXPOSE 3000

CMD ["npm", "start"]