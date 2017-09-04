const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adSchema = new Schema({
  name: String,
  cpc: Number,
  count_clicks: { type: Number, default: 0 },
  account_id: { type: Schema.Types.ObjectId, ref: 'Account' }
});

module.exports = mongoose.model('Ad', adSchema);
