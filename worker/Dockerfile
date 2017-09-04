FROM node:8.4.0

RUN npm install nodemon -g

ENV HOME=/home/worker

WORKDIR $HOME

COPY package.json $HOME

RUN npm install

COPY . $HOME

CMD ["nodemon", "./src"]
