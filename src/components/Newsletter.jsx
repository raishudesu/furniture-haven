import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full max-h-fit">
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-2xl font-bold">Newsletter</h1>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            placeholder="Your Email"
            className="p-2 rounded"
          />
          <button className="p-2 bg-white text-black font-medium rounded">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
