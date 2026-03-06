const express = require('express')
const router = express.Router();

//GET
router.get('/', (req, res) => {
  // When browser calls GET /api/books, this runs
  res.json([...books]);
});

//POST
router.post('/', (req, res) => {
  // When browser calls POST /api/books, this runs
  const newBook = req.body;
  // store it
  res.json(newBook);
});

module.exports = router;