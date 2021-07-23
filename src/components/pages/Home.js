import React from "react";
import Nav from "../Nav";
import Hero from "../Home/Hero";
import Mission from "../Home/Mission";
import Footer from "../Footer";
import Team from "../Home/Team";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Mission />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
