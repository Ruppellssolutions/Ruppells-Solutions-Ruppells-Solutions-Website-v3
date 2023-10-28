import React from 'react'
import Header from '../includes/landingPage/Header'
import styled from 'styled-components'
import Spotlight from '../includes/landingPage/Spotlight'


const LandingPage = () => {
    return (
        <Container>
            <Header />
            <Left>
                <Spotlight />
            </Left>
        </Container>
    )
}

export default LandingPage

const Container = styled.div`
    background-color: #111;
    position: relative;
    
    &::before{
        position: fixed;
        left: 0;
        top: 0;
        content: "";
        width: 100%;
        height: 100vh;
        background: url('/images/body-bg.png') 0 0 no-repeat;
        background-size: cover;
    }
`;

const Left = styled.div`
    
`