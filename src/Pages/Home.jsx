import React, { useEffect } from "react";
import Hero from "../components/HomeComponents/HeroSection/Hero";
import Trusted from "../components/HomeComponents/TrustedSection/Trusted";
import Help from "../components/HomeComponents/HelpSection/Help";
import MostaqelHelp from "../components/HomeComponents/HelpSection/MostaqelHelp";
import Freelancers from "../components/HomeComponents/FreelancersSection/Freelancers";
import Ready from "../components/HomeComponents/ReadySection/Ready";
import Ask from "../components/HomeComponents/AskSection/Ask";

function Home() {
  useEffect(() => {
    document.title = "Mostaqel-Clone | Home";
  }, []);
  return (
    <>
      <Hero />
      <Trusted />
      <Help/>
      <MostaqelHelp/>
      <Freelancers/>
      <Ready/>
      <Ask/>
    </>
  );
}

export default Home;
