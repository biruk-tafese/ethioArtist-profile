import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import WhoAmI from "../components/whoAmI";
import ShowReels from "../components/ShowReels";
import Rewards from "../components/rewards";
import Contact from "../components/contact";
import Hero from "../components/Hero";

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <div id="hero" style={{ margin: "40px"}}>
        <Hero />
      </div>

      <div id="who-am-i" style={{ margin: "40px"}}>
        <WhoAmI />
      </div>
      <div id="showreels" style={{ margin: "40px"}}>
       <ShowReels />
      </div>
      <div id="rewards" style={{ margin: "40px"}}>
        <Rewards />
      </div>
      <div id="contact" style={{ margin: "40px"}}>
       <Contact />
      </div>
    </div>
  );
};

export default HomePage;