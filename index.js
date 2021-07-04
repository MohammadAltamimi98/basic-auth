'use strict';
require('dotenv').config();
const server = require('src/server');
const mongoose = require('mongoose');
const PORT = process.env.port || 8000;
const URI= process.env.MONGODB_URI;


mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => {
    server.start(PORT)
  })
  .catch(e => {
    console.error('Could not start server', e.message);
  });