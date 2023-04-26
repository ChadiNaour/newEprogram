import React, { useState } from "react";
import { ThemeProvider } from 'styled-components';

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from 'sections/Navigation';
import Banner from 'sections/Banner-default';
import Features from 'sections/Features';
import Faq from 'sections/Faq';
import Integrations from 'sections/Integrations';
import AppScreens from 'sections/AppScreens';
import Counters from 'sections/Counters';
import Pricing from 'sections/Pricing';
import Testimonial from 'sections/Testimonial';
import Actuality from 'sections/Actuality';
// import News from 'sections/News';
// import Getapp from 'sections/Getapp';
// import Contact from 'sections/Contact';
import Footer from 'sections/Footer-crypto';
// import Client from 'sections/Client';
import { GlobalStyle } from 'sections/app.style';
import theme from 'theme/app/themeStyles';
import Modal from '../reusecore/Modal/index'

const IndexPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (

    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout >
        <SEO title="eProgram | Perks and Benefits" />
        {modalOpen && <Modal open={modalOpen} setOpen={setModalOpen}/>}
        <Navigation modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        <Banner />
        <Counters />
        <Features />
        <Integrations />
        <AppScreens />
        <Testimonial />
        <Faq />
        <Pricing />
        <Actuality />
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
