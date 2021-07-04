'use strict';

//==========third part dependencies==========// 
require('dotenv').config();
const mongoose = require('mongoose');



//==========testing ports==========// 
const port = process.env.PORT || 8000;

const server = require('./src/server');
const URI = process.env.MONGODB_URI;



//==========START UP SERVER==========// 

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => {
    server.start(port)
  })
  .catch(e => {
    console.error('Could not start server', e.message);
  });