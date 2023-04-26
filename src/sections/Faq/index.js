import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon
} from "reusecore/Accordion";

import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

import FaqImage from "assets/images/app/faq-illustration.webp";

import data from "assets/data/faq";

import FaqSectionWrapper from "./faqSection.style";

const Faq = () => {
  return (
    <FaqSectionWrapper id="faq">
      <Container fullWidthSM>
        <Row Vcenter={true}>
          <Col className="faq-thumb-block" xs={12} sm={6}>
            <div className="faq-thumb">
              <img loading="lazy" alt="Faq" src={FaqImage} />
            </div>
          </Col>
          <Col className="faq-content-block" xs={12} sm={6}>
            <SectionTitle
              leftAlign={true}
              UniWidth="100%"
            >
              <div className="title-container">
                <h2>
                  <span>Facile et efficace pour toutes vos conventions</span>
                </h2>
                <div className="underline underline-left"></div>
              </div>
            </SectionTitle>
            <Accordion allowZeroExpanded>
              {data.faqs.map((faq, index) => (
                <AccordionItem key={index}>
                  <AccordionTitle>
                    <h5>{faq.title}</h5>
                    <IconWrapper>
                      <OpenIcon>
                        <IoIosArrowForward />
                      </OpenIcon>
                      <CloseIcon>
                        <IoIosArrowDown />
                      </CloseIcon>
                    </IconWrapper>
                  </AccordionTitle>
                  <AccordionBody>
                    <p>{faq.content}</p>
                  </AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>

          </Col>
        </Row>
      </Container>
    </FaqSectionWrapper>
  );
};

export default Faq;
