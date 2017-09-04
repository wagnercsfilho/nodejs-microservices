FROM node:8.4.0

RUN npm install nodemon -g

ENV HOME=/home/api

WORKDIR $HOME

COPY package.json $HOME

RUN npm install

COPY . $HOME

EXPOSE 4000

CMD ["nodemon", "./src"]



