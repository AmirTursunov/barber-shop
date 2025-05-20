"use client";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import Image from "next/image";
import Link from "next/link";

interface Master {
  id: number;
  name: string;
  skills: string[];
  time: string;
}

export default function MastersPage() {
  const [masters, setMasters] = useState<Master[]>([]);
  const [loading, setLoading] = useState(true);

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
    return <div className="text-center text-xl py-10">Loading ...</div>;
  }

  return (
    <div className="w-full min-h-screen text-white">
      {/* Hero Section with Background */}
      <div className="relative w-full h-[100vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: "url(bgservice.png)" }}
        />

        {/* Dark Overlay */}

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

        {/* Title Section */}
        <div className="relative z-20 flex flex-col items-center justify-center h-[600px] text-center ">
          <h1 className="text-7xl font-bold tracking-widest">Masters</h1>
          <div className="mt-4">
            <Link className="hover:text-[#c8865c] mx-1" href="/">
              Home
            </Link>{" "}
            / <span className="mx-1">Masters</span>
          </div>
        </div>
      </div>

      {/* Masters List Section */}
      <div className="bg-white text-black py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Masters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {masters.map((master) => (
            <div
              key={master.id}
              className="flex flex-col items-center text-center"
            >
              <Image
                src="/master1.png"
                width={500}
                height={400}
                alt={master.name}
                className="w-full max-w-sm object-cover mb-6 rounded-lg shadow-lg"
              />
              <h3 className="text-2xl font-bold uppercase mb-2">
                {master.name}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {master.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-200 text-blue-800 text-xs px-3 py-1 rounded-full uppercase font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-1 max-w-md">
                Working hours: {master.time}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
