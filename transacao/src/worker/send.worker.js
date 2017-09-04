const helpers = require('../helpers');
const constants  = require('../config/constants');

const publish = async (ch, data) => {
  await Promise.all([
    ch.assertQueue(constants.DEC_CPC_ACCOUNT, { durable: true }),
    ch.assertQueue(constants.INC_COUNT_CLICK_AD, { durable: true }),
  ]);

  return await Promise.all([
    ch.sendToQueue(constants.DEC_CPC_ACCOUNT, helpers.objectToBuffer(data)),
    ch.sendToQueue(constants.INC_COUNT_CLICK_AD, helpers.objectToBuffer(data)),
  ]);
}

module.exports = (ch) => {
  return {
    adClickRequest: (data) => publish(ch, data)
  }
}
