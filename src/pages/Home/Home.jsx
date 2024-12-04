import React from "react";
import Hero from "../../components/Home-Components/Hero/Hero";
import Partners from "../../components/Home-Components/Partners/Partners";
import Offer from "../../components/Home-Components/offer/Offer";
import Super from "../../components/Home-Components/superPowers/Super";

const Home = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <Offer />
      <Super />
    </div>
  );
};

export default Home;
