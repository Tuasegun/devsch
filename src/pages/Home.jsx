import React, {useState} from 'react'
import styled from 'styled-components'
import Marquee from 'react-fast-marquee'
import Image1 from '../assets/Image1.png'
import Image2 from '../assets/Image2.png'
import Image3 from '../assets/Image3.png'
import Image4 from '../assets/Image4.png'
import Image5 from '../assets/Image5.png'
import logo from '../assets/logo.svg'
import WhatsappLogo from '../assets/whatsappLogo.png'
import NavIcon from '../assets/navIcon.png'
import Typed from 'react-typed'

const Home = () => {
    const [openNav, setOpenNav] = useState(false)

  return (
    <StyledHome onClick={()=>setOpenNav(!openNav)}>
        <div className="header">
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <a href="https://wa.me/2348135369680" target="_blank" rel="noreferrer">
            <div className="contact-us">
                
                <div className="whatsapp">
                    <img src={WhatsappLogo} alt="whatsapp" />
                </div>
                <div className="contact-number">
                    <p>Contact us here</p>
                </div>
                
            </div>
            </a>
            <div className="nav-bar">
            
                <img src={NavIcon} alt="nav-icon" onClick={()=>setOpenNav(!openNav)}/>
                {
                    openNav ? ( 
                        <a href="https://wa.me/2348135369680" target="_blank" rel="noreferrer">
                       <div className="contact-mobile">
                        <div className="whatsapp">
                            <img src={WhatsappLogo} alt="whatsapp" />
                        </div>
                        <div className="contact-number">
                            <p>Contact us here</p>
                        </div>
                       </div>
                       </a>
                    ) : null
                }
        
            </div>
        </div>
        <div className="text">
            <div className="text-container">
                <h1>
                Kickstart your career in{" "}
                </h1>
                <h1>


                
                <Typed
                className='typed-text'
                    strings={[
                        "SOFTWARE",
                        "FRONTEND",
                        "BACKEND",
                        "WEBFLOW"
                    ]}
                    typeSpeed={100}
                    backSpeed={100}
                    showCursor={true}
                    loop
                />
            {"  "}
                DEVELOPMENT
                </h1>
            </div>
            <div className="text-container-mobile">
                <h3>
                    Kickstart your
                </h3>
                <h3>
                    career in
                </h3>
                <h3>
                <Typed
                className='typed-text'
                    strings={[
                        "SOFTWARE",
                        "FRONTEND",
                        "BACKEND",
                        "WEBFLOW"
                    ]}
                    typeSpeed={100}
                    backSpeed={100}
                    showCursor={true}
                    loop
                />

                    {/* <span className="text-wheel-ctn">
                        <span className="text-wheel">
                            <i>SOFTWARE</i>
                            <br/>
                            <i>FRONTEND</i>
                            <br/>
                            <i>BACKEND</i>
                            <br/>
                            <i>WEBFLOW</i>
                        </span> 
                    </span> */}
                </h3>
               
                <h3>
                    DEVELOPMENT
                </h3>
            </div>
        </div>
        <div className="image-marquee">
            <Marquee
            gradient={false}
            className="marquee"
            >
                <div className="img-container img1">
                    <img src={Image1} alt="image1" />
                </div>
                <div className="img-container img2">
                    <img src={Image2} alt="image2" />
                </div>
                <div className="img-container img3">
                    <img src={Image3} alt="image3" />
                </div>
                <div className="img-container img4">
                    <img src={Image4} alt="image4" />
                </div>
                <div className="img-container img5">
                    <img src={Image5} alt="image5" />
                </div>
            </Marquee>
        </div>
        <div className="footer">
        <a href="https://wa.me/2348135369680" target="_blank" rel="noreferrer">
        <div className="contact-us">
                <div className="whatsapp">
                    <img src={WhatsappLogo} alt="whatsapp" />
                </div>
                <div className="contact-number">
                    <p>Contact us here</p>
                </div>
            </div>
        </a>
        </div>
    </StyledHome>
  )
}

export default Home

const StyledHome = styled.div`
    overflow: hidden;
    @media (max-width: 768px) {
        overflow: auto;
    }
    .typed-text{
        color: #07FFD7;
        
        /* font-size: 2.5rem; */
    }

    background-color: #000;
    height: 100vh;
    @keyframes textsroll {
    0% {
      top: -3.2rem;
    }
    25% {
      top: -15rem;
    }
    50% {
      top: -27rem;
    }
    75% {
      top: -39rem;
    }
    100% {
      top: -3.2rem;
    }
  }
  @media (max-width: 768px) {
    @keyframes textsroll {
      0% {
        top: -3.5rem;
      }
      25% {
        top: -10rem;
      }
      50% {
        top: -17rem;
      }
      75% {
        top: -24.5rem;
      }
      100% {
        top: -3.5rem;
      }
    }
  }

    .contact-mobile{
        background-color:#D9D9D9;
        position: absolute;
        top: 3.2rem;
        right: 1rem;
        display: flex;
        align-items: center;
        padding: 1.725rem 1.3125rem;
        .whatsapp{
                width: 1.5rem;
                height: 1.5rem;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
            .contact-number{
                margin-left: 0.5rem;
                p{
                    font-size: 1.25rem;
                    color: #111111;
                    font-family: 'Poppins', sans-serif;
                }
            }
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3.14375rem 6.875rem 1.8125Rem 3.6875rem;
        .logo-container{
            width: 10.0625rem;
            height: 2.853125rem;
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        .contact-us{
            display: flex;
            align-items: center;
            .whatsapp{
                width: 1.5rem;
                height: 1.5rem;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
            .contact-number{
                margin-left: 0.5rem;
                p{
                    font-size: 1.25rem;
                    color: #E9ECF1;
                    font-family: 'Poppins', sans-serif;
                }
            }
        }
        .nav-bar{
            display: none;
            @media(max-width: 768px){
                display: block;
                width: 1.5rem;
                height: 1.5rem;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
        }
        @media (max-width: 768px) {
            padding: 1.5rem 1.5rem 1.5rem 1.5rem;
            .logo-container{
                width: 6.0625rem;
                height: 1.853125rem;
            }

            .contact-us{
                display: none;
            }
        }
    }

    .text{
        margin-bottom: 5.0rem;
        .text-container{
            display: flex;
            flex-direction: column;
            align-items: center;
            h1{
                font-size: 4.375rem;
                color: #fff;
                font-weight: 700;
                /* text-align: center; */
            }
            @media (max-width: 768px) {
                display: none;
            }
        }
        .text-container-mobile{
            display: none;
            padding: 0 1.5rem;
            @media (max-width: 768px) {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                h3{
                    font-size: 2.5rem;
                    color: #fff;
                    font-weight: 400;
                }
            }
        }
        @media (max-width: 768px) {
            margin-top: 2.5rem;
        }
    }    


    .text-wheel-ctn {
    height: 110px;
    box-sizing: content-box;
    margin-bottom: -45px;
    position: relative;
    overflow: hidden;
    display: inline-block;
    word-wrap: break-word;
    // user-select: none;
    position: relative;
    width: 382px;
        @media (max-width: 768px) {
         width: 295px;
         margin-right: 0px;
        height: 90px;
        }
    }

    .text-wheel {
    position: absolute;
    top: -2.9rem;
    // 2.5 13.5 25 36
    animation-name: textsroll;
    animation-duration: 6.5s;
    animation-delay: 2s;
    animation-timing-function: cubic-bezier(0.32, 0.76, 0.16, 1);
    padding-top: 46px;
    text-align: left;
    animation-iteration-count: infinite;
    @media (max-width: 768px) {
      padding-top: 60px;
      left: 0px;
      text-align: left;
      top: -2.6rem ;
      // 2.6 7.2 11.8 16.5
    }
    i {
      font-style: normal;
      display: block;
      margin-left: 0px;

      position: relative;
    }
    i:nth-of-type(1) {
      color: #07FFD7;
    }
    i:nth-of-type(2) {
      color:#07FFD7;
    }
    i:nth-of-type(3) {
      color: #07FFD7;
    }
    i:nth-of-type(4) {
      color:#07FFD7;
    }
  }



   .image-marquee{
        /* margin-top: 5.25rem; */
        
   }
    .img-container{
        width: 16.3125rem;
        height: 16.3125rem;
        border-radius: 5px;
        margin: 0 0.84375rem;
        img{
            width: 100%;
            height: 100%;
        }
        @media (max-width: 768px) {
            width: 12.3125rem;
            height: 12.3125rem;
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }

    .img1{
        transform: translate(0, -20%);
    }

    .img2{

    }
    .img3{
        transform: translate(0, -30%);
    }

    .img4{
        transform: translate(0, -20%);
    }

    .marquee{
        height: 50vh;

        @media (max-width: 768px) {
            height: 40vh;
        }
    }
    .footer{
        display: none;
        @media (max-width: 768px) {
            display: flex;
            justify-content: center;
            align-items: center;
            
            .contact-us{
            display: flex;
            align-items: center;
            .whatsapp{
                width: 1.5rem;
                height: 1.5rem;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
            .contact-number{
                margin-left: 0.5rem;
                p{
                    font-size: 1.25rem;
                    color: #E9ECF1;
                    font-family: 'Poppins', sans-serif;
                }
            }
        }
        }
    }
    a{
        text-decoration: none;
     
    }
`