import styled from 'styled-components';

const ActualityWrapper = styled.section`
  padding: 70px 0 100px 0;
  background-color: #f9f9f9;
  .loading {
    padding: 0px;
    height: 120px;
    width: 120px 
  }
  .Blog-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 40px;
  }
  @media only screen and (max-width: 1280px) {
  }
  @media only screen and (max-width: 912px) {
    padding: 80px 0 120px 0;
  } 

  @media only screen and (max-width: 768px) {
    .Blog-container {
      justify-content: center;
    }
    .loading {
      padding: 0px;
      height: 120px;
      width: 120px 
    }
  }
  @media only screen and (max-width: 568px) {
    padding: 80px 0 30px 0;
    .Blog-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap:40px;
      justify-content: center;
      align-items: center;
      padding-bottom: 40px;
    }
    .loading {
      padding: 0px;
      height: 80px;
      width: 80px 
    }
  }
  
`;

export default ActualityWrapper;
