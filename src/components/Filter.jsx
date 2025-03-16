import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Filter = () => {
  const [price, setPrice] = useState(1000);
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [furnishingStatus, setFurnishingStatus] = useState('');

  const navigate = useNavigate();

  const handleApply = () => {
    const criteria = {};
    if (location) criteria.location = location;
    if (price) criteria.price = price;
    if (propertyType) criteria.propertyType = propertyType;
    if (furnishingStatus) criteria.furnishingStatus = furnishingStatus;
  
    navigate('/filter-results', { state: { filterCriteria: criteria } });
  };
  

  return (
    <div className="flex flex-wrap items-center gap-4 p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="relative w-40">
        <select
          className="block w-full p-3 pr-10 rounded-md border border-violet-300 text-gray-700 bg-violet-50 focus:outline-none focus:ring-2 focus:ring-violet-500 appearance-none"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="" disabled>
            Location
          </option>
          <option value="coimbatore">Coimbatore</option>
          <option value="chennai">Chennai</option>
          <option value="hydrabad">Hyderabad</option>
          <option value="bangalore">Bangalore</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg
            className="w-4 h-4 text-violet-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M5.5 7l4 4 4-4H5.5z" />
          </svg>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <label className="text-gray-700">Price Range: ₹{price}</label>
        <input
          type="range"
          min="1000"
          max="9000"
          step="1000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-32 h-2 bg-violet-300 rounded-lg cursor-pointer accent-violet-500"
        />
      </div>
      <div className="relative w-48">
        <select
          className="block w-full p-3 pr-10 rounded-md border border-violet-300 text-gray-700 bg-violet-50 focus:outline-none focus:ring-2 focus:ring-violet-500 appearance-none"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option value="" disabled>
            Property Type
          </option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="independent-house">Independent House</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg
            className="w-4 h-4 text-violet-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M5.5 7l4 4 4-4H5.5z" />
          </svg>
        </div>
      </div>
      <div className="relative w-48">
        <select
          className="block w-full p-3 pr-10 rounded-md border border-violet-300 text-gray-700 bg-violet-50 focus:outline-none focus:ring-2 focus:ring-violet-500 appearance-none"
          value={furnishingStatus}
          onChange={(e) => setFurnishingStatus(e.target.value)}
        >
          <option value="" disabled>
            Furnishing Status
          </option>
          <option value="furnished">Furnished</option>
          <option value="semi-furnished">Semi-Furnished</option>
          <option value="unfurnished">Unfurnished</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg
            className="w-4 h-4 text-violet-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M5.5 7l4 4 4-4H5.5z" />
          </svg>
        </div>
      </div>
      <button
        className="p-3 text-white bg-violet-600 rounded-md hover:bg-violet-700 transition"
        onClick={handleApply}
      >
        Apply
      </button>
    </div>
  );
};

export default Filter;