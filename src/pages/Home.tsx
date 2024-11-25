import React from "react";
import Navbar from "../custom-components/Navbar";
import HeroSection from "../custom-components/HeroSection";

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <HeroSection />
      </main>
    </div>
  );
};

export default Home;
