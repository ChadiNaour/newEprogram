import React from "react";
import { Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import AppScreenSectionWrapper from "./appScreenSection.style";
import { BiCheckCircle } from "react-icons/bi"

const AppScreens = () => {

  return (
    <AppScreenSectionWrapper>
      <div className="app-screen-two-block">
        <Row>
          <Col className="app-screen-content-block" offsetXl={6} xl={6}>
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h2>
                <span>Utilisez le solde employé pour le rewarding de vos collaborateurs</span>
              </h2>
            </SectionTitle>
            <div className="text-container">
              <div className="check-text"><div style={{width: "30px"}}><BiCheckCircle style={{marginRight: "10px"}} size="30"/></div>Le montant que vous voulez, aux collaborateurs que vous voulez.</div>
              <div className="check-text"><div style={{width: "30px"}}><BiCheckCircle style={{marginRight: "10px"}} size="30"/></div>Un crédit à consommer par vos collaborateurs, librement et directement sur la plateforme.</div>
              <div className="check-text"><div style={{width: "30px"}}><BiCheckCircle style={{marginRight: "10px"}} size="30"/></div>Une multitude de conventions, aux meilleurs prix pour équiper vos collaborateurs.</div>
            </div>
          </Col>
        </Row>
      </div>
    </AppScreenSectionWrapper>
  );
};

export default AppScreens;
