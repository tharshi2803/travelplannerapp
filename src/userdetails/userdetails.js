import React, { useState } from 'react';
import { Calendar, User, MapPin, Users, DollarSign, Hotel, Utensils, Plane, Bus, Train } from 'lucide-react';
import './userdetails.css';

export default function TravelPlannerApp() {
  const [currentPage, setCurrentPage] = useState('planning');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  
  const [formData, setFormData] = useState({
    budget: '',
    destination: '',
    travelers: '1',
    dateFrom: '',
    dateTo: '',
    travelModes: {
      flight: false,
      bus: false,
      train: false
    },
    hotelRating: '3',
    foodType: 'both'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Prevent same date selection
    if (name === "dateFrom" && value === formData.dateTo) {
      alert("From Date and To Date cannot be the same.");
      return;
    }

    if (name === "dateTo" && value === formData.dateFrom) {
      alert("To Date must be greater than From Date.");
      return;
    }

    // Prevent To Date < From Date
    if (name === "dateTo" && formData.dateFrom && value < formData.dateFrom) {
      alert("To Date cannot be earlier than From Date.");
      return;
    }

    // Prevent From Date > To Date
    if (name === "dateFrom" && formData.dateTo && value > formData.dateTo) {
      alert("From Date cannot be later than To Date.");
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTravelModeChange = (mode) => {
    setFormData(prev => ({
      ...prev,
      travelModes: {
        ...prev.travelModes,
        [mode]: !prev.travelModes[mode]
      }
    }));
  };

  const handleSignOut = () => {
    alert('Signing out...');
    setShowProfileMenu(false);
  };

  const handleFindTrips = () => {
    if (!formData.budget || !formData.destination || !formData.dateFrom || !formData.dateTo) {
      alert('Please fill in all required fields');
      return;
    }
    setCurrentPage('results');
  };

  if (currentPage === 'results') {
    return (
      <div className="page-container">
        <div className="results-container">
          <h1 className="results-title">Your Trip Details</h1>
          <div className="results-content">
            <p className="result-item"><strong>Destination:</strong> {formData.destination}</p>
            <p className="result-item"><strong>Budget:</strong> ${formData.budget}</p>
            <p className="result-item"><strong>Travelers:</strong> {formData.travelers}</p>
            <p className="result-item"><strong>Dates:</strong> {formData.dateFrom} to {formData.dateTo}</p>
            <p className="result-item"><strong>Travel Modes:</strong> {Object.keys(formData.travelModes).filter(k => formData.travelModes[k]).join(', ') || 'None selected'}</p>
            <p className="result-item"><strong>Hotel Rating:</strong> {formData.hotelRating} Stars</p>
            <p className="result-item"><strong>Food Preference:</strong> {formData.foodType}</p>
          </div>
          <button 
            onClick={() => setCurrentPage('planning')}
            className="back-button"
          >
            Back to Planning
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="header">
        <div className="header-content">
          <h1 className="header-title">Travel Planner</h1>
          <div className="profile-wrapper">
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="profile-button"
            >
              <User size={28} />
            </button>
            {showProfileMenu && (
              <div className="profile-menu">
                <button 
                  onClick={handleSignOut}
                  className="signout-button"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="form-container">
          <h2 className="form-title">Plan Your Perfect Trip</h2>
          
          <div className="form-fields">
            
            <div className="field-group">
              <label className="field-label">
                Budget
              </label>
              <input
                type="number"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                placeholder="Enter your budget"
                className="input-field"
             />
            </div>


            <div className="field-group">
              <label className="field-label">
                Destination
              </label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                placeholder="Enter destination city"
                className="input-field"
              />
            </div>


            <div className="field-group">
              <label className="field-label">
                <Users size={20} className="label-icon" />
                Number of Travelers
              </label>
              <select
                name="travelers"
                value={formData.travelers}
                onChange={handleInputChange}
                className="select-field"
              >
                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Traveler' : 'Travelers'}</option>
                ))}
              </select>
            </div>

            {/* FIXED DATE SECTION */}
            <div className="date-range-group" style={{ display: "flex", gap: "20px" }}>
              <div className="field-group">
                <label className="field-label">
                  <Calendar size={20} className="label-icon" />
                  From Date
                </label>
                <input
                  type="date"
                  name="dateFrom"
                  value={formData.dateFrom}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>

              <div className="field-group">
                <label className="field-label">
                  <Calendar size={20} className="label-icon" />
                  To Date
                </label>
                <input
                  type="date"
                  name="dateTo"
                  value={formData.dateTo}
                  min={formData.dateFrom}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
            </div>

            <div className="field-group">
              <label className="field-label-text">
                Travel Mode (Select Multiple)
              </label>
              <div className="travel-mode-buttons">
                <button
                  type="button"
                  onClick={() => handleTravelModeChange('flight')}
                  className={`mode-button ${formData.travelModes.flight ? 'mode-button-active' : ''}`}
                >
                  <Plane size={20} className="mode-icon" />
                  Flight
                </button>
                <button
                  type="button"
                  onClick={() => handleTravelModeChange('bus')}
                  className={`mode-button ${formData.travelModes.bus ? 'mode-button-active' : ''}`}
                >
                  <Bus size={20} className="mode-icon" />
                  Bus
                </button>
                <button
                  type="button"
                  onClick={() => handleTravelModeChange('train')}
                  className={`mode-button ${formData.travelModes.train ? 'mode-button-active' : ''}`}
                >
                  <Train size={20} className="mode-icon" />
                  Train
                </button>
              </div>
            </div>

            <div className="field-group">
              <label className="field-label">
                <Hotel size={20} className="label-icon" />
                Hotel Star Rating
              </label>
              <select
                name="hotelRating"
                value={formData.hotelRating}
                onChange={handleInputChange}
                className="select-field"
              >
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>

            <div className="field-group">
              <label className="field-label">
                <Utensils size={20} className="label-icon" />
                Food Preference
              </label>
              <select
                name="foodType"
                value={formData.foodType}
                onChange={handleInputChange}
                className="select-field"
              >
                <option value="veg">Vegetarian</option>
                <option value="nonveg">Non-Vegetarian</option>
                <option value="both">Both Veg & Non-Veg</option>
              </select>
            </div>

            <button
              onClick={handleFindTrips}
              className="find-button"
            >
              Find My Perfect Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
