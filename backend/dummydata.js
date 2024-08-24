const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("mydatabase.db");

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY,
      name TEXT,
      availability TEXT,
      area_of_interest TEXT
    )`
  );

  db.run(
    `CREATE TABLE IF NOT EXISTS mentors (
      id INTEGER PRIMARY KEY,
      name TEXT,
      availability TEXT,
      areas_of_expertise TEXT,
      is_premium BOOLEAN
    )`
  );

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
    )`
  );

  db.run(
    `INSERT INTO students (name, availability, area_of_interest) VALUES ('John Doe', 'Weekdays', 'Mathematics')`
  );
  db.run(
    `INSERT INTO students (name, availability, area_of_interest) VALUES ('Jane Smith', 'Weekends', 'Science')`
  );

  db.run(
    `INSERT INTO mentors (name, availability, areas_of_expertise, is_premium) VALUES ('Dr. Brown', 'Weekdays', 'Mathematics', 1)`
  );
  db.run(
    `INSERT INTO mentors (name, availability, areas_of_expertise, is_premium) VALUES ('Prof. Green', 'Weekends', 'Science', 0)`
  );

  db.run(
    `INSERT INTO bookings (student_id, mentor_id, booking_time, duration, status) VALUES (1, 1, '2024-08-23 10:00', 60, 'Confirmed')`
  );
  db.run(
    `INSERT INTO bookings (student_id, mentor_id, booking_time, duration, status) VALUES (2, 2, '2024-08-24 14:00', 45, 'Pending')`
  );
});

db.close();
