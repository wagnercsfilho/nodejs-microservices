const mongoose = require('mongoose');
const server = require('./server/server');
mongoose.connect('mongodb://mongo:27017/microservico');
server();
