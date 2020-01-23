const debug = require('debug')('app:utils');
const mongoose = require('mongoose');

exports.isProdMode = process.env.NODE_ENV === 'production' ? true : false;

/** PASTE ATLAS CONFIG TO ENV */
exports.connectMongo = () => {
  const mongoUri = process.env.MONGO_URI.replace(
    '<username>',
    process.env.MONGO_USER
  )
    .replace('<password>', process.env.MONGO_PASSWORD)
    .replace('<mongo_db>', process.env.MONGO_DB);
  debug(`Connecting to:\n${mongoUri}`);
  mongoose
    .connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 5000
    })
    .then(console.log(`MONGODB: Successfully connected to DB`))
    .catch(err => console.log(`${err}`));
};
