const express = require('express');
const app = express();
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');
const api = require('../api/api');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(compression());

module.exports = (context) => {
  api(app, context);
  return new Promise((resolve, reject) => {
    const server = app.listen(context.port, (s) => {
      resolve(server);
    });
  });
}
