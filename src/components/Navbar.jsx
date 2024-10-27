// import React from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: 'blue', color: 'white' }}>
//       <div>
//         <Link to="/" style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
//           CollabrativeX
//         </Link>
//       </div>
//       <nav style={{ display: 'flex', gap: '15px' }}>
//         <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
//         <Link to="/Domain" style={{ color: 'white', textDecoration: 'none' }}>Domains</Link>
//         <Link to="/About" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link>
//         <Link to="/Contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</Link>
//       </nav>
//     </header>
//   );
// }
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-purple-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">MyApp</Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-purple-200">Home</Link>
          <Link to="/about" className="hover:text-purple-200">About</Link>
          <Link to="/services" className="hover:text-purple-200">Services</Link>
          <Link to="/contact" className="hover:text-purple-200">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

