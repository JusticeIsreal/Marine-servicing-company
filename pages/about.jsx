import Banner from "@/components/About/Banner";
import Body from "@/components/About/Body";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import React from "react";

function About() {
  return (
    <div style={{ background: "#f4f5fa", overflow: "hidden" }}>
      <Navbar />
      <Banner />
      <Body />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default About;
