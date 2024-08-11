import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold text-center">Contact Me</h1>
      <form className="mt-4 max-w-lg mx-auto">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full p-2 mb-4 bg-gray-700 text-white border-none rounded-md"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full p-2 mb-4 bg-gray-700 text-white border-none rounded-md"
        />
        <textarea 
          placeholder="Your Message" 
          className="w-full p-2 mb-4 bg-gray-700 text-white border-none rounded-md"
        />
        <button 
          type="submit" 
          className="w-full p-2 bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
