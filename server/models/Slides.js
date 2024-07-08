const mongoose = require('mongoose');

const SlidesSchema = new mongoose.Schema({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false 
  },
  isMap: {
    type: Boolean,
    required: false
  }
});

module.exports = mongoose.model('Slides', SlidesSchema);

