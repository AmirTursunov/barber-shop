"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./navbar/page";
import { ArrowRight } from "lucide-react";
import { redirect } from "next/navigation";
import Section1 from "./section1/page";
import Section2 from "./section2/page";
import Section3 from "./section3/page";
import Footer from "./footer/page";

const images = ["/bgbarber5.png", "/barberbg4.png", "/bgbarber3.png"];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        className="w-full h-screen bg-cover bg-center relative transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      >
        <Navbar />

        {/* Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />

        <div className="relative z-20 flex items-start justify-between px-10 py-20 flex-wrap h-full text-center md:text-start">
          <div className="max-w-[600px] flex flex-col gap-5 items-center sm:items-start">
            <h1 className="text-white text-5xl md:text-7xl sm:text-6xl font-bold drop-shadow-lg">
              Specializing in the latest modern short hair styles
            </h1>
            <div>
              <span className="text-white font-bold text-center md:text-start ">
                It's all about the pleasure to feel yourself.
              </span>
            </div>
            <div>
              <button
                onClick={() => redirect("/profile")}
                className="p-3 px-5 bg-[#c8865c] flex text-white gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#b4744e]"
              >
                Learn More <ArrowRight />
              </button>
            </div>
          </div>

          <div className="flex gap-20 mt-3 pl-4">
            <div className="flex flex-col gap-4 md:gap-6">
              <h1 className="text-white text-xl md:text-2xl font-semibold">
                Locations
              </h1>
              <div className="text-white text-[13px] md:text-sm">
                <p>Mustaqillik</p>
                <p>Alpomish</p>
                <p>Piridastgir</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <h1 className="text-white text-xl md:text-2xl font-semibold">
                Hours
              </h1>
              <div className="text-white text-[11px] md:text-sm">
                <p>Mon-Fri: 9AM - 8PM</p>
                <p>Sat: 9AM - 6PM</p>
                <p>Sun: 10AM - 5PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
};

export default Home;
