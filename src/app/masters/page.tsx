"use client";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import Navbar from "../navbar/page";

interface Master {
  id: number;
  name: string;
  specialty: string;
  description: string;
  photo_url: string;
}

const images = ["/bgbarber5.png", "/barberbg4.png", "/bgbarber3.png"];

export default function MastersPage() {
  const [masters, setMasters] = useState<Master[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchMasters = async () => {
      const { data, error } = await supabase.from("masters").select("*");
      if (error) {
        console.error("Error fetching masters:", error);
      } else {
        setMasters(data);
      }
      setLoading(false);
    };
    fetchMasters();
  }, []);

  if (loading) {
    return <div className="text-center text-xl py-10">Yuklanmoqda...</div>;
  }

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
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Masters section */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">
          Bizning Ustalar
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          {masters.map((master) => (
            <div
              key={master.id}
              className="flex flex-col items-center text-center"
            >
              <img
                src="master1.png"
                alt={master.name}
                className="w-full max-w-sm  object-cover mb-6 rounded-lg shadow-lg "
              />
              <h2 className="text-3xl font-extrabold tracking-wider uppercase mb-2">
                {master.name}
              </h2>
              <p className="text-sm uppercase text-gray-300">
                {master.specialty}
              </p>
              <p className="text-sm text-gray-400 mt-1 max-w-md">
                {master.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
