import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-200 flex flex-col items-center">
    {/* Hero Section */}
    <div className="relative w-full bg-purple-600 py-16 text-white text-center overflow-hidden shadow-lg rounded-b-3xl">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-wave-pattern opacity-20"></div>
      <svg
        className="absolute top-0 left-0 w-full h-20 transform -translate-y-10 text-purple-700 opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="currentColor"
          d="M0,192L60,213.3C120,235,240,277,360,293.3C480,309,600,299,720,277.3C840,256,960,224,1080,213.3C1200,203,1320,213,1380,218.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
  
      {/* Content */}
      <h1 className="text-5xl font-extrabold font-popins mb-4">About Us</h1>
      <p className="text-lg max-w-3xl mx-auto px-6">
        Redefining rental housing with innovation, trust, and quality. Connecting tenants and landlords seamlessly.
      </p>
  
      {/* Bottom Decorative Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-20 transform translate-y-10 text-purple-700 opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="currentColor"
          d="M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,106.7C672,117,768,171,864,176C960,181,1056,139,1152,112C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>



      <div className="max-w-5xl mt-12 bg-white shadow-lg rounded-3xl p-8 mx-4 animate-fadeIn">
        <h2 className="text-4xl font-bold text-purple-700 mb-6 text-center">Who We Are</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          We are a leading platform dedicated to simplifying the rental housing experience for tenants and landlords alike. Our mission is to connect people with their perfect homes, offering a seamless and transparent rental process.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          We provide an extensive database of rental properties, personalized search options, and reliable tools to streamline every aspect of renting. Whether you're a landlord looking to list your property or a tenant seeking your dream rental, we are here to make the journey effortless and efficient.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          With a commitment to trust, quality, and innovation, we ensure a user-friendly platform that caters to your needs. Join us in redefining the way rental housing works—making it smarter, faster, and better for everyone involved.
        </p>
      </div>


      <div className="relative w-full bg-gradient-to-r from-purple-600 to-purple-700 py-12 mt-16 text-white overflow-hidden">
  {/* Decorative Elements */}
  <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
  <svg
    className="absolute top-0 left-0 w-40 h-40 text-purple-500 opacity-30 transform -translate-x-1/3 -translate-y-1/3"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
  >
    <circle cx="50" cy="50" r="50" fill="currentColor" />
  </svg>
  <svg
    className="absolute bottom-0 right-0 w-56 h-56 text-purple-800 opacity-20 transform translate-x-1/3 translate-y-1/3"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
  >
    <circle cx="50" cy="50" r="50" fill="currentColor" />
  </svg>

  {/* Content Section */}
  <div className="max-w-4xl mx-auto text-center relative z-10">
    <h3 className="text-4xl font-extrabold mb-4 font-popins">Ready to Find Your Perfect Home?</h3>
    <p className="text-lg mb-6 leading-relaxed">
      Join thousands of happy tenants and landlords who trust us for their rental needs.
    </p>
    <button className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-purple-100 hover:scale-105 transition-transform duration-300">
      Get Started
    </button>
  </div>
</div>

    </div>
  );
};

export default About;
