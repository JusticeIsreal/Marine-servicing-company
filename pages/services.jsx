import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Banner from "@/components/Services/Banner";
import React from "react";

function Services() {
  return (
    <div style={{ background: "#f4f5fa", overflow: "hidden" }}>
      <Navbar />
      <Banner />

      <Newsletter />
      <Footer />
    </div>
  );
}

export default Services;
