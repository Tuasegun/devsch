import React from 'react'
import styled from 'styled-components'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
const Footer = () => {
  return (
    <StyledFooter>
            <div className="footer-container">
            <div className="socials-container">
                <a href="https://www.instagram.com/schfordevs/">
                    <img src={twitter} alt="twitter" />
                </a>
                <a href="https://twitter.com/schfordevs">
                    <img src={instagram} alt="instagram" />
                </a>
            </div>
           <p>
           Copyright@schfordevs2022
           </p>
            </div>
    </StyledFooter>
  )
}

export default Footer

const  StyledFooter = styled.div`
    margin-top: 5rem;
    padding-bottom: 6rem;
    .footer-container{
        .socials-container{
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 0.970625rem;
            margin-bottom: 3.4375rem;
            a{
              text-decoration: none;
              img{
                width: 1.125rem;
                height: 1.125rem;
                object-fit: contain;
              }
            }
        }
        p{
            text-align: center;
            font-size: 1.2rem;
            font-weight: 300;
            font-family: 'EuclidCircularA';
            color: #130E0B;
        }
    }
`
