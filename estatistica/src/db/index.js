const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/microservico');

const Account = require('../models/account.model');
const Ad = require('../models/ad.model');

module.exports = async () => {
  await Account.remove();
  await Ad.remove();

  const account = await Account.create({
    name: 'Acme Enterprise',
    amount: 100,
  });

  const ad = await Ad.create({
    account_id: account._id,
    name: "Ad test",
    cpc: 0.35,
  });

  return;
}
