import React, { useState } from 'react';
import axios from 'axios';

function Predict() {
  const [furnishing, setFurnishing] = useState('');
  const [bhk, setBhk] = useState('');
  const [size, setSize] = useState('');
  const [parking, setParking] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [predictedRent, setPredictedRent] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = {
      furnishing,
      bhk: parseInt(bhk),
      size: parseInt(size),
      parking,
      bathrooms: parseInt(bathrooms),
    };

    try {
      const response = await axios.post('http://localhost:8000/predict', requestData);
      setPredictedRent(response.data.predicted_rent);
      setError(null);
    } catch (err) {
      setError('Error predicting rent. Please try again.');
      setPredictedRent(null);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-center text-gray-800">Rent Prediction</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="furnishing" className="block text-sm font-medium text-gray-700">Furnishing Status:</label>
          <select
            id="furnishing"
            value={furnishing}
            onChange={(e) => setFurnishing(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-violet-400"
            required
          >
            <option value="">Select Furnishing</option>
            <option value="Furnished">Furnished</option>
            <option value="Unfurnished">Unfurnished</option>
          </select>
        </div>

        <div className="space-y-1">
          <label htmlFor="bhk" className="block text-sm font-medium text-gray-700">BHK:</label>
          <input
            type="number"
            id="bhk"
            value={bhk}
            onChange={(e) => setBhk(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-violet-400"
            required
            min="1"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size (sqft):</label>
          <input
            type="number"
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-violet-400"
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="parking" className="block text-sm font-medium text-gray-700">Parking:</label>
          <select
            id="parking"
            value={parking}
            onChange={(e) => setParking(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-violet-400"
            required
          >
            <option value="">Select Parking</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="space-y-1">
          <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">Bathrooms:</label>
          <input
            type="number"
            id="bathrooms"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-violet-400"
            required
            min="1"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-violet-500 text-white rounded-md hover:bg-violet-600 focus:ring-2 focus:ring-violet-400 mt-4"
        >
          Predict Rent
        </button>
      </form>

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {predictedRent !== null && (
        <div className="mt-6 text-center">
          <h2 className="text-xl text-gray-800">Predicted Rent: ₹{predictedRent}</h2>
        </div>
      )}
    </div>
  );
}

export default Predict;
