import Banner from "@/components/Contact/Banner";
import Details from "@/components/Contact/Details";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import React from "react";

function contact() {
  return (
    <div style={{ background: "#f4f5fa", overflow: "hidden" }}>
      <Navbar />
      <Banner />
      <Details />
      <Newsletter />
      <Footer />
     
    </div>
  );
}

export default contact;
