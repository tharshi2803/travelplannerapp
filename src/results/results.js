import React, { useState } from "react";
import "./results.css";

const destinations = [
  { id: 1, title: "Mountain Escape", subtitle: "5 Days • 2025", img: "https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", category: "Nature" },
  { id: 2, title: "City Lights", subtitle: "3 Days • 2025", img: "https://images.pexels.com/photos/1785001/pexels-photo-1785001.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", category: "City" },
  { id: 3, title: "Golden Sunset", subtitle: "Weekend", img: "https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", category: "Beach" },
  { id: 4, title: "Beach Paradise", subtitle: "7 Days • 2024", img: "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", category: "Beach" },
  { id: 5, title: "Tropical Forest", subtitle: "4 Days • 2024", img: "https://images.pexels.com/photos/254431/pexels-photo-254431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", category: "Nature" },
  { id: 6, title: "Desert Adventure", subtitle: "6 Days • 2025", img: "https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", category: "Adventure" },
];

function Results() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? destinations : destinations.filter(d => d.category === filter);

  return (
    <div className="results-page">
      <div className="background"></div>
      <div className="background-texture"></div>

      <section className="results">
        <h2 className="results-title">Explore Destinations</h2>

        <div className="filter-buttons">
          {["All", "Beach", "City", "Nature", "Adventure"].map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="results-grid">
          {filtered.map((item, i) => (
            <div key={item.id} className="result-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <img src={item.img} alt={item.title} className="card-img" />
              <div className="card-overlay">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Results;
