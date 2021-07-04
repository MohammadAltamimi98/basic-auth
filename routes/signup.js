'use strict';
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const base64 = require('base-64');


const User = require('../models/user');




app.post('/signup', async (req, res) => {

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = new Users(req.body);
    const record = await user.save(req.body);
    res.status(200).json(record);
  } catch (e) { res.status(403).send("Error Creating User"); }
});


module.exports = router;