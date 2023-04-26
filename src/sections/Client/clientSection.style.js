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
    padding: 40px 0 0px 0;
    .slick-arrow{
        display: none !important;
    }
    h2{
        margin-bottom: 60px;
        text-align: center;
    }
    img {
        height: 45px;
        //width: 100px;
        object-fit: contain;
        //background-color: green;
    }
    @media only screen and (max-width: 912px){
        padding: 0 0 60px 0;
    }
    @media only screen and (max-width: 400px){
      padding: 0 0 20px 0;
    }
`

export default ClientsSectionWrapper;