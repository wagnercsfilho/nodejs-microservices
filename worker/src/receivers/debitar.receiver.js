const axios = require('axios');
const helpers = require('../helpers');
const constants = require('../config/constants');

const decCpcAccountRequest = (ad) => axios.post(constants.DEBITO_URI, ad)

module.exports = async (msg, ch) => {
    try {
        const ad = helpers.bufferToObject(msg.content);
        await decCpcAccountRequest(ad);
        ch.ack(msg);
    } catch (e) {
        ch.nack(msg);
    }
};
