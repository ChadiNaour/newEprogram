import React from "react";

import { SlickSlider, SliderItem } from "reusecore/SlickSlider";
import { Container } from "reusecore/Layout";

import Client1 from "assets/images/app/testimonial/testimonial-thumb-1.webp";
import Client2 from "assets/images/app/testimonial/testimonial-thumb-2.webp";
import Client3 from "assets/images/app/testimonial/testimonial-thumb-3.webp";
import Client4 from "assets/images/app/testimonial/testimonial-thumb-4.webp";
import Client5 from "assets/images/app/testimonial/testimonial-thumb-5.webp";
import Client6 from "assets/images/app/testimonial/testimonial-thumb-6.webp";


import ClientsSectionWrapper from "./clientSection.style";

const Client = () => {
  const Clients = [
    { id: 0, name: "Attijari Wafabank", img: Client1 },
    { id: 1, name: "Webhelp", img: Client2 },
    { id: 2, name: "Royal Air Maroc", img: Client3 },
    { id: 3, name: "Ocp", img: Client4 },
    { id: 4, name: "Dell", img: Client5 },
    { id: 5, name: "Fm6 Education", img: Client6 },
  ];
  const settings = {
    autoplay: true,
    infinite: true,
    dots: true,
    dotsClass: "button__bar",
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        }
      }
    ]
  };
  return (
    <>
      <ClientsSectionWrapper>
        <Container>
          <SlickSlider {...settings}>
            {Clients.map((client) => (
              <SliderItem key={client.id}>
                <img loading="lazy" className="image" src={client.img} alt={client.name} />
              </SliderItem>
            ))}
          </SlickSlider>
        </Container>
      </ClientsSectionWrapper >
    </>
  );
};

export default Client;
