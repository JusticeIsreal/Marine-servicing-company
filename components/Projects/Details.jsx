import React from "react";
import ProjectImg from "../../components/Asset/Projects";
function Details() {
  return (
    <div className="body-main-con">
      {" "}
      <h5>
        <span>Calm waters Ltd {">"} </span> Projects
      </h5>
      <div className="logo">
        {" "}
        <img src="/wholename.png" alt="" />
      </div>
      <div className="project-img">
        {ProjectImg.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt="" />
            <h3>{item.txt}</h3>
          </div>
        ))}
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
