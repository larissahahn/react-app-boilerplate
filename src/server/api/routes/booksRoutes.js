const express = require('express');
const router = express.Router();
const axios = require('axios');
const { API_URL } = process.env;
const { MOCK_DATA } = process.env;

router.get('/', (req, res, next) => {
  if (MOCK_DATA) {
    const mockData = {
      data: [
        { bookId: 7, bookTitle: 'My Book Title' },
        { bookId: 8, bookTitle: 'My Book Title' }
      ]
    };

    try {
      res.json(mockData);
    } catch (e) {
      mockData.message = e;
      res.status(503).send();
    }
  }

  if (!MOCK_DATA) {
    axios
      .get(`${API_URL}/books`)
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
