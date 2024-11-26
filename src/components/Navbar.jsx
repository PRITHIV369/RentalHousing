import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-violet-600 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Rental Housing</Link>
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden lg:flex space-x-10">
            <Link to="/" className="hover:text-purple-200">Home</Link>
            <Link to="/about" className="hover:text-purple-200">About</Link>
            <Link to="/contact" className="hover:text-purple-200">Contact</Link>
          </nav>
        </div>
      </header>
      {isOpen && (
        <div className="lg:hidden bg-violet-700 p-4">
          <nav className="space-y-4">
            <Link to="/" className="block hover:text-purple-200 text-white">Home</Link>
            <Link to="/about" className="block hover:text-purple-200 text-white">About</Link>
            <Link to="/contact" className="block hover:text-purple-200 text-white">Contact</Link>
          </nav>
        </div>
      )}
      <Outlet />
    </>
  );
}
