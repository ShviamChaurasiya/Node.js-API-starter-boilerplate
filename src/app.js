// File: src/app.js
const express = require('express');
const app = express();

const apiRoutes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use('/api/v1', apiRoutes);
app.use(errorHandler);

module.exports = app;