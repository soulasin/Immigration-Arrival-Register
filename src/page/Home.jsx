import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSlider from "../components/home/HeroSlider";
import InfoSection from "../components/home/InfoSection";
import Services from "../components/home/Services";
import NewsSection from "../components/home/NewsSection";
import VisaForm from "../components/register/VisaForm";


export default function Home() {
  return (
    <div>
      <Navbar />
      <VisaForm/>
      <Footer />
    </div>
  );
}
