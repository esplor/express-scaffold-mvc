require('dotenv').config();
const server = require('./app');

port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server started on ${port} in ${process.env.NODE_ENV} mode.`);
  // connect to mongoose.
});
