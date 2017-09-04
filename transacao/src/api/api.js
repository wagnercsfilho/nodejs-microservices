const notFoundResponse = () => res.status(404).send('Ad Not Found');

module.exports = ({ app, worker }) => {
  const adClick = async (req, res) => {
    try {
      const adId = req.params.id;
      if (!adId) return notFoundResponse;
      await worker.adClickRequest({ ad_id: adId })
      res.status(200).send('ok');
    } catch (e) {
      res.status(500).send('Error');
    }

  }

  app.post('/api/ad/:id/click', adClick);
}
