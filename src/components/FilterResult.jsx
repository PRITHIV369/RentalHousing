import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const FilterResultPage = () => {
  const { state } = useLocation();
  const { filterCriteria } = state || {};
  const [filteredResults, setFilteredResults] = useState([]);
  const [showDetails, setShowDetails] = useState({});

  useEffect(() => {
    if (!filterCriteria) return;

    const fetchFilteredResults = async () => {
      try {
        const response = await axios.get("https://rentalhousingserver.onrender.com/filter", {
          params: filterCriteria,
        });
        setFilteredResults(response.data);
      } catch (err) {
        console.error("Error fetching filtered houses:", err);
      }
    };

    fetchFilteredResults();
  }, [filterCriteria]);

  const handleViewMore = (id) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [id]: !prevState[id], 
    }));
  };

  if (filteredResults.length === 0) {
    return <p className="text-center">No results found</p>;
  }

  return (
    <div className="max-w-screen-xl mx-auto text-center relative overflow-hidden p-4 w-full">
      <h2 className="text-3xl font-semibold mb-4">Filtered Rental Houses</h2>
      <p className="text-gray-500 mb-6">Explore properties based on your criteria</p>

      {filteredResults.map((house) => (
        <div key={house._id} className="bg-white rounded-lg p-6 shadow-lg w-[90vw] max-w-3xl mx-auto mb-6">
          <div
            className="w-full h-80 bg-cover bg-center rounded-lg mb-4"
            style={{ backgroundImage: `url(${house.image})` }}
          />
          <div>
            <h3 className="text-2xl font-semibold mb-2">{house.name}</h3>
            <p className="text-lg text-gray-600 mb-1">{house.location}</p>
            <p className="text-xl font-bold text-gray-800 mb-2">₹{house.price}</p>
          </div>

          {!showDetails[house._id] ? (
            <button
              onClick={() => handleViewMore(house._id)}
              className="text-white bg-violet-600 px-4 py-2 rounded hover:bg-violet-800"
            >
              View More
            </button>
          ) : (
            <div className="mt-4 text-left">
              <p>
                <strong>Phone:</strong> {house.phoneNumber}
              </p>
              <p>
                <strong>Email:</strong> {house.email}
              </p>
              <p>
                <strong>Video:</strong>{" "}
                <a
                  href={house.youtubeVideoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Watch Video
                </a>
              </p>
              <p>
                <strong>Instagram:</strong>{" "}
                <a
                  href={house.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {house.instagram}
                </a>
              </p>
              <button
                onClick={() => handleViewMore(house._id)}
                className="text-white bg-red-500 px-4 py-2 mt-4 rounded hover:bg-red-600"
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterResultPage;