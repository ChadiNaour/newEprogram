import styled from 'styled-components';

const FotterWrapper = styled.footer`
  padding-block: 2rem;
  width: 100%;
  background: linear-gradient(91.95deg, #74ACFE 0.64%, #1B68D8 97.41%);
  position: relative;
  .footer-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
  }
  .logo {
    height: 40px;
    object-fit: contain;
  }
  .calendar-container {
    display: flex;
    flex-direction: row;
    justifycontent: center;
    align-items: center;
    gap: 10px;
    width: 250px;
    img {
      width: 40px;
    }
    span {
      line-height: 20px;
      font-weight: 600;
      font-size: 15px;
      color: white;
    }
  }
  @media only screen and (max-width: 1600px) {
  }
  @media only screen and (max-width: 1280px) { 
  }
  @media only screen and (max-width: 912px) {
    .logo {
      height: 30px;
    }
    .calendar-container {
      gap: 8px;
      width: 350px;
      img {
        width: 35px;
      }
      span {
        line-height: 20px;
        font-weight: 600;
        font-size: 13px;
        color: white;
      }
    }
  }
  @media only screen and (max-width: 568px) {
    .footer-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
    }
    .logo {
      height: 30px;
    }
    .calendar-container {
      width: 100%!important;
      gap: 8px;
      width: 350px;
      img {
        width: 35px;
      }
      span {
        line-height: 20px;
        font-weight: 600;
        font-size: 13px;
        color: white;
      }
    }
  }
  @media only screen and (max-width: 375px) {
  }
`;

export default FotterWrapper;
