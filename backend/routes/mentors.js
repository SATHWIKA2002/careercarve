const express = require("express");
const router = express.Router();
const db = require("../models/mentor");

router.get("/", (req, res) => {
  db.all("SELECT * FROM mentors", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

module.exports = router;
