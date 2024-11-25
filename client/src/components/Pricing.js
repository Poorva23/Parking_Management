
import React, { useState, useEffect } from "react";
import "../styles/Pricing.css";

const Pricing = () => {
  const [pricingPlans, setPricingPlans] = useState([]);
  const [vehicleType, setVehicleType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [calculatedPrice, setCalculatedPrice] = useState(null);

  useEffect(() => {
    fetch("/api/pricing")
      .then((response) => response.json())
      .then((data) => setPricingPlans(data))
      .catch((error) => console.error("Error fetching pricing data:", error));
  }, []);

  const handleVehicleTypeChange = (e) => {
    setVehicleType(e.target.value);
    calculatePrice(e.target.value, fuelType);
  };

  const handleFuelTypeChange = (e) => {
    setFuelType(e.target.value);
    calculatePrice(vehicleType, e.target.value);
  };

  const calculatePrice = (vehicle, fuel) => {
    if (!vehicle || !fuel) {
      setCalculatedPrice(null);
      return;
    }

    // Example price logic
    const basePrices = {
      "2": 10,
      "3": 15,
      "4": 20,
    };

    const fuelMultiplier = {
      petrol: 1,
      diesel: 1.2,
      electric: 0.8,
    };

    const price = basePrices[vehicle] * fuelMultiplier[fuel];
    setCalculatedPrice(price.toFixed(2));
  };

  return (
    <div className="pricing-page">
      <h1>Our Pricing Plans</h1>
      <div className="vehicle-selection">
        <h2>Select Your Vehicle</h2>
        <label htmlFor="vehicleType">Vehicle Type</label>
        <select id="vehicleType" onChange={handleVehicleTypeChange}>
          <option value="">Select Type</option>
          <option value="2">2 Wheeler</option>
          <option value="3">3 Wheeler</option>
          <option value="4">4 Wheeler</option>
        </select>
        <label htmlFor="fuelType">Fuel Type</label>
        <select id="fuelType" onChange={handleFuelTypeChange}>
          <option value="">Select Fuel Type</option>
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="electric">Electric</option>
        </select>
        <div className="calculated-price">
          <strong>Calculated Price</strong>
          <p>{calculatedPrice ? `$${calculatedPrice}` : "Select options to see price"}</p>
        </div>
      </div>
      <div className="pricing">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="pricing-plan">
            <h2>{plan.plan}</h2>
            <p>${plan.price}/month</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button>Sign Up</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;