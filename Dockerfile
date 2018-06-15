FROM node:latest

MAINTAINER Chuanguang Wang

ENV NODE_ENV=development PROT=3000

WORKDIR /usr/src/app
RUN npm install
EXPOSE $PORT

CMD ["npm", "run", "start:dev"]