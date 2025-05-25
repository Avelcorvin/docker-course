FROM node

WORKDIR /app/testserver

COPY package.json /app/testserver

RUN  npm install

COPY . . 

ENV PORT=4200

EXPOSE $PORT
VOLUME [ "/app/testserver/data" ]

CMD [ "npm","start" ]