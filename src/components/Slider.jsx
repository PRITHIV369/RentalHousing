import React, { useState, useEffect } from "react";

const Slider = () => {
  const [houses, setHouses] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch("https://rentalhousingserver.onrender.com/houses/");
        const data = await response.json();
        setHouses(data);
      } catch (error) {
        console.error("Error fetching houses:", error);
      }
    };
    fetchHouses();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? houses.length - 1 : prevIndex - 1
    );
    setShowDetails(false); 
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === houses.length - 1 ? 0 : prevIndex + 1
    );
    setShowDetails(false); 
  };

  const handleViewMore = () => {
    setShowDetails(!showDetails);
  };

  if (houses.length === 0) {
    return <p>Loading houses...</p>;
  }

  const house = houses[currentIndex];

  return (
    <div className="max-w-screen-xl mx-auto text-center relative overflow-hidden p-4 w-full">
      <h2 className="text-3xl font-semibold mb-4">Available Rental Houses</h2>
      <p className="text-gray-500 mb-6">Explore various rental options</p>

      <div className="bg-white rounded-lg p-6 shadow-lg w-[90vw] max-w-3xl mx-auto">
        <div
          className="w-full h-80 bg-cover bg-center rounded-lg mb-4"
          style={{ backgroundImage: `url(${house.image})` }}
        />
        <div>
          <h3 className="text-2xl font-semibold mb-2">{house.name}</h3>
          <p className="text-lg text-gray-600 mb-1">{house.location}</p>
          <p className="text-xl font-bold text-gray-800 mb-2">{house.price}</p>
        </div>
        {!showDetails ? (
          <button
            onClick={handleViewMore}
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
              <strong>YouTube Video:</strong>{" "}
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
              onClick={handleViewMore}
              className="text-white bg-red-500 px-4 py-2 mt-4 rounded hover:bg-red-600"
            >
              Show Less
            </button>
          </div>
        )}
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl bg-transparent border-none cursor-pointer text-gray-800"
        onClick={handlePrev}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl bg-transparent border-none cursor-pointer text-gray-800"
        onClick={handleNext}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slider;