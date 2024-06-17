const mongoose = require('mongoose');

const ConsultationRequestSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ConsultationRequest', ConsultationRequestSchema);