const db = require('./db');
const server = require('./server/server');
const repository = require('./repository/repository');
const PORT = process.env.PORT;

db((err, status) => {
  if (status === 'connected') server({
    port: PORT,
    repository
  });
});
