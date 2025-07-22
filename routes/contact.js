const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All required fields must be filled' });
  }

  console.log('Received Contact Form:', { name, email, phone, message });

  return res.status(200).json({ success: true, message: 'Message received successfully!' });
});

module.exports = router;