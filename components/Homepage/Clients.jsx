import Image from "next/image";
import React from "react";
import Clientlogos from "../Asset/Clientlogos";
function Clients() {
  return (
    <div className="client-main-con">
      <h1>
        Over <span>100+ clients</span> nation wide
      </h1>
      <div className="client-logo">
        {Clientlogos.map((item) => (
          <Image
            src={item.logo}
            key={item.id}
            alt="img"
            className="img"
            width={150}
            height={115}
          />
        ))}
      </div>
    </div>
  );
}

export default Clients;
