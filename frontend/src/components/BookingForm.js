import React, { useState, useEffect } from "react";
import axios from "axios";

function BookingForm() {
  const [mentors, setMentors] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState("");
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/mentors")
      .then((response) => setMentors(response.data))
      .catch((error) => console.error("Error fetching mentors:", error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/bookings", {
        student_id: 1, // Hardcoded for simplicity
        mentor_id: selectedMentor,
        booking_time: new Date().toISOString(),
        duration,
        status: "pending",
      })
      .then((response) => alert("Booking created with ID: " + response.data.id))
      .catch((error) => console.error("Error creating booking:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mentor:
        <select
          onChange={(e) => setSelectedMentor(e.target.value)}
          value={selectedMentor}
        >
          {mentors.map((mentor) => (
            <option key={mentor.id} value={mentor.id}>
              {mentor.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Duration (minutes):
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </label>
      <button type="submit">Book</button>
    </form>
  );
}

export default BookingForm;
