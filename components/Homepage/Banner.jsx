import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Fade, Slide } from "react-slideshow-image";
import BannerImg from "../../components/Asset/Bannerimages";
import { ImPointRight } from "react-icons/im";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
function Banner() {
  return (
    <div className="banner-main-con">
      <div className="content">
        {/* SIAPLAYING PRODUCTS IMAGES*/}
        <div className="carousel-main-con">
          <div className="carousel-con">
            <Fade arrows={false}>
              {BannerImg.map((item, index) => (
                <div key={item.id}>
                  <div className="carousel-items-con">
                    <Image
                      src={item.img}
                      alt="img"
                      className="img"
                      fill
                      sizes="100vw"
                      style={{
                        right: "0",
                      }}
                    />
                  </div>
                  <div className="banner-text-main-con">
                    <div className="banner-text-con">
                      <div className="text-con">
                        <h1>
                          We Are Your Trusted Partner in Marine{" "}
                          <span>{item.txt}</span>
                        </h1>
                        <p>
                          we at Calm Waters are poised to provide excellent
                          services tailored to meet our clients’ needs
                        </p>
                      </div>

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
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
