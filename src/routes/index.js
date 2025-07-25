// File: src/routes/index.js
const express = require('express');
const router = express.Router();

// Add your route modules here
// router.use('/users', require('./users'));

router.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'API is healthy' });
});

module.exports = router;