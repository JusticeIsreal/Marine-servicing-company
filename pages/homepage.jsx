import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Footer";
import Aboutus from "@/components/Homepage/Aboutus";
import Banner from "@/components/Homepage/Banner";
import Benefits from "@/components/Homepage/Benefits";
import Clients from "@/components/Homepage/Clients";
import Services from "@/components/Homepage/Services";
import Testimony from "@/components/Homepage/Testimony";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import React from "react";

function me() {
  return (
    <div>
     
      <Navbar />
      <Banner />
      <Clients />
      <Aboutus />
      <Services />
      <Benefits />
      <Testimony />
      <Newsletter />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default me;
