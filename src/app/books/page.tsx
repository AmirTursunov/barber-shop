"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../navbar/page";
import { supabase } from "../supabaseClient";
import { useUser } from "@clerk/nextjs";

interface Appointment {
  id: number;
  full_name: string;
  phone: string;
  email: string;
  location: string;
  services: string[];
  date: string;
  time: string;
  barber: string;
  created_at: string;
}

const Bookings = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const { user } = useUser();

  useEffect(() => {
    if (!user?.id) return;

    const fetchData = async () => {
      const { data: appointmentData, error } = await supabase
        .from("appointments")
        .select("*")
        .eq("user_id", user.id);

      if (error) {
        console.error(error.message);
      }

      if (appointmentData) setAppointments(appointmentData);
    };

    fetchData();
  }, [user?.id]);

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/appointment.png)` }}
        />
        <div className="absolute inset-0 z-10 bg-black bg-opacity-60" />
        <div className="relative z-30">
          <Navbar />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Your Bookings
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-300">
            Below are all your current and past bookings
          </p>
        </div>
      </div>

      {/* Appointment List */}
      <div className="py-16 px-4 md:px-10">
        {appointments.length === 0 ? (
          <p className="text-center text-lg text-gray-400">
            You have no appointments booked yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-[#1a1a1a] rounded-lg p-6 shadow-md border border-gray-800 hover:border-[#c8865c] transition"
              >
                <h2 className="text-xl font-bold mb-2 text-[#c8865c]">
                  {appointment.full_name}
                </h2>
                <p className="text-sm text-gray-300 mb-1">
                  📍 Location: {appointment.location}
                </p>
                <p className="text-sm text-gray-300 mb-1">
                  📞 Phone: {appointment.phone}
                </p>
                <p className="text-sm text-gray-300 mb-1">
                  📧 Email: {appointment.email}
                </p>
                <p className="text-sm text-gray-300 mb-1">
                  🧔‍♂️ Barber: {appointment.barber}
                </p>
                <p className="text-sm text-gray-300 mb-1">
                  🗓️ Date: {appointment.date}
                </p>
                <p className="text-sm text-gray-300 mb-3">
                  ⏰ Time: {appointment.time}
                </p>
                <div>
                  <p className="font-semibold mb-1">🛠 Services:</p>
                  <ul className="list-disc list-inside text-sm text-gray-300">
                    {appointment.services.map((srv, idx) => (
                      <li key={idx}>{srv}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
