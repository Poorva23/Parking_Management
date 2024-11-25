// src/components/Pricing.js
import React, { useState } from 'react';

const Pricing = () => {
  const [vehicleType, setVehicleType] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [price, setPrice] = useState(null);

  // Function to calculate price based on selections
  const calculatePrice = () => {
    if (fuelType === 'Electric') {
      setPrice(0); // Electric vehicles are free
    } else {
      switch (vehicleType) {
        case '2-wheeler':
          setPrice(20);
          break;
        case '3-wheeler':
          setPrice(30);
          break;
        case '4-wheeler':
          setPrice(40);
          break;
        default:
          setPrice(null);
      }
    }
  };

  return (
    <div className="pricing">
      <h1>Vehicle Parking Pricing</h1>

      {/* Vehicle Type Dropdown */}
      <div>
        <label htmlFor="vehicleType">Select Vehicle Type:</label>
        <select
          id="vehicleType"
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
        >
          <option value="">--Select--</option>
          <option value="2-wheeler">2-Wheeler</option>
          <option value="3-wheeler">3-Wheeler</option>
          <option value="4-wheeler">4-Wheeler</option>
        </select>
      </div>

      {/* Fuel Type Dropdown */}
      <div>
        <label htmlFor="fuelType">Select Fuel Type:</label>
        <select
          id="fuelType"
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
        >
          <option value="">--Select--</option>
          <option value="Petrol">Petrol</option>
          <option value="CNG">CNG</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>
      </div>

      {/* Calculate Button */}
      <div>
        <button onClick={calculatePrice}>Calculate Price</button>
      </div>

      {/* Display Price */}
      {price !== null && (
        <div className="price-display">
          {price === 0 ? (
            <h2>Parking is free for Electric vehicles!</h2>
          ) : (
            <h2>The parking price is: ${price}</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default Pricing;
