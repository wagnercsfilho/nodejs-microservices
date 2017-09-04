const mongoose = require('mongoose');

module.exports = (cb) => {
  mongoose.connect('mongodb://mongo:27017/microservico');
  mongoose.connection.on('connected', () => {
    console.log('mongodb connected');
    cb(null, 'connected');
  });
  mongoose.connection.on('error', (err) => {
    console.log('mongodb error', err);
    cb(err, 'error');
  });
  mongoose.connection.on('disconnected', () => {
    console.log('mongodb disconnected');
    cb(null, 'disconnected');
  });
  process.on('SIGINT', () => {
    mongoose.connection.close(() => process.exit(0));
  });
}
