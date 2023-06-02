import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Banner from "@/components/Projects/Banner";
import Details from "@/components/Projects/Details";
import React from "react";

function Projects() {
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

export default Projects;
