import Image from "next/image";
import Link from "next/link";
import React from "react";

function Aboutus() {
  return (
    <div className=" homeabout-main-con">
      <h1>
        <span>About Us</span>
      </h1>

      <div className="client-logo">
        <div className="img">
          <h3>100+</h3>
          <p>Esteem clients</p>
        </div>
        <div className="img">
          <h3>1k+</h3>
          <p>Customer Review</p>
        </div>
        <div className="img">
          <h3>10+</h3>
          <p>Years Experience</p>
        </div>
        <div className="img">
          <h3>100K+</h3>
          <p>Completed Projects</p>
        </div>
      </div>
      <div className="lower-part">
        <Image
          src="https://res.cloudinary.com/isreal/image/upload/v1685679626/calm%20waters%20project/abt_jyu5aq.jpg"
          alt="img"
          width={350}
          height={300}
          className="lower-img"
        />

        <div className="lower-txt">
          <p>
            Calm Waters Integrated Services Limited is a Nigerian oil & gas,
            Maritime support services and Logistics Company. The need for
            security, risk assessment, quality assurance and efficient energy
            supply across the world cannot be overemphasized; we at Calm Waters
            are poised to provide excellent services tailored to meet our
            clients’ needs. We Leverage our wealth of experience in the oil and
            gas industry, shipping and ship management, ship security, port
            facility security, procurement and maintenance services, to provide
            seamless services to our clients, in line with industry best
            practices and sustainability principles.
          </p>
          <Link href="about">
            <button>Know more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
