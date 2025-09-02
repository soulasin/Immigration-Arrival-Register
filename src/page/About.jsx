import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
import AboutHistory from "../components/about/AboutHistory";
import MissionVision from "../components/about/MissionVision";
import TeamSection from "../components/about/TeamSection";
import ValuesSection from "../components/about/ValuesSection";


export default function About() {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <AboutHistory />
      <MissionVision />
      <TeamSection />
      <ValuesSection />
      <Footer />
    </div>
  );
}
