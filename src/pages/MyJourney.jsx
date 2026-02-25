import React, { useState, useEffect } from "react";
import "../App.css";

function MyJourney() {

  const [visits, setVisits] = useState([]);
  const [place, setPlace] = useState("");
  const [rating, setRating] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("journey")) || [];
    setVisits(stored);
  }, []);

  const addVisit = () => {
    if (!place) return;

    const newVisit = {
      id: Date.now(),
      place,
      rating,
      note
    };

    const updated = [newVisit, ...visits];
    setVisits(updated);
    localStorage.setItem("journey", JSON.stringify(updated));

    setPlace("");
    setRating("");
    setNote("");
  };

  return (
    <div className="page-container">
      <h1>My Cultural Journey</h1>

      <div className="card">
        <input
          placeholder="Place Visited"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <input
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <textarea
          placeholder="Personal Notes"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button className="btn-primary" onClick={addVisit}>
          Add Visit
        </button>
      </div>

      {visits.map(v => (
        <div key={v.id} className="card">
          <h3>{v.place}</h3>
          <p>⭐ {v.rating}</p>
          <p>{v.note}</p>
        </div>
      ))}

    </div>
  );
}

export default MyJourney;