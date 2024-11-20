import React from 'react'

const Body = () => {
  return (
    <div className="container">
      <h1>Welcome to the Parking Management System</h1>
      <p>This is the body of the application. Here you can manage and view parking spaces.</p>
      <div className="row">
        <div className="col">
          <h3>Parking Spaces</h3>
          <ul>
            <li>Space 1</li>
            <li>Space 2</li>
            <li>Space 3</li>
            <li>Space 4</li>
            <li>Space 5</li>
          </ul>
        </div>
        <div className="col">
          <h3>Bookings</h3>
          <ul>
            <li>Booking 1</li>
            <li>Booking 2</li>
            <li>Booking 3</li>
            <li>Booking 4</li>
            <li>Booking 5</li>
          </ul>
        </div>
        <div className="col">
          <h3>Wallet</h3>
          <ul>
            <li>Wallet 1</li>
            <li>Wallet 2</li>
            <li>Wallet 3</li>
            <li>Wallet 4</li>
            <li>Wallet 5</li>
          </ul>
        </div>
      </div>
    </div>
  )
}


export default Body

