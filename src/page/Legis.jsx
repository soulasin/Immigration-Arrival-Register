import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Legislation from "../components/Legislation";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Legislation />
      <Footer />
    </div>
  );
}