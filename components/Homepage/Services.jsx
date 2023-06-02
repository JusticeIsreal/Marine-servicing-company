import React from "react";
import Serviceimage from "../../components/Asset/Serviceimage";
import { LuArrowRightCircle } from "react-icons/lu";
import Link from "next/link";

function Services() {
  return (
    <div className="home-services-main-con">
      <h1> Our Services</h1>
      <p>We Provide You With The Best, Safe And Reliable Logistics Solutions</p>
      <div className="services">
        <div className="services-grid-con">
          {Serviceimage.map((item) => (
            <div className="services-grid" key={item.id}>
              <Link href="/services">
                <img src={item.img} alt="" />
                <p>{item.txt}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
