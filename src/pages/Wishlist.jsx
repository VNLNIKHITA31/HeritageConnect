import React, { useState, useEffect } from "react";
import "../App.css";

function Wishlist() {

  const [wishlist, setWishlist] = useState([]);
  const [item, setItem] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(stored);
  }, []);

  const addItem = () => {
    if (!item) return;

    const updated = [...wishlist, item];
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    setItem("");
  };

  return (
    <div className="page-container">
      <h1>My Cultural Wishlist</h1>

      <div className="card">
        <input
          placeholder="Add Place to Visit"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button className="btn-primary" onClick={addItem}>
          Add
        </button>
      </div>

      {wishlist.map((wish, index) => (
        <div key={index} className="card">
          <h3>{wish}</h3>
        </div>
      ))}

    </div>
  );
}

export default Wishlist;