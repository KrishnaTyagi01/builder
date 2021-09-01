import React from "react";
import Contact from "../components/contact";
import Faq from "../components/Faqs";
import Footer from "../components/Footer";
import Github from "../components/github";
import Hero from "../components/hero";
import Middle from "../components/Middle";
import Navbar from "../components/navbar";

const Landing = () => {
  return (
    <div className="landing">
      <Navbar showCreate={true} />
      <Hero />
      <Middle />
      <Faq />
      <Contact />
      <Github />
      <Footer />
    </div>
  );
};

export default Landing;
