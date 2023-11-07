import React from 'react'
import Header from '../includes/landingPage/Header'
import styled from 'styled-components'
import Spotlight from '../includes/landingPage/Spotlight'
import Services from '../includes/landingPage/Services'
import useSections from '../context/useSections'
import Projects from '../includes/landingPage/Projects'
import Product from '../includes/landingPage/Product'
import Clients from '../includes/landingPage/Clients'
import ProjectReferal from '../includes/landingPage/ProjectReferal'


const LandingPage = () => {
    const { isProjectSectionActive } = useSections()

    return (
        <Container>
            <Wrapper>
                <Header />
                <LeftContainer className={isProjectSectionActive ? "disappear" : ""}>
                    <Spotlight />
                    <Services />
                    <Product />
                </LeftContainer>
                <RightContainer className={`${isProjectSectionActive ? "active" : ""}`}>
                    <Projects />
                    <Clients />
                    <ProjectReferal />
                </RightContainer>
            </Wrapper>
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
        z-index: 1;
        top: 0;
        content: "";
        width: 100%;
        height: 100vh;
        background: url('/images/body-bg.png') 0 0 no-repeat;
        background-size: cover;
    }
`;
const Wrapper = styled.div`
    z-index: 2;
    position: relative;
`
const LeftContainer = styled.div`
    transition: transform 1s ease-in-out;

    &.disappear{
        transform: translateX(-100%);
    }
`
const RightContainer = styled.div`
    width: 100%;
    height: 100vh;
    /* background-color: #ff9595; */
    position: fixed;
    z-index: 100;
    bottom: 0;
    left: 0;
    transform: translateX(100vw);
    transition: transform 1s ease-in-out;

    &.active{
        top: 0;
        bottom: unset;
        transform: translateX(0);
    }
`