import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2
          className="text-[40px] md:text-[60px] 
            font-bold "
        >
          <div className="container text-gray-400">
            <h3>Premium Car</h3>
            <div className="typed-out mt-2 mb-2 bg-gradient-to-r from-blue-600 via-green-400 to-indigo-400 inline-block text-transparent bg-clip-text">Road Rover Rentals</div>
            <h3>in Your Area</h3>
          </div>
        </h2>
        <h2 className="text-[20px] text-gray-500 pr-20 mt-5">
          Book the selected car effortlessly, Pay for driving only, Book the Car
          Now
        </h2>

        {/* Options for Button Colours */}

        {/* <button className="bg-gradient-to-r from-sky-400 via-blue-500 to-teal-400 text-white border-0 p-2 mt-5 focus:outline-none hover:bg-blue-600 px-4 rounded-full transition-all"> */}
        {/* <button className="bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 text-white border-0 p-2 mt-5 focus:outline-none hover:bg-blue-600 px-4 rounded-full transition-all"> */}
        {/* <button
          className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 text-white border-0
 p-2 mt-5 focus:outline-none hover:bg-blue-600 px-4 rounded-full transition-all"
        > */}

        <button className="bg-gradient-to-r from-teal-300 via-blue-300 to-indigo-400 text-gray-800 border-0 p-2 mt-5 focus:outline-none hover:bg-blue-600 px-4 rounded-full transition-all">
          Explore Cars
        </button>
      </div>

      <div>
        <Image
          src="/hero.jpeg"
          alt="hero"
          width={400}
          height={400}
          className="w-full object-cover align-middle"
        />
      </div>
    </div>
  );
}

export default Hero;
