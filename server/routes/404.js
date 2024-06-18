const express = require('express');
const router = express.Router();

router.get('*', async (req, res) => {
  try {
    return `<h1>404 Карл</h1>`;
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
