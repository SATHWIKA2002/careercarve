import React from "react";
import BookingForm from "./components/BookingForm";
import MentorList from "./components/MentorList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Mentor Booking System</h1>
      <BookingForm />
      <MentorList />
    </div>
  );
}

export default App;
