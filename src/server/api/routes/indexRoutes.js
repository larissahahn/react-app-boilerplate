const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now()
  };

  try {
    res.send(healthcheck);
  } catch (err) {
    healthcheck.message = err;
    res.status(503).send();
  }
});

module.exports = router;
