import React from 'react'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-sections">
        <section className="overview">
          <h2>Overview</h2>
          <p>Summary of your parking activities</p>
          {/* Add more overview details here */}
        </section>
        <section className="bookings">
          <h2>Bookings</h2>
          <ul>
            <li>Booking 1</li>
            <li>Booking 2</li>
            <li>Booking 3</li>
          </ul>
        </section>
        <section className="wallet">
          <h2>Wallet</h2>
          <p>Balance: $100</p>
          {/* Add wallet functionalities here */}
        </section>
        <section className="parking-spaces">
          <h2>Parking Spaces</h2>
          <ul>
            <li>Space A</li>
            <li>Space B</li>
            <li>Space C</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Dashboard
