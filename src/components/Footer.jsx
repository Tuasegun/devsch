import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
            <div className="footer-container">
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
    .footer-container{
        p{
            text-align: center;
            font-size: 1.2rem;
            font-weight: 300;
            font-family: 'EuclidCircularA';
            color: #130E0B;
        }
    }
`
