import React from "react";
import { Container } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Client from "sections/Client";
import IntegrationItemWrapper from "./integrationSection.style";

const Integrations = () => {
  return (
    <IntegrationItemWrapper id="integrations">
      <Container>
        <SectionTitle UniWidth="65%" >
          
        <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "15px", marginBottom: "60px" }}>
            <h2><span>
              Plus de 50 marques<br /> partenaires allant jusqu'à -40%
            </span>
            </h2>
            <div className="underline"></div>
          </div>
        </SectionTitle>
        <div className="text-container">
          <p>
            eProgram donne accès à des offres exclusives sur plus de 50 marques partenaires, soit un catalogue de plus de 1800 produits (électroménager, Hight-Tech, teléphonie, jouets, cosmétiques, ...) et une large gamme de services, allant de la réservation d'hôtels à l'assurance.
          </p>
        </div>
        <Client />
      </Container>
    </IntegrationItemWrapper>
  );
};

export default Integrations;
