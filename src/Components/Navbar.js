import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-dark text-white">
      <a className="navbar-brand" href="/">Home</a>
      <div className="navbar-nav">
        <a className="nav-link" href="/dashboard">Dashboard</a>
        <a className="nav-link" href="/booking">Booking</a>
        <a className="nav-link" href="/wallet">Wallet</a>
        <a className="nav-link" href="/parking-space">Parking Space</a>
      </div>
    </nav>
  );
}

export default Navbar