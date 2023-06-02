import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Banner from "@/components/Services/Banner";
import Details from "@/components/Services/Details";
import React from "react";

function Services() {
  return (
    <div style={{ background: "#f4f5fa", overflow: "hidden" }}>
      <Navbar />
      <Banner />
      <Details />
      <Newsletter />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Services;
