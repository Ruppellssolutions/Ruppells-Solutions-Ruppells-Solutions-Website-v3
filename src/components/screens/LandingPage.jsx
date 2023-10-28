import React from 'react'
import Header from '../includes/landingPage/Header'
import styled from 'styled-components'
import Spotlight from '../includes/landingPage/Spotlight'


const LandingPage = () => {
    return (
        <Container>
            <ScrollContainer>
                <Header />
                <Spotlight />
            </ScrollContainer>
        </Container>
    )
}

export default LandingPage

const Container = styled.div`
    /* height: 100vh; */
    /* position: absolute;
    top: 0;
    left: 0; */
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
`
const ScrollContainer = styled.div`
    height: max-content;
    overflow-y: scroll;
`