import styled from 'styled-components';

import AppSecreenBGTwo from 'assets/images/app/app-screen/05.webp';
import AppSecreenBGOne from 'assets/images/app/app-screen/banner-mobile.webp';

const AppScreenSectionWrapper = styled.div`
    .app-screen-two-block{
        padding: 80px;
        background: url(${AppSecreenBGTwo}) no-repeat;
        background-size: cover;
        .section-title{
            h4,h2{
                color: ${props => props.theme.white};          
            }
        }
        .text-container {
            margin-top: 40px;
        }
        .check-text {
            color:#ffffff;
            font-weight: 600!important;
            font-size: 20px;
            display: flex;
            justify-content: start;
            align-items: start;
            gap: 10px;
            margin-top: 10px;
        }
        .btn-group{
        display: flex;
        }
        .btn-outline{
        padding: 13px 17px;
        border: 1px solid ${props => props.theme.white};
        border-radius: 5px;
        color: ${props => props.theme.white};
        background: transparent;
        transition: all 0.3s ease-in;
        &:first-child{
            margin-right: 15px;
        }
        &:hover{
            background: ${props => props.theme.white};
            color: ${props => props.theme.primaryColor};
        }
        }
    }
    @media only screen and (max-width: 1380px) {
        .app-screen-one-block{
            .section__particle{
                &.three{
                    top: 265px;
                }
            }
        }
    }
    @media only screen and (max-width: 1024px) {
        .app-screen-one-block{
            display: block;
            .section__particle{
                &.three{
                    top: 365px;
                }
            }
            .app__screen__slider{

                .slick-dots{
                    bottom: -352px;
                    left: 24%;
                }
            } 
            .section-title,
            .app-screen-content-block{
                text-align: center;
            }
            .app-screen-content-block{
                order: 1;
                margin-bottom: 80px;
            }
            .app-screen-slider-block{
                order: 2;
            }
            .app-screen-content-block,
            .app-screen-slider-block{
                -webkit-flex: 0 0 100%;
                -ms-flex: 0 0 100%;
                flex: 0 0 100%;
                max-width: 100%;
            }
            .app__screen__slider .slick-dots{
            display: none !important;
            } 
            .app__screen__slider{
                .slick-arrow{
                    display: none !important;
                }
                .slick-list{
                    transform: translateX(0px);
                }
            } 
        }
        .app-screen-two-block{
            //display: none;
        }
    }
    @media only screen and (max-width: 912px) {
        .app-screen-two-block{
            background-position: center center;
            padding: 40px;
            .check-text {
                color:#ffffff;
                font-weight: 600!important;
                font-size: 18px;
                display: flex;
                justify-content: start;
                align-items: start;
                gap: 5px;
            }
        }
        
    }
    @media only screen and (max-width: 480px) {
        .app-screen-two-block{
            background: url(${AppSecreenBGOne}) no-repeat;
            background-size: cover;
            background-position: center;
        }
    }
    
`


export default AppScreenSectionWrapper;