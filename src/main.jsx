// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './assets/css/style.css'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App.jsx';
import './assets/css/style.css';
import Login from './components/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 {/* Wrap App with BrowserRouter */}
      <App />
      {/* <Login/> */}
  </StrictMode>,
);

