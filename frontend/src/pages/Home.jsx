import React from "react";
import NavBar from "../component/NavBar";
import Hero from "../component/Hero";
import Features from "../component/Features";
import Pricing from "../component/Pricing";

function Home() {
  return (
    <div>
      <NavBar />
      <main className="">
        <Hero />
        <div className="">
          <Features />
        </div>
        <Pricing/>
      </main>
      
    </div>
  );
}

export default Home;
