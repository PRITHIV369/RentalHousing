import React, { useState } from 'react';

const houses = [
  {
    name: "Cozy Apartment",
    location: "Coimbatore",
    price: "5200/month",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1kFLGKZ6sPSAIgLUFKFWO5wmkKAfdPTNzaZRv3m7suYeiHFLTW_Dc7-WyI7Z4JelcmWIl5P1AvtUG8EnUVFKrYtcYgTpUEmCN7sHwa1AdrIuWc31fpmK2sk_jtGBN5i5Uutel_uHPmXGI/s1600/1298-sq-ft-house.jpg",
  },
  {
    name: "Modern Studio",
    location: "Banglore",
    price: "7800/month",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1kFLGKZ6sPSAIgLUFKFWO5wmkKAfdPTNzaZRv3m7suYeiHFLTW_Dc7-WyI7Z4JelcmWIl5P1AvtUG8EnUVFKrYtcYgTpUEmCN7sHwa1AdrIuWc31fpmK2sk_jtGBN5i5Uutel_uHPmXGI/s1600/1298-sq-ft-house.jpg",
  },
  {
    name: "Spacious Villa",
    location: "Chennai",
    price: "8500/month",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1kFLGKZ6sPSAIgLUFKFWO5wmkKAfdPTNzaZRv3m7suYeiHFLTW_Dc7-WyI7Z4JelcmWIl5P1AvtUG8EnUVFKrYtcYgTpUEmCN7sHwa1AdrIuWc31fpmK2sk_jtGBN5i5Uutel_uHPmXGI/s1600/1298-sq-ft-house.jpg",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? houses.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === houses.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-screen-xl mx-auto text-center relative overflow-hidden p-4 w-full">
      <h2 className="text-3xl font-semibold mb-4">Available Rental Houses</h2>
      <p className="text-gray-500 mb-6">Explore various rental options</p>

      <div className="flex justify-center items-center overflow-hidden relative w-full">
        {houses.map((house, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 transform ${
              index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          >
            <div className="bg-white rounded-lg p-6 shadow-lg w-[90vw] max-w-3xl mx-auto" >
              <div
                className="w-full h-80 bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: `url(${house.image})` }}
              />
              <div>
                <h3 className="text-2xl font-semibold mb-2">{house.name}</h3>
                <p className="text-lg text-gray-600 mb-1">{house.location}</p>
                <p className="text-xl font-bold text-gray-800">{house.price}</p>
              </div>
            </div>
          </div>
        ))}
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
