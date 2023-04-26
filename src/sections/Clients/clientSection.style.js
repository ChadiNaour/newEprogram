import styled from 'styled-components';


const ClientsSectionWrapper =  styled.div`
    .button__bar {
      display: inline-block;
      vertical-align: middle;
      margin: auto;
      padding: 0;
      text-align: center;
      margin-top: 30px;
    }
    .slick__slider__item {
      height: 160px;
    }
    .image{
        height: 120px;
        width: 120px;
        border-radius: 50%;
        box-shadow: 0 0 10px #c7c7c7;
        -webkit-transform-origin: center center;
        transform-origin: center center;
        transition: 450ms all;
        object-fit: cover;
        background-color: white;
        cursor: pointer;
        z-index: 999!important;
    }
    .image:hover {
      transform: scale(1.2);
    }
    
    .button__bar li {
      list-style: none;
      cursor: pointer;
      display: inline-block;
      margin: 0 3px;
      padding: 0;
    }
    
    .button__bar li button {
      border: none;
      background: #DDDDDD;
      color: transparent;
      cursor: pointer;
      display: block;
      height: 3px;
      width: 15px;
    }
    
    .button__bar li.slick-active button {
      background-color: gray;
    }
    @media only screen and (max-width: 912px){
        padding: 0 0 60px 0;
    }
    @media only screen and (max-width: 400px){
      padding: 0 0 20px 0;
        img{
           margin: 0 auto;
        }
    }
`

export default ClientsSectionWrapper;