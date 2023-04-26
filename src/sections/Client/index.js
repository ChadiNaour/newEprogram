import React, { useState } from "react";

import { SlickSlider, SliderItem } from "reusecore/SlickSlider";
import { Container } from "reusecore/Layout";
import Resume from "./catalogue"

import Client1 from "assets/images/app/clients/client-1.webp";
import Client2 from "assets/images/app/clients/client-2.webp";
import Client3 from "assets/images/app/clients/client-3.webp";
import Client4 from "assets/images/app/clients/client-4.webp";
import Client5 from "assets/images/app/clients/client-5.webp";
import Client6 from "assets/images/app/clients/client-6.webp";
import Client7 from "assets/images/app/clients/client-7.webp";
import Client8 from "assets/images/app/clients/client-8.webp";
import Client9 from "assets/images/app/clients/client-9.webp";
import Client10 from "assets/images/app/clients/client-10.webp";
import Client11 from "assets/images/app/clients/client-11.webp";
import Client12 from "assets/images/app/clients/client-12.webp";
import Client13 from "assets/images/app/clients/client-13.webp";
import Client14 from "assets/images/app/clients/client-14.webp";
import Client15 from "assets/images/app/clients/client-15.webp";
import Client16 from "assets/images/app/clients/client-16.webp";
import Client17 from "assets/images/app/clients/client-17.webp";
import Client18 from "assets/images/app/clients/client-18.webp";
import Client19 from "assets/images/app/clients/client-19.webp";
import Client20 from "assets/images/app/clients/client-20.webp";
import Client21 from "assets/images/app/clients/client-21.webp";
import Client22 from "assets/images/app/clients/client-22.webp";
import Client23 from "assets/images/app/clients/client-23.webp";
import Button from "../../reusecore/Button/index"


import ClientsSectionWrapper from "./clientSection.style";

const Client = () => {
  const [open, setOpen] = useState(false);
  const Clients = [
    { id: 0, name: "samsung", img: Client1 },
    { id: 1, name: "dyson", img: Client2 },
    { id: 2, name: "jbl", img: Client3 },
    { id: 3, name: "nespresso", img: Client4 },
    { id: 4, name: "dell", img: Client5 },
    { id: 5, name: "logitech", img: Client6 },
    { id: 6, name: "moulinex", img: Client7 },
    { id: 7, name: "nikon", img: Client8 },
    { id: 8, name: "lenovo", img: Client9 },
    { id: 9, name: "msi", img: Client10 },
    { id: 10, name: "sonos", img: Client11 },
    { id: 11, name: "rowenta", img: Client12 },
    { id: 12, name: "crockpot", img: Client13 },
    { id: 13, name: "steamon", img: Client14 },
    { id: 14, name: "aeg", img: Client15 },
    { id: 15, name: "solac", img: Client16 },
    { id: 16, name: "oster", img: Client17 },
    { id: 17, name: "tefal", img: Client18 },
    { id: 18, name: "robot", img: Client19 },
    { id: 19, name: "palaroid", img: Client20 },
    { id: 20, name: "karcher", img: Client21 },
    { id: 21, name: "arthur martin", img: Client22 },
    { id: 22, name: "brabantia", img: Client23 },
  ];
  const settings = {
    autoplay: true,
    infinite: true,
    dots: true,
    dotsClass: "button__bar",
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
      {open && <Resume setOpen={setOpen} />}
      <ClientsSectionWrapper>
        <Container>
          <SlickSlider {...settings}>
            {Clients.map((client) => (
              <SliderItem key={client.id}>
                <img loading="lazy" src={client.img} alt={client.name} />
              </SliderItem>
            ))}
          </SlickSlider>
          <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop:"30px"}}>
            <Button onClick={(e) => setOpen(true)} className="integration-btn">Catalogue des Marques</Button>
          </div>
        </Container>
      </ClientsSectionWrapper >
    </>
  );
};

export default Client;
