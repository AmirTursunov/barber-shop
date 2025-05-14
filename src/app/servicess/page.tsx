"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../navbar/page";
const images = ["/bgbarber5.png", "/barberbg4.png", "/bgbarber3.png"];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Navbar */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* Masters section */}
      <div className="relative z-21 max-w-7xl mx-auto px-4 py-20"></div>
    </div>
  );
};

export default Services;
