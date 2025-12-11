import React from "react";
import { useLocation } from "react-router-dom";
import "./results.css";

function Results({ backendData, goBack }) {
  const plan = backendData;

  if (!plan) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading travel plan...</p>
      </div>
    );
  }


  return (
    <div className="travel-plan-container">
      <h1>🧳 Your Travel Plan</h1>

      <div className="card budget-card">
        <div className="icon">💰</div>
        <h2>Budget Overview</h2>
        <p>Total Budget: £{plan.budget}</p>
        <p>Food Cost: £{plan.food_cost}</p>
        <p>Total Estimated Cost: £{plan.total_estimated_cost}</p>
      </div>

      <div className="card hotel-card">
        <div className="icon">🏨</div>
        <h2>Hotel</h2>
        <p>Name: {plan.hotel.hotel_name}</p>
        <p>Star Rating: {plan.hotel.star_rating} ⭐</p>
        <p>Total Price: £{plan.hotel.total_price} {plan.hotel.currency}</p>
      </div>

      <div className="card transport-card">
        <div className="icon">🚌</div>
        <h2>Transport</h2>
        <p>{plan.transport.type} from {plan.transport.origin} → {plan.transport.destination}</p>
        <p>Provider: {plan.transport.provider}</p>
        <p>Departure: {new Date(plan.transport.departure_time).toLocaleString()}</p>
        <p>Price: £{plan.transport.total_price} {plan.transport.currency}</p>
      </div>

      <div className="card itinerary-card">
        <h2>Recommended Itinerary</h2>
        <pre>{plan.recommended_itinerary}</pre>
      </div>

      {plan.restaurants?.length > 0 && (
        <div className="card restaurants-card">
          <div className="icon">🍴</div>
          <h2>Restaurants</h2>
          <ul>
            {plan.restaurants.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Results;
