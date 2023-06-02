import React from "react";

import { Tabs } from "@mantine/core";
import ProjectImg from "../../components/Asset/Projects";

function Details() {
  const onShore = ProjectImg.filter((item) => item.type === "onshore");
  const offShore = ProjectImg.filter((item) => item.type === "offshore");
  return (
    <div className="body-main-con">
      <h5>
        <span>Calm waters Ltd {">"} </span> Projects
      </h5>
      <div className="logo">
        <img src="/wholename.png" alt="" />
      </div>
      <Tabs color="cyan" variant="outline" radius="xs" defaultValue="gallery">
        <Tabs.List>
          <Tabs.Tab value="gallery" className="msg-heading">
            OFF SHORE
          </Tabs.Tab>
          <Tabs.Tab value="messages" className="msg-heading">
            ON SHORE
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery" pt="xs">
          <div className="project-img">
            {offShore.map((item) => (
              <div key={item.id}>
                <img src={item.img} alt="" />
                <h3>{item.txt}</h3>
              </div>
            ))}
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="messages" pt="xs">
          <div className="project-img">
            {onShore.map((item) => (
              <div key={item.id}>
                <img src={item.img} alt="" />
                <h3>{item.txt}</h3>
              </div>
            ))}
          </div>
        </Tabs.Panel>
      </Tabs>
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
