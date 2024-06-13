// components/NewsletterSubscription.tsx

import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your subscription logic here
    console.log('Subscribed with email:', email);
  };

  return (
    <div className="flex flex-col items-center bg-[#f5fbff] bg-opacity-75 rounded-lg p-8 pt-8 pb-8 w-full mx-auto my-8 relative">
      {/* Background with design */}
     
      <h2 className="text-5xl font-semibold mb-8 text-center z-10">Subscribe to Newsletter</h2>
      <p className="text-gray-600 mb-6 text-center z-10">
        Lorem ipsum dolor sit amet consectetur. Venenatis pellentesque duis hendrerit proin et tristique tincidunt massa.
      </p>
      <form className="flex w-full max-w-md z-10" onSubmit={handleSubscribe}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Mail Address"
          className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
