const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("mydatabase.db");

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY,
      student_id INTEGER,
      mentor_id INTEGER,
      booking_time TEXT,
      duration INTEGER,
      status TEXT,
      FOREIGN KEY(student_id) REFERENCES students(id),
      FOREIGN KEY(mentor_id) REFERENCES mentors(id)
    )`,
    (err) => {
      if (err) {
        console.error("Error creating bookings table:", err.message);
      } else {
        console.log("Bookings table created or already exists.");
      }
    }
  );
});

module.exports = db;
