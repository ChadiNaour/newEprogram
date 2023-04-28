import React, { useEffect } from "react";
import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";

import Icon1 from "assets/images/app/features/icon1.png";
import Icon2 from "assets/images/app/features/icon2.png";
import Icon3 from "assets/images/app/features/icon3.png";
import Icon4 from "assets/images/app/features/icon4.png";
import Icon5 from "assets/images/app/features/icon5.png";
import Icon6 from "assets/images/app/features/icon6.png";

import FeturesSectionWrapper from "./fetures.style";
import { m, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const conventionsAnimation = useAnimation();
  const [ref, inView] = useInView();
  const getButtonVariants = (number) => {
    return {
      hidden: {
        opacity: 0,
        y: 50
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          opacity: { ease: "linear" },
          delay: 0.1 + number * 0.1,
          duration: 0.6
        }
      }
    }
  }

  useEffect(() => {
    if (inView) {
      conventionsAnimation.start("visible");
      return () => conventionsAnimation.stop;
    }
  }, [inView])

  return (
    <FeturesSectionWrapper id="features">
      <Container fullWidthSM>
        <SectionTitle UniWidth="65%" >
          <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "15px", marginBottom: "60px" }}>
            <h2><span>
              Une plateforme all-in-one
            </span>
            </h2>
            <div className="underline"></div>
          </div>
        </SectionTitle>
        <div className="banner-image" alt="Light-blue banner">
          <h2>
            Gestion externalisée des conventions
          </h2>
          <h3>Nous pronons en charge de vos convention de A à Z,de la négociation à la livraison des produits à vos collaborateurs.</h3>
        </div>
        <Row>
          <div
            transition={{ staggerChildren: 0.1 }} style={{ display: "flex", flexWrap: "wrap" }}>
            <Col xs={12} sm={6} lg={4}>
              <m.div animate={conventionsAnimation} initial="hidden" variants={getButtonVariants(0)} className="fetures-block">
                <div className="fetures-icon-block">
                  <img loading="lazy" alt="Service icon" src={Icon1} />
                </div>
                <div className="data_wrapper">
                  <h3>
                    Des prix réduits<br /> pour tous
                  </h3>
                  <p>
                    Que vous soyez un multinationale ou une PME, vous bénéficiez des mêmes pris conventionnés.
                  </p>
                </div>
              </m.div>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <m.div ref={ref} animate={conventionsAnimation} initial="hidden" variants={getButtonVariants(1)} className="fetures-block">
                <div className="fetures-icon-block">
                  <img loading="lazy" alt="Service icon" src={Icon2} />
                </div>
                <div className="data_wrapper">
                  <h3>Assistance dédiée et suivi fournisseurs</h3>
                  <p>
                    On s'occupe de tout, vous ne vous ocuppez de rien! de l'assistance dédiée au quotidien à la gestion et le suivi des fournisseurs.
                  </p>
                </div>
              </m.div>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <m.div animate={conventionsAnimation} initial="hidden" variants={getButtonVariants(2)} className="fetures-block">
                <div className="fetures-icon-block">
                  <img loading="lazy" alt="Service icon" src={Icon3} />
                </div>
                <div className="data_wrapper">
                  <h3>Personnalisation et habillage aux couleurs de l'entreprise</h3>
                  <p>
                    Le design de la plateforme est personnalisable et s’habille aux couleurs de votre marque pour faciliter son adoption par vos collaborateurs et être un levier pour votre marque employeur.
                  </p>
                </div>
              </m.div>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <m.div animate={conventionsAnimation} initial="hidden" variants={getButtonVariants(3)} className="fetures-block">
                <div className="fetures-icon-block">
                  <img loading="lazy" alt="Service icon" src={Icon4} />
                </div>
                <div className="data_wrapper">
                  <h3>Reporting Régulier des metrics RH</h3>
                  <p>
                    Nous réalisons des reportings réguliers de vos programmes de conventions pour vous permettre leur suivi et monitoring.
                  </p>
                </div>
              </m.div>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <m.div animate={conventionsAnimation} initial="hidden" variants={getButtonVariants(4)} className="fetures-block">
                <div className="fetures-icon-block">
                  <img loading="lazy" alt="Service icon" src={Icon5} />
                </div>
                <div className="data_wrapper">
                  <h3>Financement des avantages sociaux direct</h3>
                  <p>
                    Nous proposons à vos collaborateurs des solutions de financement avantageuses pour échelonner le paiement de leurs achats sur la plateforme.
                  </p>
                </div>
              </m.div>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <m.div animate={conventionsAnimation} initial="hidden" variants={getButtonVariants(5)} className="fetures-block">
                <div className="fetures-icon-block">
                  <img loading="lazy" alt="Service icon" src={Icon6} />
                </div>
                <div className="data_wrapper">
                  <h3>Systém rewarding</h3>
                  <p>
                    eProgram vous permet de lancer vos programmes de rewarding des collaborateurs en leur laissant la liberté de faire les achats qu'il souhaitent directement sur la plateforme.
                  </p>
                </div>
              </m.div>
            </Col>
          </div>
        </Row>
      </Container>
    </FeturesSectionWrapper>
  );
};

export default Features;