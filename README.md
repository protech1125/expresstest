# Simple File Upload API

## Setup

Run command to install packages.

```
npm install
```

After installing npm packages, you can run commands below.

```
npm start               // run app locally.
npm start:dev          // run app by nodemon locally, automatically restart app if any file changes
npm start:docker        //  build and run app in development mode inside docker container.
npm stop:docker         //  stop and remove containers created by start:docker.
npm start:docker-prod   // build and run app on docker container in production mode.
npm stop:docker-prod    // stop and remove containers created by start:docker-prod.
```

## APIs

```
GET http://localhost:3000/api/v1/files
GET http://localhost:3000/api/vi/files/:id
POST http://localhost:3000/api/v1/files/upload
```
