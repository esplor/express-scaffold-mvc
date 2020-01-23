require('dotenv').config();
const debug = require('debug')('app:server');
const server = require('./app');
const utils = require('./utils');

port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(
    `EXPRESS: Server listening on port ${port} in ${process.env.NODE_ENV} mode.`
  );
  // Connect to mongodb.
  utils.connectMongo();
});
