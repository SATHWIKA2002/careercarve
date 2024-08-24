const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("mydatabase.db");

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY, name TEXT, availability TEXT, area_of_interest TEXT)",
    (err) => {
      if (err) {
        console.error("Error creating students table:", err.message);
      } else {
        console.log("Students table created or already exists.");
      }
    }
  );
});

module.exports = db;
