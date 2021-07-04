'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.urlencoded({ extended: true }));


app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
  res.send('it is working!');
});




// app.use('*',notFoundHandler);
// app.use(errorHandler)


module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log(`up and running on ${port}`));
  },
};