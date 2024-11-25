// src/components/Pricing.js
import React, { useState, useEffect } from 'react';

const Pricing = () => {
  const [pricingPlans, setPricingPlans] = useState([]);

  useEffect(() => {
    fetch('/api/pricing')
      .then((response) => response.json())
      .then((data) => setPricingPlans(data))
      .catch((error) => console.error('Error fetching pricing data:', error));
  }, []);

  return (
    <div className="pricing">
      <h1>Our Pricing Plans</h1>
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
  );
};

export default Pricing;
