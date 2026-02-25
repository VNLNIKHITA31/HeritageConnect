import React, { useEffect, useState } from "react";
import "../App.css";

function Achievements() {

  const [stats, setStats] = useState({
    visits: 0,
    favorites: 0,
    wishlist: 0
  });

  useEffect(() => {
    const journey = JSON.parse(localStorage.getItem("journey")) || [];
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    setStats({
      visits: journey.length,
      favorites: favorites.length,
      wishlist: wishlist.length
    });
  }, []);

  return (
    <div className="page-container">
      <h1>My Cultural Achievements</h1>

      <div className="cards-container">

        <div className="card">
          <h3>🏛 Explorer</h3>
          <p>Visited {stats.visits} Places</p>
        </div>

        <div className="card">
          <h3>❤️ Heritage Lover</h3>
          <p>{stats.favorites} Favorites Added</p>
        </div>

        <div className="card">
          <h3>🌍 Dream Traveler</h3>
          <p>{stats.wishlist} Places in Wishlist</p>
        </div>

      </div>
    </div>
  );
}

export default Achievements;