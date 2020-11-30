const express = require('express');
const router = express.Router();
const axios = require('axios');
const { API_URL } = process.env;
const { MOCK_DATA } = process.env;

// User Routes
router.get('/', (req, res, next) => {
  if (MOCK_DATA) {
    const sampleUser = {
      data: [{
        auth: true, // mock signed in
        username: 'larissahahn',
        firstName: 'Larissa',
        lastName: 'Hahn',
        fullName: 'Larissa Hahn',
        avatar: '/images/avatar/1.png'
      }]
    };

    try {
      res.json(sampleUser);
    } catch (e) {
      sampleUser.message = e;
      res.status(503).send();
    }
  }

  if (!MOCK_DATA) {
    axios
      .get(`${API_URL}/user`)
      .then(function (res) {
        const response = res.status(200).json(res.data);
        res.send(response);
      })
      .catch(function (err) {
        res.send({
          statusCode: err.status,
          data: err.data,
          errorMsg: err.statusText
        });
      });
  }
});

module.exports = router;
