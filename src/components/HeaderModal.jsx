import React from 'react'
import styled from 'styled-components'
import cancel from '../assets/cancel.svg'
import WhatsappLogo from '../assets/whatsappLogo.png'
import calender from '../assets/calender.svg'
import { Link } from 'react-router-dom'
const HeaderModal = ({clickProps}) => {
  return (
   <StyledModal>
        <div className="modal-background">
            <div className="modal-container">
                <div className="modal-header">
                    <div className="cancel-container" onClick={clickProps}>
                        <img src={cancel} alt="cancel" />
                    </div>
                </div>
                <div className="modal-body">
                    <div className="content">
                        <a className="content-item"  href="https://wa.me/2348135369680" target="_blank" rel="noreferrer">
                            <div className=" whatsappIcon">
                                <img className='whatsappLogo' src={WhatsappLogo} alt="whatsapp" />
                            </div>
                            <div className="item-text">
                                <p>
                                    Contact Us on Here
                                </p>
                            </div>
                       
                        </a>
                        <a className="content-item" href="/#events"  onClick={clickProps} >
                            <div className="item-icon calender-icon">
                                <img className='calender' src={calender} alt="calender" />
                            </div>
                            <div className="item-text">
                                <p>
                                   Our Event
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
   </StyledModal>
  )
}

export default HeaderModal

const StyledModal = styled.div`
    .modal-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 5;
        background: #FDFAEA;
     
        /* padding-right: 15%; */
    }
    .modal-container { 
        position: relative;

        .modal-header{
            display: flex;
            justify-content: flex-end;
            padding: 5.8125rem 6.75rem 0 0;
            @media (max-width: 768px) {
                padding: 3.8125rem 2.75rem 0 0;
            }



            .cancel-container{
                width: 1.4375rem;
                height: 1.46125rem;
                cursor: pointer;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .modal-body{
            padding: 4.225rem 2.25rem 0 70%;
            @media (max-width: 768px) {
                padding: 4.225rem 2.25rem 0 10%;
            }
                    
            .content{
                display: flex;
                flex-direction: column-reverse;
                align-items: flex-end;
              
                gap: 4.125rem;
                .content-item{
                    display: flex;
                    align-self: flex-start;
                    column-gap: 1.4375rem;
                    text-decoration: none;
                    color: #130E0B;
                    .item-icon{
                        width: 2.0625rem;
                        height: 2.0625rem;

                        @media (max-width: 768px) {
                            width: 1.5625rem;
                            height: 1.5625rem;

                        }
                        img{
                            width: 100%;
                            height: 100%;
                        }
                       
                    }
                    .whatsappIcon{
                        width: 2.0625rem;
                        height: 2.0625rem;
                    img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    }
                    }
                    .calender-icon{
                        background-color:#287D38;
                        padding: 0.5625rem;
                        border-radius: 50%;
                        width: 1rem;
                        height: 1rem;
                        @media (max-width: 768px) {
                            width: 0.75rem;
                            height: 0.75rem;
                            padding: 0.2125rem 0.4125rem 0.6125rem 0.4125rem;
                        }
                        img{
                            width: 100%;
                            height: 100%;

                        }
                    }
                    .item-text{
                        p{
                            
                            font-family: 'EuclidCircularA';
                            font-style: normal;
                            font-weight: lighter;
                            font-size: 1.875rem;

                            @media (max-width: 768px) {
                                font-size: 1.175rem;
                            }
                        }
                    }

                    
                }
            }
        }
        
    }

`

