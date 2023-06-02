import { Carousel } from "@mantine/carousel";
import { Blockquote } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useRef, useState } from "react";
function Testimony() {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  return (
    <div className="ad-con">
      <p>Our Customers</p>
      <h1>Review</h1>
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
            <Blockquote cite="– Canaan Omoghene" className="backquote">
              <p>
                We have been impressed with the expertise and professionalism of
                Calm Waters Ltd. Their team has been instrumental in keeping our
                marine fleet in top shape.
              </p>
            </Blockquote>
            <img
              src="https://res.cloudinary.com/isreal/image/upload/v1685705342/calm%20waters%20project/WhatsApp_Image_2023-06-01_at_6.41.07_PM_nkuyh0.jpg"
              alt=""
            />
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="ad-img">
            {" "}
            <Blockquote cite="– Engr. J.I Agbonma" className="backquote">
              <p>
                Calm Waters Ltd has been our trusted partner for marine
                servicing needs.They have consistently provided top-notch
                service, ensuring our vessels are in optimal condition. Highly
                recommend their services!
              </p>
            </Blockquote>
            <img
              src="https://res.cloudinary.com/isreal/image/upload/v1685681688/calm%20waters%20project/IMG_5103_aeqmu3.jpg"
              alt=""
            />
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="ad-img">
            {" "}
            <Blockquote cite="–Engr. B.E Onyekachi" className="backquote">
              <p>
                We have been relying on Calm Waters Ltd. Their professionalism
                and attention to detail are commendable. they always deliver
                excellent results. Truly a reliable partner in the maritime
                industry
              </p>
            </Blockquote>
            <img
              src="https://res.cloudinary.com/isreal/image/upload/v1685681671/calm%20waters%20project/WhatsApp_Image_2023-06-01_at_7.37.44_PM_1_sjohao.jpg"
              alt=""
            />
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="ad-img">
            {" "}
            <Blockquote cite="– Justice Oghenetegha" className="backquote">
              <p>
                Calm Waters Ltd is our go-to company for marine servicing and
                inspections. Their technicians are thorough and efficient,
                ensuring our vessels meet all safety standards.
              </p>
            </Blockquote>
            <img
              src="https://res.cloudinary.com/isreal/image/upload/v1685681772/calm%20waters%20project/client1_hj7jzf.jpg"
              alt=""
            />
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}

export default Testimony;
