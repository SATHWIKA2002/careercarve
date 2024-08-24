const express = require("express");
const router = express.Router();
const db = require("../models/booking");

router.post("/", (req, res) => {
  const { student_id, mentor_id, booking_time, duration, status } = req.body;
  db.run(
    "INSERT INTO bookings (student_id, mentor_id, booking_time, duration, status) VALUES (?, ?, ?, ?, ?)",
    [student_id, mentor_id, booking_time, duration, status],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: this.lastID });
    }
  );
});

router.get("/", (req, res) => {
  db.all("SELECT * FROM bookings", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

module.exports = router;
