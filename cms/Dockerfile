FROM node:14.17.1-buster-slim

WORKDIR /app

COPY ./package.json /app/

RUN yarn install

COPY . /app/

EXPOSE 1337

CMD [ "yarn", "develop" ]
