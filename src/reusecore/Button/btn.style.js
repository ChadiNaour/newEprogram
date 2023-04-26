import styled, {css} from 'styled-components';

const ButtonStyle = styled.button` 
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center; 
    font-family: inherit; 
    font-size: 16px;
    font-weight: 600;
    padding-block: 10px;
    padding-inline: 20px;
    background-color: ${props => props.theme.primaryLightColor};
    border: 1.5px solid  ${props => props.theme.primaryLightColor}!important;
    text-decoration: none;
    border: 0;
    // max-width: 170px;
    border-radius: 5px;
    -webkit-transition: 450ms all;
    transition: 450ms all;
    position: relative;
    color: white;
    z-index: 2;
    &:hover {
        background: #2A6FD4;
        color: white;
        border-color :#2A6FD4!important;
    }
    .icon-left{
        margin-right: 8px;
    }
    .icon-right{
        margin-left: 8px;
    }
    .header{
        padding: 10px;
    }
    ${props => props.primary && css`
        color: ${props.theme.primaryLightColor};
        background: ${props.theme.primaryColor};

        &:hover{
            color: ${props.theme.primaryColor};
            background: ${props.theme.primaryLightColor}; 
        }
    `}
    ${props => props.secondary && css`
        color: ${props.theme.secondaryColor};
        background: ${props.theme.secondaryLightColor};

        &:hover{
            color: ${props.theme.secondaryLightColor};
            background: ${props.theme.secondaryColor}; 
        }
    `}
    @media only screen and (max-width: 568px){
        font-size: 14px;
        font-weight: 600;
        padding-block: 8px;
        padding-inline: 15px;
        background-color: ${props => props.theme.primaryLightColor};
        border: 1.5px solid  ${props => props.theme.primaryLightColor};
        .icon-left{
            margin-right: 6px;
        }
        .icon-right{
            margin-left: 6px;
        }
    }
`
ButtonStyle.displayName = 'ButtonStyle';

export default ButtonStyle;