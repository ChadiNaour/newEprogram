import React, { useState } from "react";
import { navigate } from "gatsby"
import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import ButtonOutline from "reusecore/ButtonOutline";
import ModalVideo from 'react-modal-video'
import { FaPlay } from "react-icons/fa";
import { ImArrowRight2 } from "react-icons/im";
import BannerSectionWrapper from "./banner.style";
import ModalvideoWrapper from "./modal.style";
import BannerBorder from "../../assets/images/border.png";
import Banner from "../../assets/images/banner_last2.webp";
import Placeholder from "../../assets/images/placeholder.webp";
import mobileBanner from "../../assets/images/colors2.webp";
import { m, useAnimation } from "framer-motion";
import Animations from "../../Animations/index"

const BannerDefault = () => {
  const [isOpen, setOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <center>
    <m.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <BannerSectionWrapper>
        <Container fullWidthSM>
          <Row style={{ position: "relative" }}>

            <Col sm={12} md={12} lg={6}>

              <SectionTitle
                className="section-title"
                leftAlign={true}
                UniWidth="100%"
              >
                <img loading="lazy" alt="Banner" className="banner-img" src={BannerBorder} />
                <img loading="lazy" alt="Banner mobile" className="mobile-banner-img" src={mobileBanner} />

                <div className="head-text">
                  <span className="one-line-text">Employee’s perks & benefits made simple.</span>
                  <span className="multiple-line-text">Employee’s perks<br />& benefits<br />made simple.</span>
                </div>
              </SectionTitle>
              <ModalvideoWrapper>
                <React.Fragment>
                  <ModalVideo channel='youtube' isOpen={isOpen} videoId="aj-QSNez_UI" onClose={() => setOpen(false)} autoplay />
                </React.Fragment>
              </ModalvideoWrapper>
              <p style={{ textAlign: "justify" }}>
                Nous avons la vocation d’aider les entreprises à prendre soin de leurs collaborateurs en leur donnant accès à la première plateforme marocaine de conventions digitalisées, dédiée aux conventions d’entreprise. Les collaborateurs ont ainsi un accès exclusif à plus de 10.000 produits et services, à prix réduits et livrés chez eux en toute sérénité.
              </p>

              <div className="buttons-container">

                <Button onClick={() => { navigate("#pricing") }}>
                  Demandez votre accès<ImArrowRight2 className="icon-right" />
                </Button>

                <ButtonOutline onClick={() => setOpen(true)} >
                  <FaPlay className="icon-left" /> Voir la démo
                </ButtonOutline>

              </div>

            </Col>
            <div>
              {!imageLoaded && <img loading="lazy" alt="blured Hero" className="banner-image" src={Placeholder} />}
              <m.img  animate={{ opacity: 1, y: 0 }}
                     initial={{ opacity: 0, y: 50 }}
                     transition={{ duration: 0.5 , delay: 0.5, }}
                    loading="lazy" alt="Hero" className="banner-image" src={Banner} onLoad={() => setImageLoaded(true)} />
            </div>
          </Row>

        </Container>

      </BannerSectionWrapper>
    </m.div>
    </center>
  );
};

export default BannerDefault;
