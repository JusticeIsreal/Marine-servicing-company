import React from "react";
import ContactForm from "./ContactForm";

function Details() {
  return (
    <div className="body-main-con">
      {" "}
      <h5>
        <span>Calm waters Ltd {">"} </span> Services
      </h5>
      <div className="logo">
        {" "}
        <img src="/wholename.png" alt="" />
      </div>
      <ContactForm />
    </div>
  );
}

export default Details;
