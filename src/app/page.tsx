"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();
  function click() {
    console.log(1234);
    router.push("/sign-in");
  }
  return (
    <div>
      <button onClick={click}>Sign in</button>
    </div>
  );
};

export default Home;
