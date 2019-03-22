FROM node:latest

RUN mkdir frontend

WORKDIR frontend

COPY app/package.json .

RUN npm install

COPY app .

CMD [ "npm", "start" ]

EXPOSE 3000
