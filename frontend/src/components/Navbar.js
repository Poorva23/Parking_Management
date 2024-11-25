import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#333", color: "white" }}>
      <Link to="/" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/login" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Login</Link>
      <Link to="/signup" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Signup</Link>
      <Link to="/dashboard" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Dashboard</Link>
    </nav>
  );
};

export default Navbar;
