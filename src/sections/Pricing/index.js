import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import imgAbout from "assets/images/app/pp.webp";
import comIcon from "assets/images/app/community_icon.png";
import axios from "axios";
import { useInView } from 'react-intersection-observer';


import PricingSectionWrapper from "./pricingSection.style";
import Select from "react-select";
import { m, useAnimation } from "framer-motion";

var Options = [
  { value: "Ressources humaines", label: "Ressources humaines" },
  { value: "Employé", label: "Employé" },
];

const customStyles = {
  control: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    height: 50,
    marginBlock: "0.6rem",
    border: isFocused ? "1px solid #74ACFE" : "none",
    display: "flex",
    borderRadius: "10px",
    alignItems: "center",
    paddingLeft: "20px",
    backgroundColor: "white",
    fontSize: "15px",
    boxShadow: "rgba(206, 206, 206, 0.78) 0px 1px 23px -8px"
  }),
  placeholder: styles => ({
    ...styles,
    color: "#757575"
  }),
  singleValue: styles => ({
    ...styles,
    color: "black"
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    height: 50,
    border: "none",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    backgroundColor: isDisabled
      ? null
      : isSelected
        ? "#74ACFE"
        : isFocused
          ? "#d3e5ff"
          : null,
    color: isDisabled
      ? null
      : isSelected
        ? "white"
        : null,
    fontSize: "15px",
  }),
};


const Pricing = () => {
  const [selectOption, setSelectOption] = useState({ value: "Employee", label: "Employee" });
  const [loading, setLoading] = useState(false);
  const JoinFormAnimation = useAnimation();
  const [ref, inView] = useInView();


  const handleSubmit = async (event) => {
    setLoading(true)
    event.preventDefault();
    event.persist();
    const data = new FormData(event.target);
    try {
      const res = await axios.post(`${process.env.GATSBY_BACK_API}/submit-form`, data);
      if (res.status === 200) {
        setLoading(false)
        console.log(res);
        event.target.reset();
      }
      // .then(response => {
      //     console.log(response);
      //     event.target.reset();
      //   })
      //   .catch(error => {
      //     console.error(error);
      //     event.target.reset();
      //   });
    }
    catch (e) {
      console.log(e);
    }
  
    // fetch('/api/submit-form', {
    //   method: 'POST',
    //   body: data,
    // })
    // .then(response => {
    //   console.log('Success:', response);
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
  }

  const ProjectsButtonVariants = {
    hidden: {
      opacity: 0,
      x: 20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        opacity: { ease: "linear" },
        delay: 0.1,
        duration: 0.5
      }
    }
  }

  useEffect(() => {
    if (inView) {
      JoinFormAnimation.start("visible");
      return () => JoinFormAnimation.stop;
    }
  }, [inView])

  return (
    <PricingSectionWrapper id="pricing">
      <Container fullWidthSM>
        <Row Vcenter={true}>
          <Col xs={12} sm={6}>
            <img loading="lazy"
              className="about-thumb"
              src={imgAbout}
              alt="This is about UNI-Prime"
            />
          </Col>
          <Col xs={12} lg={6} className="about-content-wrap">

            <m.div ref={ref} animate={JoinFormAnimation} initial="hidden" variants={ProjectsButtonVariants} className="pricing-block">
              <SectionTitle
                className="section-title"
                leftAlign={true}
                UniWidth="100%"
              >
                <center>
                  <img loading="lazy" alt="Community icon" style={{ width: "50px" }} src={comIcon} />
                  <h3><span>Rejoignez
                    la communauté<br />eProgram</span>
                  </h3>
                  <div className="underline"></div>
                </center>
              </SectionTitle>
              <div className="details-block">
              {/* <div style={{textAlign: "center"}}>{selectOption?.value === "Employee" ? "Nous enverrons un email à votre RH pour lui suggérer nos offres et conventions" : "" }</div> */}
                <form method="post" onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="domain-search-block">
                    <m.div 
                        className="search-box">
                      <input type='text' placeholder='Nom et Prénom' name="name" required />
                      <input type='text' placeholder="Nom de l'entreprise" name="company" required />
                      <Select
                        value={selectOption}
                        placeholder="Fonction dans l'entreprise"
                        options={Options}
                        styles={customStyles}
                        onChange={(value) => {
                          setSelectOption(value)
                        }}
                      />
                      {selectOption?.value === "Employee" && <input type='email' placeholder='Email' name="email" required />}
                      {selectOption?.value === "Ressources humaines" && <input type='text' name="nbEmployees" placeholder="Nombre d'employés" required />}
                      <input type='email' placeholder='Email RH' name="emailRh" required />
                      <input type='text' placeholder='Numéro de téléphone' name="telephone" required />
                      <Button type="submit" style={{ width: "100%", marginTop: "20px" }}>{loading ? "Chargement..." : selectOption?.value === "Ressources humaines" ? "Je rejoins eProgram" : "Envoyer un email à mon RH"}</Button>
                    </m.div>
                  </div>
                </form>
              </div>
            </m.div>
          </Col>
        </Row>
      </Container>
    </PricingSectionWrapper>
  );
};

export default Pricing;
