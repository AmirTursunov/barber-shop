"use client";
import { SignOutButton } from "@clerk/nextjs";
import React, { use, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const Navbar = () => {
  const [phone, setPhone] = useState("");
  useEffect(() => {
    getPhone();
  }, []);
  async function getPhone() {
    const { data } = await supabase.from("settings").select("phone").single();
    const phone = data?.phone;
    setPhone(phone);
  }

  return (
    <div className="flex justify-between items-center px-10">
      <div className="flex items-center">
        <img className="w-25" src="barber.png" alt="logo" />
        <h1 className="text-3xl">Trimly</h1>
      </div>
      <div className="pt-1.5">
        <ul className="flex items-center gap-7">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/masters">Masters</a>
          </li>
          <li>
            <a href="/masters">Services</a>
          </li>
          <li>
            <a href="/masters">About Us</a>
          </li>
        </ul>
      </div>
      <div className="pt-1.5 flex items-center gap-4">
        <span>Phone : {phone}</span>
        <SignOutButton />
      </div>
    </div>
  );
};

export default Navbar;
