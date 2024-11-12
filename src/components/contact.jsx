// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_95zvi1o', 'template_m6m7erm', form.current, {
//         publicKey: 'HhZyk1AUW-lO0e6m0',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

// export default Contact


import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState('');

  // Function to validate the form before submission
  const validateForm = () => {
    const formElements = form.current.elements;
    const name = formElements['user_name'].value.trim();
    const email = formElements['user_email'].value.trim();
    const message = formElements['message'].value.trim();

    // Validate Name
    if (!name) {
      setErrorMessage('Name is required');
      return false;
    }

    // Validate Email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email || !emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }

    // Validate Message
    if (!message) {
      setErrorMessage('Message cannot be empty');
      return false;
    }

    // If everything is valid, reset the error message
    setErrorMessage('');
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // First, validate the form
    if (!validateForm()) {
      return; // If the form is not valid, do not proceed with the email submission
    }

    // If valid, proceed with the email submission using EmailJS
    emailjs
      .sendForm('service_95zvi1o', 'template_m6m7erm', form.current, {
        publicKey: 'HhZyk1AUW-lO0e6m0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="flex justify-start items-center min-h-screen bg-gradient-to-br from-purple-100 to-purple-200">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-lg ml-4 animate-slideInFromLeft transform transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-purple-700 text-center mb-8">Get in Touch</h2>
        
        {errorMessage && (
          <div className="mb-4 text-red-600 text-center font-semibold">
            {errorMessage}
          </div>
        )}

        <label className="block text-purple-700 font-semibold mb-2">Name</label>
        <input
          type="text"
          name="user_name"
          className="w-full px-4 py-3 mb-6 border border-purple-200 rounded-lg text-purple-700 placeholder-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
          placeholder="Enter your name"
        />
        
        <label className="block text-purple-700 font-semibold mb-2">Email</label>
        <input
          type="email"
          name="user_email"
          className="w-full px-4 py-3 mb-6 border border-purple-200 rounded-lg text-purple-700 placeholder-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
          placeholder="Enter your email"
        />
        
        <label className="block text-purple-700 font-semibold mb-2">Message</label>
        <textarea
          name="message"
          className="w-full px-4 py-3 mb-6 border border-purple-200 rounded-lg text-purple-700 placeholder-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
          rows="4"
          placeholder="Your message..."
        />
        
        <button
          type="submit"
          className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl focus:ring-4 focus:ring-purple-400"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;


