import React from 'react'
import Header from '../includes/landingPage/Header'
import styled from 'styled-components'
import Spotlight from '../includes/landingPage/Spotlight'
import Services from '../includes/landingPage/Services'
import useSections from '../context/useSections'
import Projects from '../includes/landingPage/Projects'


const LandingPage = () => {
    const { isProjectSectionActive } = useSections()
    return (
        <Container>
            <Header />
            <LeftContainer className={isProjectSectionActive ? "disappear" : ""}>
                <Spotlight />
                <Services />
            </LeftContainer>
            <RightContainer>
                {/* <Projects /> */}
            </RightContainer>
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

const LeftContainer = styled.div`
    transition: transform 1s ease-in-out;

    &.disappear{
        transform: translateX(-100%);
    }
`
const RightContainer = styled.div`

`