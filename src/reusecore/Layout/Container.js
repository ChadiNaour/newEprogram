import React from 'react';
import styled, {css} from 'styled-components';




const ContainerWrapper = styled.div`

    width: 95%;
    padding-right: 15px;
    padding-left: 15px;
    margin: 0 auto;
    @media (min-width: 576px) {
        max-width: 100%;
    }
    @media (min-width: 768px) {
        max-width: 760px;  
    }
    @media (min-width: 992px) {
        max-width: 960px; 
    }
    @media (min-width: 1200px) {
        max-width: 1170px; 
    }
 
    ${props => props.fluid && css`
        max-width: 100%; 
    `}
`


const Container = ({children}, props) => {
    return(
        <ContainerWrapper {...props}>
            {children}
        </ContainerWrapper>
    )
}


export default Container;