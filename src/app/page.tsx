"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./navbar/page";

const images = ["/bgbarber1.png", "/bgbarber2.png", "/bgbarber3.png"];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />

      <div
        className="w-full h-[100vh] bg-cover bg-center relative transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      >
        {/* 🔲 Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />

        <div className="relative z-20 flex items-center justify-center h-full">
          <div>
            <h1 className="text-white text-4xl font-bold drop-shadow-lg">
              Specializing in the latest modern short hair styles
            </h1>
            <p>It's all about the pleasure to feel yourself.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
