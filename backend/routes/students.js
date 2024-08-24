const express = require('express');
const router = express.Router();
const db = require('../models/student');

router.get('/', (req, res) => {
  db.all('SELECT * FROM students', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

module.exports = router;
