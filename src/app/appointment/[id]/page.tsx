import Navbar from "@/app/navbar/page";
import React from "react";

const AppointmentPage = () => {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background image */}
      <div className="relative w-full h-[100vh]">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(/appointment.png)` }}
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
          <h1 className="text-7xl font-bold tracking-widest">Appointment</h1>
          <div className="mt-4">
            <a className="hover:text-[#c8865c] mx-1" href="/">
              Home
            </a>{" "}
            / <span className="mx-1">Appointment</span>
          </div>
        </div>
      </div>
      {/* Appointment */}
      <div className="bg-black text-white py-16 px-4">
        <span className="uppercase text-white font-semibold text-md ml-2">
          // Make an appointment
        </span>
        <div className="mt-7">
          <div className="flex flex-col gap-10">
            <h1 className="uppercase text-6xl font-bold max-w-sm">
              Reserve your spot, pamper yourself
            </h1>
            <p className="max-w-xl">
              Whether you’re looking for a precise haircut, a luxurious shave,
              or expert beard grooming, our team is here to craft the perfect
              style just for you. Secure your spot today and experience the
              difference!
            </p>
            <div className="flex flex-col gap-5">
              <h1 className="uppercase text-3xl font-bold">Business hours</h1>
              <div>
                <span className="font-normal">Mon - Fri:</span>
                <div className="w-[350px]">
                  <h1 className="text-4xl font-bold border-b border-gray-700 pb-5">
                    9AM - 8PM
                  </h1>
                </div>
              </div>
              <div>
                <span className="font-normal">Sat:</span>
                <div className="w-[350px]">
                  <h1 className="text-4xl font-bold border-b border-gray-700 pb-5">
                    9AM - 6PM
                  </h1>
                </div>
              </div>
              <div>
                <span className="font-normal">Sun:</span>
                <div className="w-[350px]">
                  <h1 className="text-4xl font-bold border-b border-gray-700 pb-5">
                    10AM - 5PM
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <h1 className="uppercase text-3xl font-bold">Booking number</h1>
              <p className="text-[#c8865c] text-3xl font-bold mt-3">
                +9998001234567
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
