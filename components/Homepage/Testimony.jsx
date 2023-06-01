import { Carousel } from "@mantine/carousel";
import { Blockquote } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useRef, useState } from "react";
function Testimony() {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  return (
    <div className="ad-con">
      <p>Our Customer</p>
      <h1>Reviews</h1>
      <Carousel
        withIndicators
        // height={200}
        slideSize="33.333333%"
        slideGap="md"
        dragFree
        loop
        align="start"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        plugins={[autoplay.current]}
      >
        <Carousel.Slide>
          <div className="ad-img">
            {" "}
            <Blockquote cite="– Kola Ibrahim" className="backquote">
              <p>
                This website is amazing! They have the best customer serveice
                response available. I received my order without stress. Highly
                recommended!
              </p>
            </Blockquote>
            <img src="/review1.jpeg" alt="" />
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="ad-img">
            {" "}
            <Blockquote cite="– Kola Ibrahim" className="backquote">
              <p>
                This website is amazing! They have the best customer serveice
                response available. I received my order without stress. Highly
                recommended!
              </p>
            </Blockquote>
            <img src="/review1.jpeg" alt="" />
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="ad-img">
            {" "}
            <Blockquote cite="– Kola Ibrahim" className="backquote">
              <p>
                This website is amazing! They have the best customer serveice
                response available. I received my order without stress. Highly
                recommended!
              </p>
            </Blockquote>
            <img src="/review1.jpeg" alt="" />
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="ad-img">
            {" "}
            <Blockquote cite="– Kola Ibrahim" className="backquote">
              <p>
                This website is amazing! They have the best customer serveice
                response available. I received my order without stress. Highly
                recommended!
              </p>
            </Blockquote>
            <img src="/review1.jpeg" alt="" />
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}

export default Testimony;
