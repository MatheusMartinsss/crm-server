FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN apk add --no-cache --virtual  .gyp \
        python3 \
        make \
        g++ \
    && npm install bcrypt \
    && apk del .gyp

COPY . .

RUN npm sequelize db:migrate

EXPOSE 8080

CMD ["npm", "start"]