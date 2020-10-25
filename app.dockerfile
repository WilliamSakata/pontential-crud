FROM node:alpine

WORKDIR /user/app

COPY ./ ./

COPY ["package.json", "./"]

RUN npm install

EXPOSE 3000

CMD npm test && npm start