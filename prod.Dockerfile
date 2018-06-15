FROM node:latest

MAINTAINER Chuanguang Wang

ENV NODE_ENV=production PROT=3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install --production
COPY . /usr/src/app
EXPOSE $PORT

CMD ["npm", "run", "start:prod", "--production"]