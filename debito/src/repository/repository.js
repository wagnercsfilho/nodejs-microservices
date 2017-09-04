const Account = require('../models/account.model');
const Ad = require('../models/ad.model');

const getAdById = (adId) => {
  return Ad.findById(adId);
}

const getAccountById = (accountId) => {
  return Account.findById(accountId);
}

const decCpcAccount = (accountId, cpc) => {
  const $dec = { $inc: { amount: -cpc } };
  const $new = { $new: true };
  return Account.findByIdAndUpdate(accountId, $dec, $new);
}

const repository = {
  getAdById,
  getAccountById,
  decCpcAccount,
};

module.exports = repository;
