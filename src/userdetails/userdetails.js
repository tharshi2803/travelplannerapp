import React, { useState } from 'react';
import { Calendar, User, MapPin, Users, DollarSign, Hotel, Utensils, Plane, Bus, Train, Globe } from 'lucide-react';
import './userdetails.css';

export default function TravelPlannerApp() {
  const [currentPage, setCurrentPage] = useState('planning');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showCurrencyMenu, setShowCurrencyMenu] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD - United States Dollar');
  
  const currencies = [
    'AED - United Arab Emirates Dirham',
    'AFN - Afghanistan Afghani',
    'ALL - Albania Lek',
    'AMD - Armenia Dram',
    'ANG - Netherlands Antilles Guilder',
    'AOA - Angola Kwanza',
    'ARS - Argentina Peso',
    'AUD - Australia Dollar',
    'AWG - Aruba Guilder',
    'AZN - Azerbaijan Manat',
    'BAM - Bosnia and Herzegovina Convertible Mark',
    'BBD - Barbados Dollar',
    'BDT - Bangladesh Taka',
    'BGN - Bulgaria Lev',
    'BHD - Bahrain Dinar',
    'BIF - Burundi Franc',
    'BMD - Bermuda Dollar',
    'BND - Brunei Darussalam Dollar',
    'BOB - Bolivia Bolíviano',
    'BRL - Brazil Real',
    'BSD - Bahamas Dollar',
    'BTN - Bhutan Ngultrum',
    'BWP - Botswana Pula',
    'BYN - Belarus Ruble',
    'BZD - Belize Dollar',
    'CAD - Canada Dollar',
    'CDF - Congo/Kinshasa Franc',
    'CHF - Switzerland Franc',
    'CLP - Chile Peso',
    'CNY - China Yuan Renminbi',
    'COP - Colombia Peso',
    'CRC - Costa Rica Colon',
    'CUP - Cuba Peso',
    'CVE - Cape Verde Escudo',
    'CZK - Czech Republic Koruna',
    'DJF - Djibouti Franc',
    'DKK - Denmark Krone',
    'DOP - Dominican Republic Peso',
    'DZD - Algeria Dinar',
    'EGP - Egypt Pound',
    'ERN - Eritrea Nakfa',
    'ETB - Ethiopia Birr',
    'EUR - Euro Member Countries',
    'FJD - Fiji Dollar',
    'FKP - Falkland Islands Pound',
    'GBP - United Kingdom Pound',
    'GEL - Georgia Lari',
    'GGP - Guernsey Pound',
    'GHS - Ghana Cedi',
    'GIP - Gibraltar Pound',
    'GMD - Gambia Dalasi',
    'GNF - Guinea Franc',
    'GTQ - Guatemala Quetzal',
    'GYD - Guyana Dollar',
    'HKD - Hong Kong Dollar',
    'HNL - Honduras Lempira',
    'HRK - Croatia Kuna',
    'HTG - Haiti Gourde',
    'HUF - Hungary Forint',
    'IDR - Indonesia Rupiah',
    'ILS - Israel Shekel',
    'IMP - Isle of Man Pound',
    'INR - India Rupee',
    'IQD - Iraq Dinar',
    'IRR - Iran Rial',
    'ISK - Iceland Krona',
    'JEP - Jersey Pound',
    'JMD - Jamaica Dollar',
    'JOD - Jordan Dinar',
    'JPY - Japan Yen',
    'KES - Kenya Shilling',
    'KGS - Kyrgyzstan Som',
    'KHR - Cambodia Riel',
    'KMF - Comoros Franc',
    'KPW - Korea North Won',
    'KRW - Korea South Won',
    'KWD - Kuwait Dinar',
    'KYD - Cayman Islands Dollar',
    'KZT - Kazakhstan Tenge',
    'LAK - Laos Kip',
    'LBP - Lebanon Pound',
    'LKR - Sri Lanka Rupee',
    'LRD - Liberia Dollar',
    'LSL - Lesotho Loti',
    'LYD - Libya Dinar',
    'MAD - Morocco Dirham',
    'MDL - Moldova Leu',
    'MGA - Madagascar Ariary',
    'MKD - Macedonia Denar',
    'MMK - Myanmar Kyat',
    'MNT - Mongolia Tughrik',
    'MOP - Macau Pataca',
    'MRU - Mauritania Ouguiya',
    'MUR - Mauritius Rupee',
    'MVR - Maldives Rufiyaa',
    'MWK - Malawi Kwacha',
    'MXN - Mexico Peso',
    'MYR - Malaysia Ringgit',
    'MZN - Mozambique Metical',
    'NAD - Namibia Dollar',
    'NGN - Nigeria Naira',
    'NIO - Nicaragua Cordoba',
    'NOK - Norway Krone',
    'NPR - Nepal Rupee',
    'NZD - New Zealand Dollar',
    'OMR - Oman Rial',
    'PAB - Panama Balboa',
    'PEN - Peru Sol',
    'PGK - Papua New Guinea Kina',
    'PHP - Philippines Peso',
    'PKR - Pakistan Rupee',
    'PLN - Poland Zloty',
    'PYG - Paraguay Guarani',
    'QAR - Qatar Riyal',
    'RON - Romania Leu',
    'RSD - Serbia Dinar',
    'RUB - Russia Ruble',
    'RWF - Rwanda Franc',
    'SAR - Saudi Arabia Riyal',
    'SBD - Solomon Islands Dollar',
    'SCR - Seychelles Rupee',
    'SDG - Sudan Pound',
    'SEK - Sweden Krona',
    'SGD - Singapore Dollar',
    'SHP - Saint Helena Pound',
    'SLL - Sierra Leone Leone',
    'SOS - Somalia Shilling',
    'SPL - Seborga Luigino',
    'SRD - Suriname Dollar',
    'STN - São Tomé and Príncipe Dobra',
    'SVC - El Salvador Colon',
    'SYP - Syria Pound',
    'SZL - Eswatini Lilangeni',
    'THB - Thailand Baht',
    'TJS - Tajikistan Somoni',
    'TMT - Turkmenistan Manat',
    'TND - Tunisia Dinar',
    'TOP - Tonga Paanga',
    'TRY - Turkey Lira',
    'TTD - Trinidad and Tobago Dollar',
    'TVD - Tuvalu Dollar',
    'TWD - Taiwan New Dollar',
    'TZS - Tanzania Shilling',
    'UAH - Ukraine Hryvnia',
    'UGX - Uganda Shilling',
    'USD - United States Dollar',
    'UYU - Uruguay Peso',
    'UZS - Uzbekistan Som',
    'VEF - Venezuela Bolívar',
    'VND - Vietnam Dong',
    'VUV - Vanuatu Vatu',
    'WST - Samoa Tala',
    'XAF - Central African CFA Franc',
    'XCD - East Caribbean Dollar',
    'XOF - West African CFA Franc',
    'XPF - CFP Franc',
    'YER - Yemen Rial',
    'ZAR - South Africa Rand',
    'ZMW - Zambia Kwacha',
    'ZWD - Zimbabwe Dollar'
  ];
  
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

    // Validation for 'from' field - only strings
    if (name === 'from') {
      if (value && !/^[a-zA-Z\s]*$/.test(value)) {
        alert('Only strings are accepted for From field');
        return;
      }
    }

    // Validation for 'destination' field - only strings
    if (name === 'destination') {
      if (value && !/^[a-zA-Z\s]*$/.test(value)) {
        alert('Only strings are accepted for Destination field');
        return;
      }
    }

    // Validation for 'travelers' field - only numbers
    if (name === 'travelers') {
      if (value && !/^\d*$/.test(value)) {
        alert('Only numbers are accepted for Number of Travelers');
        return;
      }
    }

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

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setShowCurrencyMenu(false);
  };

  const handleFindTrips = () => {
    if (!formData.budget || !formData.from || !formData.destination || !formData.travelers || !formData.dateFrom || !formData.dateTo) {
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
            <p className="result-item"><strong>From:</strong> {formData.from}</p>
            <p className="result-item"><strong>Destination:</strong> {formData.destination}</p>
            <p className="result-item"><strong>Budget:</strong> {selectedCurrency.split(' - ')[0]} {formData.budget}</p>
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

      <div className="main-content">
        <div className="form-container">
          <h2 className="form-title">Plan Your Perfect Trip</h2>
          
          <div className="form-fields">
            
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