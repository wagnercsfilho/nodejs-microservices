const repository = require('../repository/repository');

const adClick = async (req, res) => {
  try {
    const adId = req.body.ad_id;
    if (!adId) return res.status(404).send('Ad Not Found');
    const result = await repository.adIncCountClick(adId);
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send(e.message);
  }
}

module.exports = (app) => {
  app.post('/api/inc-click-ad', adClick);
}
