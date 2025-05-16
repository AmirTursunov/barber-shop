"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../navbar/page";
import { supabase } from "../supabaseClient";
import Footer from "../footer/page";
interface Services {
  id: number;
  name: string;
  time: string;
  price: string;
  category: string;
}
const Services = () => {
  const [services, setServices] = useState<Services[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchMasters = async () => {
      const { data, error } = await supabase.from("services").select("*");
      if (error) {
        console.error("Error fetching masters:", error);
      } else {
        setServices(data);
      }
      setLoading(false);
    };
    fetchMasters();
  }, []);

  if (loading) {
    return <div className="text-center text-xl py-10">Loading ...</div>;
  }
  return (
    <div className="relative min-h-screen text-white">
      {/* Background image */}
      <div className="relative w-full h-[100vh]">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(bgbarber2.png)` }}
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
        <div className="relative z-20 flex flex-col items-center justify-center h-[600px] text-center ">
          <h1 className="text-7xl font-bold tracking-widest">Services</h1>
          <div className="mt-4">
            <a className="hover:text-[#c8865c] mx-1" href="/">
              Home
            </a>{" "}
            / <span className="mx-1">Services</span>
          </div>
        </div>
        {/* Services section */}
      </div>
      <div className="bg-black text-white py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

        {/* Cuts */}
        <div className="max-w-5xl mx-auto mb-16 border-b pb-10">
          <div className="flex items-center justify-between px-4 md:px-10 mb-8">
            <h1 className="text-5xl font-bold">Cuts</h1>
            <div className="text-right text-sm sm:text-xl text-[#c8865c] font-semibold">
              PACKAGES – $45 <br />
              <span className="text-white text-sm sm:text-2xl">
                HAIRCUT & BEARD TRIM
              </span>
            </div>
          </div>
          <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
            {services
              .filter((service) => service.category === "cuts")
              .map((service) => (
                <div
                  key={service.id}
                  className="bg-[#111] rounded-xl p-6 shadow-md hover:shadow-[#c8865c] transition duration-300 border border-gray-800"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-bold uppercase">
                      {service.name}
                    </h3>
                    <span className="text-[#c8865c] text-xl font-semibold">
                      ${service.price}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    {service.time} minutes
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* Shaves */}
        <div className="max-w-5xl mx-auto mb-16 border-b pb-10">
          <div className="flex items-center justify-between px-4 md:px-10 mb-8">
            <h1 className="text-5xl font-bold">SHAVES</h1>
            <div className="text-right text-sm sm:text-xl text-[#c8865c] font-semibold uppercase">
              Combo – 345 <br />
              <span className="text-white text-sm sm:text-2xl uppercase">
                haircut & shave
              </span>
            </div>
          </div>
          <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
            {services
              .filter((service) => service.category === "shave")
              .map((service) => (
                <div
                  key={service.id}
                  className="bg-[#111] rounded-xl p-6 shadow-md hover:shadow-[#c8865c] transition duration-300 border border-gray-800"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-bold uppercase">
                      {service.name}
                    </h3>
                    <span className="text-[#c8865c] text-xl font-semibold">
                      ${service.price}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    {service.time} minutes
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* Beard */}
        <div className="max-w-5xl mx-auto mb-16 border-b pb-10">
          <div className="flex items-center justify-between px-4 md:px-10 mb-8">
            <h1 className="text-5xl font-bold">Beard styling</h1>
            <div className="text-right text-sm sm:text-xl text-[#c8865c] font-semibold uppercase">
              Packages – 345 <br />
              <span className="text-white text-sm sm:text-2xl uppercase">
                Beard Trim and Facial
              </span>
            </div>
          </div>
          <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
            {services
              .filter((service) => service.category === "beard")
              .map((service) => (
                <div
                  key={service.id}
                  className="bg-[#111] rounded-xl p-6 shadow-md hover:shadow-[#c8865c] transition duration-300 border border-gray-800"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-bold uppercase">
                      {service.name}
                    </h3>
                    <span className="text-[#c8865c] text-xl font-semibold">
                      ${service.price}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    {service.time} minutes
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
