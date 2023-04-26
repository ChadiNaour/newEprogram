import React, { useState } from "react";
import { ThemeProvider } from 'styled-components';

import Layout from "../components/layout";
import theme from 'theme/app/themeStyles';
import SEO from "../components/seo";
import Navigation from 'sections/Navigation';
import Footer from 'sections/Footer-crypto';
import { GlobalStyle } from 'sections/app.style';
import Modal from '../reusecore/Modal/index';
import NotFound from '../assets/images/4042.webp';
import styled from "styled-components";



const NotFoundPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    // const [errorImageLoaded, setErrorImageLoaded] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <SEO title="404: Page introuvable" />
                {modalOpen && <Modal open={modalOpen} setOpen={setModalOpen} />}
                <Navigation modalOpen={modalOpen} setModalOpen={setModalOpen} />
                <NotFoundImage>
                    <img loading="lazy" alt="404" src={NotFound} />
                    <h2>La page demandée n'existe pas </h2>
                </NotFoundImage>
                <Footer />
            </Layout>
        </ThemeProvider>
    )
}

const NotFoundImage = styled.div`
width: 100%;
display: flex;
justify-content: center;
gap: 1rem;
align-items: center;
min-height: 100vh;
padding: 20px 0 20px 0;
flex-direction: column;
img {
    width: 40vw;
}
h2 {
    color: ${props => props.theme.black}
    font-size: 2rem;
}
@media only screen and (max-width: 500px) {
    img {
        width: 90vw;
    }
    h2 {
        font-size: 1.3rem;
    }
}
`

export default NotFoundPage;