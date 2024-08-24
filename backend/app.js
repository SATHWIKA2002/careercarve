const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const mentorsRouter = require('./routes/mentors');
const studentsRouter = require('./routes/students');
const bookingsRouter = require('./routes/bookings');

app.use(cors());
app.use(bodyParser.json());

app.use('/mentors', mentorsRouter);
app.use('/students', studentsRouter);
app.use('/bookings', bookingsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
