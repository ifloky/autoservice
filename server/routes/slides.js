const express = require('express');
const router = express.Router();
const Slides = require('../models/Slides');


router.post('/', async (req, res) => {
  const slide = new Slides({
    src: req.body.src,
    alt: req.body.alt,
    title: req.body.title,
    text: req.body.text,
    link: req.body.link,
    isMap: req.body.isMap
  });

  try {
    const newSlide = await slide.save();
    res.status(201).json(newSlide);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const slides = await Slides.find();
    res.json(slides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const slide = await Slides.findByIdAndDelete(req.params.id);
    if (!slide) {
      return res.status(404).json({ message: 'Slide not found' });
    }
    res.status(200).json({ message: 'Slide deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
