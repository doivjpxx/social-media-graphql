const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: String,
    password: String,
    email: String,
    createdAt: String,
  },
  {
    versionKey: false,
  }
);

module.exports = model('User', userSchema);
