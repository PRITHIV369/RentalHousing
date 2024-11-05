// Card.js
import React from 'react';

const Card = ({ title, description, imgSrc, buttonText, onClick }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden m-4">
      <img className="w-full h-48 object-cover" src={imgSrc} alt={title} />
      <div className="p-4 md:p-6">
        <h2 className="text-lg md:text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm md:text-base text-gray-600 mt-2">{description}</p>
        <div className="flex justify-center mt-4">
          <button
            onClick={onClick}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
