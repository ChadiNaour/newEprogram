import styled from 'styled-components';

const IntegrationItemWrapper = styled.section`
    padding: 70px 0 70px 0;
    background-color: #F9F9F9;
    .text-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items:  center;
        p {
            text-align: center;
            font-size: 18px;
            font-weight: 400;
            max-width: 80%;
        }

    }
    .section-title{
        h2{
            margin-bottom: 42px;
        }
    }
    @media only screen and (max-width: 1024px) {
        .integration__block__inner { 
            a{
                bottom: 8%;
            }
        }
    }
    @media only screen and (max-width: 912px) {
         padding: 60px 0 0 0;
        .integration__block__inner{
            padding: 8%;
            img{
                height: 45px;
                margin-bottom: 6px;
            }
            h3{
                margin-bottom: 0px;
            }
            a{
                display: block;
                bottom: 0;
                right: 0;
                position: relative;
            }
            &:hover{
                a{
                    right: -10%;
                }
            }
        }
        .integration-text{
            margin-bottom: 40px;
        }
     }
     @media only screen and (max-width: 760px) {
        .integration__block__wrap{
            margin-bottom: 60px;
        }
     }
     @media only screen and (max-width: 568px) {
        padding: 60px 0 40px 0;
         .section-title,
        .integration-content-wrap{
            text-align: center;
        }
        .section-title{
            img{
                display: none;
            }
            h4{
                width: 100%;
            }
        }
        
     }
     @media only screen and (max-width: 480px) {
     }
   

`

export default IntegrationItemWrapper