import styled from 'styled-components';
import Mask from "../../assets/images/mask.png"

const BannerSectionWrapper = styled.section`
    @media only screen and (min-width: 2000px) {
        max-width: 1400px; 
    }
    padding: 220px 0 120px 0;
    margin: 0;
    background: url(${Mask}) no-repeat;
    background-size: fit;
    background-position: center right;
    .banner-image {
        position: absolute;
        height: 550px;
        bottom: 1%;
        right: -5%;
    }
    .video {
        float:right;      
    }
    .buttons-container {
        display: flex;
        flex-direction: row; 
        justify-content: start;
        align-items: center;
        gap: 20px;
    }
    p{
        text-align: left;
        font-size: 17px;
        font-weight: 400; 
        margin: 0 0 80px 0;
    }
    h4{
        margin-bottom: 8px;
        font-size: 18px;
        color: ${props => props.theme.secondaryColor};
        text-transform: uppercase;
    }
    .section-title{
        position: relative;
        .banner-img {
            object-fit: contain;
            position : absolute;
            top: 0;
            margin-top: -5%;
            left: 20%;
            height: 130%;
            z-index: 1;
        }
        .mobile-banner-img {
            object-fit: contain;
            position : absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            height: 130%;
            display: none;
        }
        .head-text{
            position: relative;
            display: flex;
            flex-direction: column;
            z-index: 2;
            font-weight: 300;
            font-size: 55px;
            line-height: 65px;
            margin: 0 0 50px 0;
            color: ${props => props.theme.black};
            font-weight: 600;
            .one-line-text {
                display : none;
            }
        }     
    }
    .banner-btn.one{       
        color: #fff;
        &:hover{
            background: #EEE6FA;
            color: #8A57DE;
        }
    }
    .banner-btn.two{
        background: #FFEBEC;
        color: #FB7B81;
        &:hover{
            background: #FB7B81;
            color: #fff;
        }
    }
    .banner-btn+.banner-btn{
        margin-left: 30px;
    }
    @media only screen and (max-width: 1280px) {
        padding: 220px 0 80px 0;
        margin: 0;
        background: url(${Mask}) no-repeat;
        background-position: center right -200px;
        .banner-image {
            position: absolute;
            height: 400px;
            bottom: 5%;
            right: 0;
        }
        p{
            font-size: 16px;
            font-weight: 400; 
            margin: 0 0 60px 0;
        }
        .section-title{
            position: relative;
            .banner-img {
                object-fit: contain;
                position : absolute;
                height: 130%;
                top: 0;
                margin-top: -3%;
                left: 17%;
                z-index: 1;
            }
            .head-text{
                position: relative;
                z-index: 2;
                font-weight: 300;
                font-size: 40px;
                line-height: 50px;
                margin: 0 0 35px 0;
                color: ${props => props.theme.black};
                font-weight: 600;
            }     
        }

    }   
    @media only screen and (max-width: 992px) {
        background: url(${Mask}) no-repeat;
        background-position: center right -40vw;
        padding: 150px 0 60px 0;
        .banner-image {
            display: none;
        }
        .section-title{
            .banner-img {
                object-fit: contain;
                position : absolute;
                height: 130%;
                top: 0;
                margin-top: -2%;
                left: 15%;
                z-index: 1;
                display: none
            }
            .head-text{
                font-size: 45px;
                line-height: 60px;
                margin: 0 0 25px 0;
                flex-direction: row;
                .multiple-line-text {
                    display: none;
                }
                .one-line-text {
                    display: flex;
                }
            }
        }
        p{ 
            margin: 0 0 30px 0;
        }
        .banner-btn{
            min-width: 140px;
        }
        .banner-btn+.banner-btn{
            margin-left: 17px;
        }
     }
     @media only screen and (max-width: 768px) {
        padding: 130px 0 60px 0;
        background: url(${Mask}) no-repeat;
        background-position: center right -50vw;
        .buttons-container {
            display: flex;
            flex-direction: row; 
            justify-content: center;
            align-items: center;
        }
        .section-title{
            .head-text{
                text-align: center;
                font-size: 40px;
                line-height: 45px;
            }
            .banner-img {
                object-fit: contain;
                position : absolute;
                height: 130%;
                top: 0;
                margin-top: -2%;
                left: 40%;
                z-index: 1;
                display: none;
            }
        }
        p {
            text-align: center;
        }
        .banner-image {
            display: none;
        }
     }
     @media only screen and (max-width: 576px) {
        padding: 120px 0 40px 0;
        background: none;

        .buttons-container {
            display: flex;
            flex-direction: row; 
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
        .banner-btn{
            min-width: 160px;
        }
     }
     @media only screen and (max-width: 480px) {
        .mobile-banner-img {
            display: block!important;
        }
        .section-title{
            .head-text{
                text-align: center;
                font-size: 40px;
                line-height: 50px;
            }
        }
         .vintage-box{
             &:before{
                 content: none;
             }
         }
     }
     @media only screen and (max-width: 380px) {
        .buttons-container {
            flex-direction: column;
        }
        .section-title{
            .head-text{
                text-align: center;
                font-size: 40px;
                line-height: 45px;
                margin: 0 0 30px 0;
            }
            h4{
                font-size: 15px;
            }
        }
        .banner-btn{
            font-size: 14px;
            min-width: 127px;
            padding: 14px 12px; 
        }
        .banner-btn+.banner-btn{
            margin-left: 15px;
        }
     }
     @media only screen and (max-width: 330px) {
        .section-title{
            .head-text{
                text-align: center;
                font-size: 35px;
                line-height: 40px;
            }
        }
     }
     
`

export default BannerSectionWrapper;