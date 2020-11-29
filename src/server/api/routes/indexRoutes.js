const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const apiHealthCheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now()
  };

  try {
    res.status(200).send(apiHealthCheck);
  } catch (err) {
    apiHealthCheck.message = err;
    res.status(503).send();
  }
});

module.exports = router;
