import React from "react";
import Hero from "../components/Hero";
import WhoAmI from "../components/whoAmI";
import Navbar from "../components/Navbar";
import ShowReels from "../components/ShowReels";
import Rewards from "../components/rewards";
import Contact from "../components/contact";
import Gallery from "../components/gallery";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      {/* Add padding-top equal to the navbar height (e.g., 64px) */}
      <div style={{ paddingTop: '64px', padding: '2rem' }}>
        <Hero />
        <div id="who-am-i">
          <WhoAmI />
        </div>
        {/* <div id="career-summary">
          <p>Career Summary Section</p>
        </div> */}
        <div id="showreels" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ShowReels />
        </div>
        <div id="gallery" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Gallery />
        </div>
        <div id="rewards">
          {/* Replace <p> tag with div or other block element */}
         <Rewards />
        </div>
        <div id="contact">
          {/* Replace <p> tag with div or other block element */}
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default HomePage;