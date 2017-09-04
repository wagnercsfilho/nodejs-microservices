const amqp = require('amqplib');
const receivers = require('./receivers');

amqp.connect('amqp://rabbitmq:5672')
    .then((conn) => {
        return conn;
    })
    .then(conn => conn.createChannel())
    .then((ch) => receivers(ch))
    .then(() => console.log('===== worker iniciado ====='))
    .catch((e) => {
        console.error(e);
        throw e;
    });