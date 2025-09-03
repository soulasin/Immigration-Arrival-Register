import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImmigrationArrivalForm from "../components/immigration/ImmigrationArrivalForm";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ImmigrationArrivalForm />
      <Footer />
    </div>
  );
}
