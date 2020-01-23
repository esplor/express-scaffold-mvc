const express = require('express');
const utils = require('./utils');

/** Import routes */
const rootRoutes = require('./routes/rootRouter');

/** Initialize express */
const app = express();

/** Set view engine */
app.set('view engine', 'pug');

/** Middlewares */
app.use(express.json());

/** Routes */
app.use('/api/v1/', rootRoutes);

// Undefined routes
app.use('*', (req, res) => {
  res.status(404).render('404');
});

module.exports = app;
