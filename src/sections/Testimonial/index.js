import React from "react";

import { Container } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";

import TestimonialWrapper from "./testimonial.style";
import Clients from "../Clients/index";

const Testimonial = () => {

  return (
    <TestimonialWrapper id="testimonial">
      <Container>
          <SectionTitle leftAlign={true} UniWidth="100%">
            <div className="title-container-middle">
              <h2>
                <span>Nos clients</span>
              </h2>
              <div className="underline"></div>
            </div>
          </SectionTitle>
          <Clients />
      </Container>
    </TestimonialWrapper >
  );
};

export default Testimonial;
