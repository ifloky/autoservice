const express = require('express');
const router = express.Router();
const ConsultationRequest = require('../models/ConsultationRequest');

router.post('/', async (req, res) => {
  const consultationRequest = new ConsultationRequest({
    phone: req.body.phone
  });

  try {
    const newRequest = await consultationRequest.save();
    res.status(201).json(newRequest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const requests = await ConsultationRequest.find();
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
