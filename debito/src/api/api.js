module.exports = (app, context) => {
  const repository = context.repository;

  const decCpcAccount = async (req, res) => {
    try {
      const adId = req.body.ad_id;
      if (!adId) return res.status(404).send('Ad Not Found');

      const ad = await repository.getAdById(adId);
      if (!ad) return res.status(404).send('Ad Not Found');

      const account = await repository.getAccountById(ad.account_id);
      if (!account) return res.status(404).send('Account Not Found');

      const result = await repository.decCpcAccount(account._id, ad.cpc);

      res.status(200).send({ amount: result.amount });
    } catch (e) {
      res.status(500).send(e)
    }
  }

  app.post('/api/dec-cpc-account', decCpcAccount);
}
