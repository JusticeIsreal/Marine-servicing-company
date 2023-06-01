import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { ImPointRight } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";

function Benefits() {
  return (
    <div>
      <div>
        <h3>
          We are avaliable 24 / 7 to attend to you, contact us and get free
          estimate
        </h3>

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

      <div>
        <div>
          <h1>Why Choose Us For Your Services</h1>
          <p>
            At Calm Waters, our aim is to use the special skills acquired by
            management to mobilize local endowments, generate employment &
            income while developing long-term technological and managerial
            capabilities for our people and host communities.
          </p>
          <Link href="/">Lets Talk</Link>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
