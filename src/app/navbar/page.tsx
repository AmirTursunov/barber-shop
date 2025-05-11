"use client";
import { ClerkProvider } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { ArrowRight, LogIn } from "lucide-react";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { FiHome, FiUser, FiShoppingCart, FiInfo } from "react-icons/fi";
import "react-tooltip/dist/react-tooltip.css";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
const Navbar = () => {
  const [phone, setPhone] = useState("");
  const [activeLink, setActiveLink] = useState<string>("home");

  useEffect(() => {
    getPhone();
  }, []);

  async function getPhone() {
    const { data } = await supabase.from("settings").select("phone").single();
    const phone = data?.phone;
    setPhone(phone);
  }

  return (
    <>
      <div className="hidden lg:flex justify-between items-center px-10 text-white relative z-100 border-b border-white pb-4">
        <div className="flex items-center mt-3">
          <img className="w-25" src="barberWhite.png" alt="logo" />
          <h1 className="text-3xl">Trimly</h1>
        </div>
        <div className="pt-3 flex items-center gap-7">
          <ul className="flex items-center gap-7">
            <li>
              <Link
                href="/"
                className={`hover:text-[#c8865c] transition-colors ${
                  activeLink === "home" ? "text-[#c8865c]" : ""
                }`}
                onClick={() => setActiveLink("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/masters"
                className={`hover:text-[#c8865c] transition-colors ${
                  activeLink === "masters" ? "text-[#c8865c]" : ""
                }`}
                onClick={() => setActiveLink("masters")}
              >
                Masters
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`hover:text-[#c8865c] transition-colors ${
                  activeLink === "services" ? "text-[#c8865c]" : ""
                }`}
                onClick={() => setActiveLink("services")}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className={`hover:text-[#c8865c] transition-colors ${
                  activeLink === "about-us" ? "text-[#c8865c]" : ""
                }`}
                onClick={() => setActiveLink("about-us")}
              >
                About us
              </Link>
            </li>
          </ul>
        </div>
        <div className="pt-1.5 flex items-center gap-4">
          <span>Phone : {phone}</span>
          <div className="flex items-center gap-5">
            <ClerkProvider>
              <SignedOut>
                <Link href="/sign-in">
                  <div
                    data-tooltip-id="login-tooltip"
                    data-tooltip-content="Login"
                    className="cursor-pointer"
                  >
                    <LogIn size={24} />
                  </div>
                </Link>
                <Tooltip
                  id="login-tooltip"
                  place="bottom"
                  className="text-xs px-2 py-1 text-black border border-gray-300 shadow"
                  style={{
                    fontSize: "12px",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </ClerkProvider>
            <Link
              href={"/profile"}
              className="p-3 px-4 bg-[#c8865c] text-white flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#b4744e]"
            >
              Book a visit <ArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobil navbar */}
      <div className="lg:hidden fixed bottom-0 w-full h-20 bg-[#c8865c] text-white flex justify-around items-center py-2 z-50">
        <Link
          href="/"
          className={`transition-transform ${
            activeLink === "home" ? "scale-125 text-white" : "text-white/70"
          }`}
          onClick={() => setActiveLink("home")}
        >
          <FiHome size={24} />
        </Link>
        <Link
          href="/masters"
          className={`transition-transform ${
            activeLink === "masters" ? "scale-125 text-white" : "text-white/70"
          }`}
          onClick={() => setActiveLink("masters")}
        >
          <FiUser size={24} />
        </Link>
        <Link
          href="/services"
          className={`transition-transform ${
            activeLink === "services" ? "scale-125 text-white" : "text-white/70"
          }`}
          onClick={() => setActiveLink("services")}
        >
          <FiShoppingCart size={24} />
        </Link>
        <Link
          href="/about-us"
          className={`transition-transform ${
            activeLink === "about-us" ? "scale-125 text-white" : "text-white/70"
          }`}
          onClick={() => setActiveLink("about-us")}
        >
          <FiInfo size={24} />
        </Link>
        <ClerkProvider>
          <SignedOut>
            <Link href="/sign-in">
              <div
                data-tooltip-id="login-tooltip"
                data-tooltip-content="Login"
                className="cursor-pointer"
              >
                <LogIn size={24} />
              </div>
            </Link>
            <Tooltip
              id="login-tooltip"
              place="bottom"
              className="text-xs px-2 py-1 text-black border border-gray-300 shadow"
              style={{
                fontSize: "12px",
                backgroundColor: "#fff",
                color: "#000",
              }}
            />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </ClerkProvider>
      </div>
    </>
  );
};

export default Navbar;
