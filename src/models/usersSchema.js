'use strict';

// ==================== 3RD PARTY DEPENDENCIES ==================== //

const mongoose = require('mongoose');

// ==================== MONGOOSE SCHEMA ==================== //
const usersSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});
const Users = mongoose.model('users', usersSchema);



module.exports = Users;