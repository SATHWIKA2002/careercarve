import React, { useState, useEffect } from "react";
import axios from "axios";

function MentorList() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/mentors")
      .then((response) => setMentors(response.data))
      .catch((error) => console.error("Error fetching mentors:", error));
  }, []);

  return (
    <div>
      <h2>Available Mentors</h2>
      <ul>
        {mentors.map((mentor) => (
          <li key={mentor.id}>
            {mentor.name} - {mentor.areas_of_expertise}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MentorList;
