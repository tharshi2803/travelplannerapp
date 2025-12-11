import React, { useState } from 'react';
import { Calendar, User, MapPin, Users, DollarSign, Hotel, Utensils, Plane, Bus, Train, Globe } from 'lucide-react';
import './userdetails.css';
import Results from '../results/results';

export default function TravelPlannerApp() {
  const [currentPage, setCurrentPage] = useState('planning');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showCurrencyMenu, setShowCurrencyMenu] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD - United States Dollar');

  const [backendData, setBackendData] = useState(null); // store results

  const currencies = [/* --- your LONG list unchanged --- */];

  const [formData, setFormData] = useState({
    budget: '',
    from: '',
    destination: '',
    travelers: '',
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

    if (name === 'from' && value && !/^[a-zA-Z\s]*$/.test(value)) {
      alert('Only strings are accepted for From field');
      return;
    }

    if (name === 'destination' && value && !/^[a-zA-Z\s]*$/.test(value)) {
      alert('Only strings are accepted for Destination field');
      return;
    }

    if (name === 'travelers' && value && !/^\d*$/.test(value)) {
      alert('Only numbers are accepted for Number of Travelers');
      return;
    }

    if (name === "dateFrom" && value === formData.dateTo) {
      alert("From Date and To Date cannot be the same.");
      return;
    }

    if (name === "dateTo" && value === formData.dateFrom) {
      alert("To Date must be greater than From Date.");
      return;
    }

    if (name === "dateTo" && formData.dateFrom && value < formData.dateFrom) {
      alert("To Date cannot be earlier than From Date.");
      return;
    }

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

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setShowCurrencyMenu(false);
  };

  // ⭐ FIX — EXACT SAME BODY AS POSTMAN
  const handleFindTrips = async () => {
    if (!formData.budget || !formData.from || !formData.destination || !formData.travelers || !formData.dateFrom || !formData.dateTo) {
      alert('Please fill in all required fields');
      return;
    }

    const requestBody = {
      budget: formData.budget,
      from: formData.from,
      destination: formData.destination,
      number_of_travellers: formData.travelers,
      date_from: formData.dateFrom,
      date_to: formData.dateTo,
      travel_mode: Object.keys(formData.travelModes).filter(k => formData.travelModes[k]),
      hotel: formData.hotelRating,
      food_preferences: formData.foodType
    };

    try {
      const res = await fetch("http://127.0.0.1:5000/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody)
      });

      if (!res.ok) {
        alert("Backend error");
        return;
      }

      const data = await res.json();
      setBackendData(data);
      setCurrentPage("results");

    } catch (err) {
      alert("Unable to fetch trips. Check backend");
    }
  };

  // ⭐ RESULTS PAGE
  if (currentPage === 'results') {
    return (
      <Results
        formData={formData}
        currency={selectedCurrency}
        backendData={backendData}
        goBack={() => setCurrentPage('planning')}
      />
    );
  }

  // ⭐ YOUR ORIGINAL FULL UI (UNCHANGED)
  return (
    <div className="page-container">
      <div className="header">
        <div className="header-content">
          <h1 className="header-title">Travel Planner</h1>
          <div className="header-right">
            <div className="currency-wrapper">
              <button
                onClick={() => {
                  setShowCurrencyMenu(!showCurrencyMenu);
                  setShowProfileMenu(false);
                }}
                className="currency-button"
              >
                <Globe size={28} />
              </button>
              {showCurrencyMenu && (
                <div className="currency-menu">
                  <div className="currency-menu-header">Select Currency</div>
                  <div className="currency-list">
                    {currencies.map((currency) => (
                      <button
                        key={currency}
                        onClick={() => handleCurrencySelect(currency)}
                        className={`currency-item ${selectedCurrency === currency ? 'currency-item-active' : ''}`}
                      >
                        {currency}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="profile-wrapper">
              <button
                onClick={() => {
                  setShowProfileMenu(!showProfileMenu);
                  setShowCurrencyMenu(false);
                }}
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
      </div>

      {/* ------ MAIN CONTENT ---------- */}
      <div className="main-content">
        <div className="form-container">
          <h2 className="form-title">Plan Your Perfect Trip</h2>

          <div className="form-fields">

            {/* *** your entire UI stays exactly the same *** */}

            <div className="field-group">
              <label className="field-label">
                <DollarSign size={20} className="label-icon" />
                Budget ({selectedCurrency.split(' - ')[0]})
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
                <MapPin size={20} className="label-icon" />
                From
              </label>
              <input
                type="text"
                name="from"
                value={formData.from}
                onChange={handleInputChange}
                placeholder="Enter origin city"
                className="input-field"
              />
            </div>

            <div className="field-group">
              <label className="field-label">
                <MapPin size={20} className="label-icon" />
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
              <input
                type="text"
                name="travelers"
                value={formData.travelers}
                onChange={handleInputChange}
                placeholder="Enter number of travelers"
                className="input-field"
              />
            </div>

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
