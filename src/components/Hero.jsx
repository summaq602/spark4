import React from "react";
import Photo from "../assets/Photo.png";
const Hero = () => {
  return (
    <>
      <section className="text-white bg-black min-h-screen flex items-center justify-center px-4 py-8 md:py-0">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            The Best{" "}
            <span className="inline-block bg-orange-500 text-black px-2 rotate-[-2deg]">
              Digital
            </span>
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-2">
            Marketing <span className="text-orange-500">Agency.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            We believe in combining innovative design, sustainable practices,
            and exceptional craftsmanship to bring your vision to life.
          </p>
          <button className="group bg-orange-400 hover:bg-orange-500 text-black font-semibold mt-10 px-6 py-3 rounded-full transition-all duration-300 inline-flex items-center">
            CONTACT US
            <span className="ml-2   transform transition-all duration-500 ease-in-out group-hover:translate-x-2 group-hover:scale-125 ">
              →
            </span>
          </button>
        </div>
      </section>
      <div className="relative">
        <img
          src={Photo}
          alt="Hero"
          className="w-full h-[300px] md:h-auto object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/80 to-transparent"></div>
      </div>
    </>
  );
};

export default Hero;
