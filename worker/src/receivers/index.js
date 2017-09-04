const constants = require('../config/constants');
const debitarReceiver = require('./debitar.receiver');
const estatisticaReceiver = require('./estatistica.receiver');

const consume = (ch, q, fn) => {
    ch.assertQueue(q, { durable: true });
    ch.consume(q, (msg) => fn(msg, ch));
}

module.exports = (ch) => {
    ch.prefetch(1);
    consume(ch, constants.DEC_CPC_ACCOUNT, debitarReceiver);
    consume(ch, constants.INC_COUNT_CLICK_AD, estatisticaReceiver);
}