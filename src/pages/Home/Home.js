import Footer from "layouts/Footer/Footer";
import Hero from "layouts/Hero/Hero";
import Navbar from "layouts/Navbar/Navbar";
import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;
