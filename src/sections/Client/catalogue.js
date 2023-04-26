import React from 'react'
import Catalogue from "../../assets/data/eProgram-catalogue.pdf"
import styled from 'styled-components';

const CatalogueStyle = styled.div`
    position: fixed;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    position: fixed;
    z-index: 999;
    justify-content: center;
    align-items: center;
    .diagonal {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100vh;
        align-text: center;
    }
    .pdfContainer {
        position: relative;
        align-text: left;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%; 
        max-width: 30vw;
        aspect-ratio: 5/7;
        //height: 840px; 
    }
    @media only screen and (max-width: 768px) {
        .pdfContainer {
            max-width: 400px;
            height: 566px; 
        }
        
    }
    @media only screen and (max-width: 425px) {
        .pdfContainer {
            max-width: 300px;
            height: 425px; 
        }
        
    }
`


const Resume = ({ setOpen }) => {

    return (
        <CatalogueStyle onClick={() => { setOpen(false) }}>
            <div className='pdfContainer' onClick={(e) => e.stopPropagation()}>
                <iframe title="Catalogue des Marques" src={`${Catalogue}#view=fitH`} style={{ width: "100%", height: "100%" }}></iframe>
            </div>
        </CatalogueStyle>
    )
}

export default Resume;