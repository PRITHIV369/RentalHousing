import React from 'react';
import { useNavigate } from 'react-router-dom';  
import Filter from './Filter';

const Banner = () => {
  const navigate = useNavigate();  

  const handleClick = () => {
    navigate('/predict');  
  };

  return (
    <div className="md:h-96 h-[32rem] w-full bg-gradient-to-br from-violet-700 to-indigo-600 flex justify-center items-center flex-col gap-5 p-4 shadow-lg rounded-lg relative">
      <b className="text-white text-center text-3xl md:text-4xl font-bold tracking-wide drop-shadow-lg animate-fadeIn">
        Find the Best Houses Here!
      </b>
      <div className="w-full flex justify-center">
        <Filter className="w-full max-w-md transition-transform duration-300 hover:scale-105" />
      </div>
      <button
        onClick={handleClick}  
        className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 bg-violet-500 text-white py-2 px-6 rounded-full text-lg font-semibold shadow-lg hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-400 transition-all duration-300"
      >
        Predict
      </button>
    </div>
  );
};

export default Banner;
