import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function Navbar() {

  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem("role");
    setUserRole(role);
  });

  const handleLogout = () => {
    localStorage.clear();
    setUserRole(null);
  };

  return (
    <nav className="navbar">
      <h2>Heritage Connect</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {!userRole && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Signup</Link>
          </>
        )}

        {userRole && (
          <>
            <Link
              to={
                userRole === "Admin"
                  ? "/admin"
                  : userRole === "Content Creator"
                  ? "/creator"
                  : userRole === "Tour Guide"
                  ? "/guide"
                  : "/profile"
              }
            >
              Dashboard
            </Link>

            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;