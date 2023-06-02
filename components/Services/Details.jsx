import Link from "next/link";
import React from "react";

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
      <div className="services-con">
        <div className="serice-detail ">
          <h1>Marine Logistics</h1>
          <p>
            Calm Waters Integrated Services Limited is a leading provider of
            comprehensive marine logistics solutions. With a strong focus on
            efficiency, reliability, and customer satisfaction, we offer a wide
            range of services to support the smooth operation of maritime
            activities.
          </p>
          <button>Get free quote</button>
        </div>
        <img
          src="https://res.cloudinary.com/isreal/image/upload/v1685682756/calm%20waters%20project/picservices_dpvgru.jpg"
          alt=""
        />
      </div>
      <div className="services-con">
        <div className="serice-detail detail2">
          <h1>Naval Clearance</h1>
          <p>
            Our naval clearance services are designed to streamline the process
            of obtaining necessary approvals and permits for vessels. We work
            closely with regulatory authorities to ensure compliance with all
            relevant regulations and facilitate smooth clearance procedures. Our
            experienced team handles all documentation, coordinates logistics,
            and navigates through the complexities of the clearance process,
            minimizing delays and optimizing vessel turnaround time.
          </p>
          <a target="_blank" href="tel:+2348034652594">
            <button>Get free quote</button>
          </a>
        </div>
        <img
          src="https://res.cloudinary.com/isreal/image/upload/v1685682735/calm%20waters%20project/picservice1_zn4btu.jpg"
          alt=""
        />
      </div>
      <div className="services-con">
        <div className="serice-detail">
          <h1>Security Services</h1>
          <p>
            Safety and security are paramount in the maritime industry, and Calm
            Waters is committed to providing top-notch security services. Our
            highly trained security personnel are equipped with the latest
            technology and knowledge to safeguard vessels, crew members, and
            cargo. We implement robust security measures, including access
            control, surveillance systems, and risk assessment protocols, to
            mitigate threats and ensure a secure operating environment.
          </p>
          <a target="_blank" href="tel:+2348034652594">
            <button>Get free quote</button>
          </a>{" "}
        </div>
        <img
          src="https://res.cloudinary.com/isreal/image/upload/v1685682739/calm%20waters%20project/picservice2_yjsnwx.jpg"
          alt=""
        />
      </div>
      <div className="services-con">
        <div className="serice-detail detail2">
          <h1>Chandling</h1>
          <p>
            As a trusted chandling service provider, we understand the
            importance of timely and reliable provisioning for vessels. Our
            extensive network of suppliers allows us to source high-quality
            provisions, spare parts, and equipment, ensuring that vessels are
            well-equipped to meet their operational requirements. We handle the
            procurement, delivery, and storage of chandlery items, ensuring
            seamless supply chain management and minimizing downtime.
          </p>
          <a target="_blank" href="tel:+2348034652594">
            <button>Get free quote</button>
          </a>{" "}
        </div>
        <img
          src="https://res.cloudinary.com/isreal/image/upload/v1685682742/calm%20waters%20project/picservice3_fp1x0j.jpg"
          alt=""
        />
      </div>
      <div className="services-con">
        <div className="serice-detail">
          <h1>Marine Haulage</h1>
          <p>
            Efficient and reliable transportation of goods and equipment is
            essential for the maritime industry, and our marine haulage services
            are designed to meet these needs. We have a fleet of well-maintained
            vehicles and experienced drivers who specialize in handling marine
            cargo. Whether it's delivering supplies to vessels, transporting
            equipment to and from port facilities, or facilitating intermodal
            transportation, our marine haulage services ensure timely and secure
            movement of goods.
          </p>
          <a target="_blank" href="tel:+2348034652594">
            <button>Get free quote</button>
          </a>
        </div>
        <img
          src="https://res.cloudinary.com/isreal/image/upload/v1685682748/calm%20waters%20project/picservice4_wfjcl6.jpg"
          alt=""
        />
      </div>
      <div className="services-con">
        <div className="serice-detail detail2">
          <h1>Bunker Supply</h1>
          <p>
            We recognize the critical role of bunker fuel in maritime
            operations, and our bunker supply services are tailored to meet the
            specific requirements of our clients. We have established strong
            partnerships with reputable suppliers to ensure a reliable and
            consistent supply of high-quality bunker fuel. Our dedicated team
            monitors market trends and provides competitive pricing options,
            enabling our clients to optimize their fuel procurement strategies
            while adhering to regulatory standards.
          </p>
          <a target="_blank" href="tel:+2348034652594">
            <button>Get free quote</button>
          </a>{" "}
        </div>
        <img
          src="https://res.cloudinary.com/isreal/image/upload/v1685679626/calm%20waters%20project/abt_jyu5aq.jpg"
          alt=""
        />
      </div>
      <div className="services-con">
        <div className="serice-detail">
          <h1>Protective Angency</h1>
          <p>
            Calm waters is manned by some of the best hands in the industry and
            empowered to take operational decisions in the overall interest of
            the company; thus eliminating the bottlenecks often associated with
            delays in vessel operation and turnaround time.The company maintains
            excellent working relationship with third parties whose activities
            impact on shipping operations. We have acquired relevant DPR
            licenses to service the offshore, oil, and gas market this ensures
            quick turnaround of vessels under our agency.The publication of
            daily Tanker Report which captures in Real Time Tankers Loading /
            Discharging at various ports.
          </p>
          <a target="_blank" href="tel:+2348034652594">
            <button>Get free quote</button>
          </a>{" "}
        </div>
        <img
          src="https://res.cloudinary.com/isreal/image/upload/v1685682751/calm%20waters%20project/picservice6_pfi3dr.jpg"
          alt=""
        />
      </div>
      <p>
        At Calm Waters Integrated Services Limited, we are committed to
        delivering comprehensive and reliable solutions in marine logistics,
        naval clearance, security services, chandling, marine haulage, and
        bunker supply. With our expertise, industry knowledge, and
        customer-centric approach, we strive to be the preferred partner for all
        maritime needs.
      </p>
    </div>
  );
}

export default Details;
