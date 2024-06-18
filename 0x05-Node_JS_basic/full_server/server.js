const express = require('express');
const app = express();

// Import routes
const routes = require('./routes');

app.use(routes);

app.listen(1245);

module.exports = app;
