import ContactForm from '@/components/Contact/ContactForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import Banner from '@/components/Team/Banner';
import Details from '@/components/Team/Details';
import React from 'react'

function team() {
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

export default team