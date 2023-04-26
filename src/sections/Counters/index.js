import React from "react";
import likeIcon from "../../assets/images/like.png"
import Borders from "../../assets/images/borders.png"
import Dashboard from "../../assets/images/dashboard.png"
import Diamond from "../../assets/images/diamond.png"
import Money from "../../assets/images/money.png"

import { Container, Row, Col } from "reusecore/Layout";
import Counter from "reusecore/Counter";

import CounterSectionWrapper from "./counterSection.style";

const Counters = () => {
  return (
    <CounterSectionWrapper>
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <div className="counter__item">
              <div style={{ backgroundImage: `url(${Borders})`, objectFit: "cover", backgroundRepeat: "no-repeat",  width: "150px", height: "50px", display: "flex", justifyContent: "center", alignItems: "start" }}>
                <img loading="lazy" alt="Clients" style={{ position: 'absolute' }} src={Diamond} />
              </div>
              <Counter end={60} suffix="+" />
              <p>Clients</p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="counter__item">
            <div style={{ backgroundImage: `url(${Borders})`, objectFit: "fill", backgroundRepeat: "no-repeat",  width: "150px", height: "50px", display: "flex", justifyContent: "center", alignItems: "start" }}>
                <img loading="lazy" alt="Adhérents" style={{ position: 'absolute' }} src={likeIcon} />
              </div>
              <Counter end={700} suffix="k+" />
              <p>Employés adhérents</p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="counter__item">
            <div style={{ backgroundImage: `url(${Borders})`, objectFit: "fill", backgroundRepeat: "no-repeat",  width: "150px", height: "50px", display: "flex", justifyContent: "center", alignItems: "start" }}>
                <img loading="lazy" alt="Conventions" style={{ position: 'absolute' }} src={Dashboard} />
              </div>
              <Counter end={110} suffix="+" />
              <p>Conventions</p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="counter__item">
            <div style={{ backgroundImage: `url(${Borders})`, objectFit: "fill", backgroundRepeat: "no-repeat",  width: "150px", height: "50px", display: "flex", justifyContent: "center", alignItems: "start" }}>
                <img loading="lazy" alt="Montant économisé" style={{ position: 'absolute' }} src={Money} />
              </div>
              <Counter end={15.8} suffix="M" />
              <p>Montant économisé  (MAD)</p>
            </div>
          </Col>
        </Row>
      </Container>
    </CounterSectionWrapper>
  );
};

export default Counters;
