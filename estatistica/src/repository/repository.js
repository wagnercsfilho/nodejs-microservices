const Ad = require('../models/ad.model');

const adIncCountClick = (adId) => {
  const $inc = { $inc: { count_clicks: 1 } };
  const $new = { $new: true };
  return Ad.findByIdAndUpdate(adId, $inc, $new);
}

const repository = {
  adIncCountClick,
};

module.exports = repository;
