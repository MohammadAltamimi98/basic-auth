'use strict';

const Users = require('../models/usersSchema');
const basic = require('../middleware/basic')
const bcrypt = require('bcrypt');

// ==================== EXPRESS ==================== //
const express = require('express');
const userRouter = express.Router()

// ==================== ROUTE TO CREATE AN ACCOUNT ==================== //
userRouter.post('/signup', async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 5);
    const user = new Users(req.body);
    const record = await user.save(req.body)
    res.status(200).json(record);
  } catch (error) { console.error(error); res.status(403).send("Error creating User"); }
});

// ==================== ROUTE TO LOGIN TO A CREATED ACCOUNT ==================== //
userRouter.post('/signin', basic, async (req, res) => {
  res.status(200).json(req.user);
});

module.exports = { userRouter };