const amqp = require('amqplib');
const server = require('./server/server');
const send = require('./worker/send.worker');

amqp.connect('amqp://rabbitmq:5672')
  .then(conn => conn.createChannel())
  .then(ch => send(ch))
  .then(worker => server({ worker }))
  .then(() => {
    console.log('===== server iniciado =====');
  })
  .catch((e) => {
    console.error(e);
    throw e;
  });
