import React from "react";
import { Container } from "reusecore/Layout";
import logo from "assets/images/app/logo_eprogram_white.webp";
import FotterWrapper from "./footer.style";
import CalendarIcon from '../../assets/images/calendar.webp'

const Footer = () => {
  return (
    <FotterWrapper>
      <Container>
        <div className="footer-container">
          <a href="/#">
            <img loading="lazy" className="logo" src={logo} alt="logo" />
          </a>
          <a href="https://calendly.com/souhaila-mouchtanim-eprogram/call?month=2023-02" rel="noreferrer" target="_blank">
            <div className="calendar-container" >
              <img loading="lazy" alt="Calendar icon" src={CalendarIcon} />
              <span>Prenez rendez-vous avec notre account manager</span>
            </div>
          </a>
        </div>
      </Container>
    </FotterWrapper>
  );
};

export default Footer;
