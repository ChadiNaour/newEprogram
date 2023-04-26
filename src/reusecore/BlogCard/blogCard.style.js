import styled from 'styled-components';

const BlogCardWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 350px;
    height: 450px;
    //background-color: red;
    margin-top: 20px;
    .text-container {
        padding-top: 20px;
        width: 100%;
        height: 50%;
        h1 {
            font-size: 25px;
            color: ${props => props.theme.black};
            margin-bottom: 3px!important;
        }
        span {
            color: green;
        }
        p {
            font-size: 16px;
            line-height: 25px;
            margin-block: 12px;
        }
        .link {
            font-weight: 600;
            color: green;
            font-size: 18px;
            cursor: pointer;
        }
      }
    .img-container {
        width: 100%;
        height: 200px;
        background-color: #465A69;
        position: relative;
        .image-wrapper {
            position: absolute;
            cursor: pointer;
            width: 100%;
            height: 100%;
            -webkit-transition: all 0.2s; 
            -moz-transition: all 0.2s; 
            transition: all 0.2s;
            &:hover {
                transform: translate(7px, -7px);
            }
        }
            .color-badge {
                position: absolute;
                width: 30px;
                height: 30px;
                bottom: -15px;
                right: 10%;
            }
            img {
                position: absolute;
                width: 100%;
                height: 100%;
                object-fit: cover;
                //z-index: 99;
            }
        }
    }
    .pink {
        .color-badge {
            background-color: ${props => props.theme.rose};
        }
        span, .link {
            color: ${props => props.theme.rose};
        }
    }
    .green {
        .color-badge {
            background-color: ${props => props.theme.green};
        }
        span, .link {
            color: ${props => props.theme.green};
        }
    }
    .red {
        .color-badge {
            background-color: ${props => props.theme.red};
        }
        span, .link {
            color: ${props => props.theme.red};
        }
    }
    .yellow {
        .color-badge {
            background-color: ${props => props.theme.yellow};
        }
        span, .link {
            color: ${props => props.theme.yellow};
        }
    }
    
    .light-blue {
        .color-badge {
            background-color: ${props => props.theme.primaryLightColor};
        }
        span, .link {
            color: ${props => props.theme.primaryLightColor};
        }
    }
    .dark-blue {
        .color-badge {
            background-color: ${props => props.theme.primaryDarkColor};
        }
        span, .link {
            color: ${props => props.theme.primaryDarkColor};
        }
    }
  @media only screen and (max-width: 1280px) {
  }
  @media only screen and (max-width: 912px) {
  } 

  @media only screen and (max-width: 760px) {
  }
  @media only screen and (max-width: 568px) {
    width: 100%;
    height: auto;
    .img-container {
        width: 100%;
        height: 200px;
        background-color: #465A69;
        position: relative;
  }
  
`;

export default BlogCardWrapper;
