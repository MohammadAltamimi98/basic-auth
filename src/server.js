'use strict';

// ==================== EXPRESS PREP ==================== //
const express = require('express');
const app = express();

// ==================== ROUTES ==================== //
const logger = require('./middleware/logger');
const { userRouter } = require('./routes/user');

// ==================== APP.USE ==================== //

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(userRouter)

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => console.log(`server up on http://localhost:${port}`));
  }
}