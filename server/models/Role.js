const { Schema, model } = require('mongoose');

const Role = new Schema({
  value: {
    type: String,
    required: true,
    unique: true,
    default: "User"
  }
});

module.exports = model('Role', Role);

