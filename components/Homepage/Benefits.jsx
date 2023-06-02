import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { ImPointRight } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";

function Benefits() {
  return (
    <div className="benefit-main-con">
      <div className="benefit-con">
        <div className="benefit-first-con">
          <h1>Why Choose Us For Your Services</h1>
          <p>
            At Calm Waters, our aim is to use the special skills acquired by
            management to mobilize local endowments, generate employment &
            income while developing long-term technological and managerial
            capabilities for our people and host communities.
          </p>
          <a target="_blank" href="tel:+2348034652594" className="btn">
            <div>Lets Talk</div>{" "}
          </a>
        </div>
        <div className="benefit-second-con">
          <div className="benefit benefit1 benefit2">
            <img
              src="https://res.cloudinary.com/isreal/image/upload/v1685680966/calm%20waters%20project/customerservice_x5mssa.png"
              alt=""
            />
            <div className="detail">
              <h3>24/7 Service</h3>
              <p>
                We are avaliable 24/7 with great customer service relations to
                attend to all your enquiries
              </p>
            </div>
          </div>
          <div className="benefit benefit1 ">
            <img
              src="https://res.cloudinary.com/isreal/image/upload/v1685680972/calm%20waters%20project/expert_jwynet.png"
              alt=""
            />
            <div className="detail">
              <h3>Proffessionals</h3>
              <p>
                We are comprise of the best team of proffessionals to give hight
                quality services
              </p>
            </div>
          </div>
          <div className="benefit benefit2">
            <img
              src="https://res.cloudinary.com/isreal/image/upload/v1685680961/calm%20waters%20project/bestsolution_tvav6p.png"
              alt=""
            />
            <div className="detail">
              <h3>Tech Solution</h3>
              <p>
                We are apply technologically driven solutions ,to ensure quality
                ,acuracy and state of the art solutions
              </p>
            </div>
          </div>
          <div className="benefit">
            <img
              src="https://res.cloudinary.com/isreal/image/upload/v1685680976/calm%20waters%20project/provenrecord_r3wipw.png"
              alt=""
            />
            <div className="detail">
              <h3>Track record</h3>
              <p>
                Over the years we have accomplished great feets with excellent
                proven track records to show
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
