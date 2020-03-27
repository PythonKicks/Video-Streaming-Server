const express = require('express');
const app = express();

const testRoutes = require('./api/routes/test');

app.use('/test', testRoutes);

module.exports = app;
