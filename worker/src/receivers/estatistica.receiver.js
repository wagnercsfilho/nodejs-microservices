const axios = require('axios');
const helpers = require('../helpers');
const constants = require('../config/constants');

const incClickAdRequest = (ad) => axios.post(constants.ESTATISTICA_URI, ad);

module.exports = async (msg, ch) => {
    try {
        const ad = helpers.bufferToObject(msg.content);
        await incClickAdRequest(ad);
        ch.ack(msg)
    } catch (e) {
        ch.nack(msg);
    }
};
