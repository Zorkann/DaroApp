FROM node:latest

RUN mkdir frontend

WORKDIR frontend

COPY app/package.json .

RUN yarn

COPY app .

CMD [ "yarn", "start" ]

EXPOSE 3000
