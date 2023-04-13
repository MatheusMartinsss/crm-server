FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm i -g sequelize-cli
RUN apk add --no-cache --virtual  .gyp \
        python3 \
        make \
        g++ \
    && npm install bcrypt \
    && apk del .gyp

COPY . .

ENV PORT $PORT
EXPOSE $PORT

