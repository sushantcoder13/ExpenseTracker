import React from 'react'
import styled, { keyframes } from 'styled-components'

function Orb() {

    const moveOrb = keyframes`
        0%{
            tranform: translate(0,0);
        }

        50%{
            tranform: translate(400px,500px);
        }

        100%{
            tranform: translate(0,0);
        }
    `


    const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
        filter: blur(100px);
        animation: ${moveOrb} 1s alternate linear infinite
    `;
  return (
    <OrbStyled>Orb</OrbStyled>
  )
}

export default Orb