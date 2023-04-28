import styled from 'styled-components';
const ButtonStyle = styled.button` 
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center; 
    font-family: inherit; 
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    border: 0;
    padding-block: 10px;
    padding-inline: 20px;
    border-radius: 5px;
    -webkit-transition: 450ms all;
    transition: 450ms all;
    position: relative;
    color: ${props => props.theme.primaryLightColor};
    border: 1.5px solid ${props => props.theme.primaryLightColor};
    background-color: white;
    z-index: 2;
    &:hover {
        background: rgba(116,172,254, .1);
        border-color: rgba(116,172,254);
        opacity: 80px;
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
    @media only screen and (max-width: 568px){
        font-size: 14px;
        font-weight: 600;
        padding-block: 8px;
        padding-inline: 15px;
        color: ${props => props.theme.primaryLightColor};
        border: 1.5px solid ${props => props.theme.primaryLightColor};
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