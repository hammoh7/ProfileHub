const express = require('express');
const router = express.Router();
const { verifyToken } = require('./auth');

router.get('/profile', verifyToken, (req, res) => {
  // Only authenticated users can access this route
  res.json({ message: 'User profile data' });
});

module.exports = router;