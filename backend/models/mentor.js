const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("mydatabase.db");

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS mentors (id INTEGER PRIMARY KEY, name TEXT, availability TEXT, areas_of_expertise TEXT, is_premium BOOLEAN)",
    (err) => {
      if (err) {
        console.error("Error creating table:", err.message);
      } else {
        console.log("Table created or already exists.");
      }
    }
  );
});

module.exports = db;
