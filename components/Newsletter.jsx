import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { ImPointRight } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";

function Newsletter() {
  return (
    <div className="newsletter-main-con">
      <div className="newsletter-text">
        <h1>
          24 / 7 We are avaliable to meet your needs. Contaact us today and get
          a free quote
        </h1>
        <div className="contact">
          <div className="contact-ions">
            <div className="click">
              <p>Click</p>
              <ImPointRight className="icon" />
            </div>
            <FiPhone className="icons" />
            <MdOutlineEmail className="icons" />
            <FaWhatsapp className="icons" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
