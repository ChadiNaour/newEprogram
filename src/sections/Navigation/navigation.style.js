import styled from 'styled-components';

const NavigationWrap =  styled.header`
    position: fixed;
    width: 100%;
    z-index: 99;
    top: 0;
    transition: all 0.3s ease 0s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  .navbar-wrap{
    // background-color: red;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .mobile-menu-icon {
    display: none;
    color: #1D316C;
    font-size: 24px;
  }
  /*Drop down style*/ 
  .dropdown{
    background: #fff;
    visibility: hidden;
    opacity: 0;
    min-width: 200px;
    border: 1px solid #f5f5f5;
    position: absolute;
    margin-top: 1rem;
    left: 20px;
    padding: 15px 0px;
    display: none;
    box-shadow: 0px 30px 70px 0px rgba(137,139,142,0.15);
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
    transition: all 0.3s ease-in-out;
  }
  ul li:hover > ul,
  ul li ul:hover {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translateY(0px);
    -ms-transform: translateY(0px);
    transform: translateY(0px);
    display: block;
  }
  
  nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      
    }
    li{
        position: relative;
        padding: 48px 0px 48px 40px;
        .dropdown{
          li{
            padding: 0;
            a{
              color: #1D316C;
              display: block;
              padding: 5px 15px;
              &:hover{
                color: ${props => props.theme.menuHoverColor ? props.theme.menuHoverColor : '#FB7B81'} !important;
              }
              &:before{
                content: none;
              }
            }
          }
        }
      
      a, .nav-active{
        position: relative;
        color: ${props => props.theme.menuColor ? props.theme.menuColor : '#1D316C'};
        font-size: 15px;
        transition: 450ms all;
        padding-bottom: 5px;
        cursor: pointer;
        &:before{
          content: '';
          position: absolute;
          left : 0;
          bottom:0;
          width: 20px;
          height: 1px;
          opacity: 0;
          background: ${props => props.theme.menuHoverColor ? props.theme.menuHoverColor : '#FB7B81'};
          transition: 450ms all;
        }
        &:hover{
          color: ${props => props.theme.menuHoverColor ? props.theme.menuHoverColor : '#FB7B81'};
          &:before{
            opacity: 1;
          }
        }
      }
    }
  }
  .nav-btn{
    padding-block: 10px;
    padding-inline: 20px;
    float:left;
    display: flex;
    flex-direction: row;
    font-size: 15px;
    color: white;
    border-radius: 5px;
  }
    
  }
  .nav-btn.two{
    display: flex;
    background: rgb(0,0,0,0);
    justify-content: center;
    align-items: center;
    padding: 0;
    color: ${props => props.theme.primaryLightColor};
    &:hover{
        color: #2A6FD4;
    }
    
  }
  .action_button{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 15px
  }
  .logo{
    margin-top: 10px;
    transition: all 0.8s cubic-bezier(0.3, 0.8, 0.2, 1) 0s;
    img{
      width: 160px;
    }
  }
  &.scrolled{
    box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 30px;
    background-color: white;
    .logo{
        width: 160px;
    } 
    .nav{
      li{
        padding: 28px 0px 28px 40px;
        a{
          color: #1D316C;
          &:hover{
            color: ${props => props.theme.menuHoverColor ? props.theme.menuHoverColor : '#FB7B81'};
          }
        }
      }
      li{
        .dropdown{
          li{
            padding: 0;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1280px) {
    .logo{
      margin-top: 10px;
      transition: all 0.8s cubic-bezier(0.3, 0.8, 0.2, 1) 0s;
      img{
        width: 130px;
        height: auto;
      }
    }
    .nav{
      li{
        padding-inline: 15px;
        a {
          color: #1D316C;
          &:hover{
            color: ${props => props.theme.menuHoverColor ? props.theme.menuHoverColor : '#FB7B81'};
          }
        }
      }
    }
    &.scrolled{
      .nav{
        li{
          padding-inline: 15px;
          a {
            color: #1D316C;
            &:hover{
              color: ${props => props.theme.menuHoverColor ? props.theme.menuHoverColor : '#FB7B81'};
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 992px) {
    height: auto;
    min-height: 50px;
    padding: 15px 20px;
    &.nav-expanded {
      background: #fff;
      box-shadow: 0px 6px 7px 1px rgba(217,214,214,0.67);
      -webkit-box-shadow: 0px 6px 7px 1px rgba(217,214,214,0.67);
      -moz-box-shadow: 0px 6px 7px 1px rgba(217,214,214,0.67);
    }
    &.scrolled{
        padding: 8px 20px;
        .nav .collapsed {
          li{
            padding: 0;
            a{
              padding: 8px 10px;
              display: block;
            }
          }
          li+li{
            padding-left: 0;
          }
        } 
    }
    .has-dropdown{
      a{
        position: relative;
        &:before{
          content: '';
          
        }
      }
    }
    .dropdown{
      position: relative;
      left: 0;
      margin-top: 0;
      box-shadow: none;
    }
    .navbar-wrap{
        justify-content: between;
        display: block;
        position: relative;
        text-align:center;
    }
    .logo {
      width: 100%;
      img{margin-top: 7px;width: 110px;}
      
    }
    .mobile-menu-icon {
      display: inline-block;
      position: absolute;
      top: 8px;
      left: 3px;
      cursor: pointer;
      
    }
    #wide-nav{
      display: none;
    }
  .action_button{
    max-width:100px;
    
  }
    
    .nav{
        width: 100%;
      .collapsed {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        transition: 450ms all ease-in-out;
        overflow: hidden;
        max-height: 0;
        
        
        &.is-expanded {
          padding-top: 15px;
          overflow-y: auto;
          max-height: 300px; /* approximate max height */
          
        }
        li {
          padding: 0;
          margin: 0px 0px;
          width: 100%;
          text-align:left;
          .dropdown{
            li{
              a{
                color: #1D316C;
              }
            }
          }
          a{
            padding: 8px 10px;
            display: block;
            color: #1D316C;
            &:before{
              content: none;
            }
          }
        }
      }
    }
  }
`

export default NavigationWrap;