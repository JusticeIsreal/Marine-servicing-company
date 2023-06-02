import React from "react";
import { RiFacebookLine, RiTwitterLine } from "react-icons/ri";
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer-main-con">
      <div className="footer-con">
        <div className="top-con">
          <div className="img-con">
            <img src="/wholelogo.png" alt="img" />
          </div>
          <p>RSO/Shipping/Marine/Procurement/Logistics</p>
          <div className="icon-con">
            <RiFacebookLine className="icon" />
            <AiOutlineYoutube className="icon" />
            <AiOutlineInstagram className="icon" />
            <RiTwitterLine className="icon" />
            <AiOutlineWhatsApp className="icon" />
          </div>
        </div>
        <div className="lower-con">
          <div className="quick-link">
            <h3>Navigate</h3>
            <Link href="/" className="links">
              Home
            </Link>
            <Link href="/about" className="links">
              About
            </Link>
            <Link href="/services" className="links">
              Services
            </Link>
            <Link href="/team" className="links">
              Our Team
            </Link>
            <Link href="/projects" className="links">
              Projects
            </Link>
            <Link href="/contact" className="links">
              Contact
            </Link>
          </div>

          <div className="quick-link">
            <h3>Other Links</h3>
            <Link href="/team" className="links">
              Company profile
            </Link>
            <Link href="/about" className="links">
              Company policy
            </Link>
          </div>
          <div className="quick-link">
            <h3>Contact</h3>
            <p className="links">
              <b>E-mail Address: </b>{" "}
              <a href="mailto:Info@calmwatersltd.com">Info@calmwatersltd.com</a>{" "}
              <br />
              <a href="mailto:Operations@calmwatersltd.com">
                Operations@calmwatersltd.com
              </a>
              .
            </p>
            <p className="links">
              <b>Physical Address:</b> House 24 plot 3006 Rafiu Babatunde Tinubu
              close Amuwo Odofin, Lagos, Nigeria
            </p>
            <p className="links">(+234) 803 465 2594</p>
            <p className="links">(+234) 803 968 8200</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright © Calm waters ltd {new Date().getFullYear()}. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
