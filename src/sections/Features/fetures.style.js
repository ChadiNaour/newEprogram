import styled from 'styled-components';
import BannerMobile from '../../assets/images/banner_mobile.webp'
import Banner from '../../assets/images/poto.png'


const FeturesSectionWrapper = styled.section`
   padding: 70px 0 50px 0;
   .banner-image {
        background: url(${Banner});
        padding-inline: 13%;
        padding-block: 30px;
        border-radius : 30px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;  
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom : 70px;
        h2{
            color: white;
            font-size: 28px; 
            margin-bottom: 10px;
            font-weight: 900;
            line-height: 30px;
        }
        h3{
            color: white;
            font-size: 24px; 
            font-weight: 700;
            line-height: 30px;
            text-align: center;
        }
   }
  
   .fetures-icon-block{
        height: 80px;
        width: 80px;
        display: flex;
        align-items: center;
        margin-bottom: 25px;
        position: relative;

        img {
            display: block;
            margin: 0 auto;
            object-fit: contain;
        }
        
   }
    .fetures-block{
        display: flex;
        // -webkit-flex: 0 0 33.333333%;
        flex-direction: row;
        gap: 15px;
        .data_wrapper {
            max-width: calc(100% - 60px)!important;
            p {
                font-weight: 500;
                font-size: 15px;
            }
        }
        .fetures-icon-block{
            width: 50px;
            height: 50px;
            img {
                float: left;
                height: 100%;
                width: 100%;
                object-fit: contain;
                margin-top: -20px;
            }
            &:before{
                position: absolute;
                display: inline-block;
                top: -3px;
                right: 0px;
                height: 80px;
                width: 80px;
                content: '';
                border-radius: 50%;
                z-index: -1;
                opacity: 0;
                transition: all 0.3s linear;
            }
        } 
        &:hover{
            .fetures-icon-block{
                &:before{
                    opacity: 1;
                    right: -10px;
                }
            }
        }

        
        h3{
            font-size: 21px; 
            margin-bottom: 15px;
            font-weight: 600;
            line-height: 30px;
            color: ${props => props.theme.black};
        }
        p {
            margin: 0 0 50px 0;
            font-weight: 300;
            font-size: 15px; 
        }
    }
    @media only screen and (max-width: 912px) {
        padding: 80px 0 0px 0;
    }
    @media only screen and (max-width: 760px) {
        padding: 80px 0 50px 0;
    }
    @media only screen and (max-width: 568px) {
        .fetures-block{
            text-align: center;
        }
        .fetures-icon-block{
            margin: 0 auto 25px auto;
        }
        .banner-image {
            background: url(${BannerMobile});
            padding-inline: 13%;
            padding-block: 30px;
            background-size:     cover;
            background-repeat:   no-repeat;
            background-position: center center;  
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom : 70px;
            text-align: center;
            h2{
                color: white;
                font-size: 25px; 
                margin-bottom: 10px;
                font-weight: 900;
                line-height: 30px;
            }
            h3{
                color: white;
                font-size: 20px; 
                font-weight: 700;
                line-height: 30px;
                text-align: center;
            }
       }
    }
    
`

export default FeturesSectionWrapper;