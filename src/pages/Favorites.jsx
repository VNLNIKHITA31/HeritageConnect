import React, { useState, useEffect } from "react";
import "../App.css";

function Favorites() {

  const [favorites, setFavorites] = useState([]);
  const [item, setItem] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  const addFavorite = () => {
    if (!item) return;

    const updated = [...favorites, item];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
    setItem("");
  };

  const removeFavorite = (index) => {
    const updated = favorites.filter((_, i) => i !== index);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="page-container">
      <h1>My Favorites</h1>

      <div className="card">
        <input
          placeholder="Add Favorite"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button className="btn-primary" onClick={addFavorite}>
          Add
        </button>
      </div>

      {favorites.map((fav, index) => (
        <div key={index} className="card">
          <h3>{fav}</h3>
          <button
            className="btn-primary"
            onClick={() => removeFavorite(index)}
          >
            Remove
          </button>
        </div>
      ))}

    </div>
  );
}

export default Favorites;