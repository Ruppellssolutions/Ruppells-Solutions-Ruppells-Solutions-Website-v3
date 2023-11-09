import React, { useRef } from 'react'
import Header from '../includes/landingPage/Header'
import styled from 'styled-components'
import Spotlight from '../includes/landingPage/Spotlight'
import Services from '../includes/landingPage/Services'
import Projects from '../includes/landingPage/Projects'
import Product from '../includes/landingPage/Product'
import Clients from '../includes/landingPage/Clients'
import ProjectReferal from '../includes/landingPage/ProjectReferal'
import Location from '../includes/landingPage/Location'
import Footer from '../includes/landingPage/Footer'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Element } from 'react-scroll'


const LandingPage = () => {
    const proContainerRef = useRef()
    const { scrollYProgress } = useScroll({
        target: proContainerRef
    })

    const productX = useTransform(scrollYProgress, [0.1, 0.25], ["0vw", "-100vw"])

    // project component 
    const containerRef = useRef()
    const { scrollYProgress: projectScrollY } = useScroll({
        target: containerRef,
    })

    return (
        <Container>
            <Wrapper>
                <Header />
                <Element name="home">
                    <Spotlight />
                </Element>
                <ZIndexContainer>
                    <Services />
                    <ProContainer ref={proContainerRef}>
                        <ProWrapper
                            ref={containerRef}
                        >
                            <ProScrollWrapper>
                                <ProductWrapper
                                    style={{ x: productX }}
                                >
                                    <Product />
                                </ProductWrapper>
                                <ProjectWrapper
                                    style={{ x: productX }}
                                >
                                    <Projects
                                        scrollYProgress={projectScrollY}
                                    />
                                </ProjectWrapper>
                            </ProScrollWrapper>
                        </ProWrapper>
                    </ProContainer>
                    <Element name='clients'>
                        <Clients />
                    </Element>
                    <ProjectReferal />
                    <BottomContainer>
                        <Location />
                        <Footer />
                    </BottomContainer>
                </ZIndexContainer>
            </Wrapper>
        </Container>
    )
}

export default LandingPage

const Container = styled.div`
    background-color: #111;
    position: relative;
    /* height: auto; */
    /* height: 100vh; */
    
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
        background-color: #111;
    }
`;
const ProScrollWrapper = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    width: max-content;
`
const Wrapper = styled.div`
    z-index: 2;
    position: relative;
    /* height: 100vh;
    overflow-y: scroll; */
`
const LeftContainer = styled.div`
    /* height: 100vh; */
    /* width: 100%; */
    /* overflow-y: scroll; */
    transition: transform 1s ease-in-out;

    &.disappear{
        transform: translateX(-100%);
    }
`
const RightContainer = styled.div`
    width: 100%;
    height: 100vh;
    /* max-height: 100vh; */
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
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
const ZIndexContainer = styled.div`
    position: relative;
    z-index: 110;
`
const BottomContainer = styled.div`
    background-color:#FBFBFC;
`
const ProContainer = styled.div`        // Projects and Product container
    /* height: 200vh; */
    position: relative;

    /* overflow-y: hidden; */
    /* height: max-content; */
`
const ProductWrapper = styled(motion.div)`
    /* position: sticky;
    top: 0; */
    width: 100vw;
`
const ProjectWrapper = styled(motion.div)`
    width: 100vw;
    /* width: 100%;
    position: sticky;
    top: 0; */
    /* height: 400vh; */
    /* overflow-y: scroll; */
    
    &>div{
        /* position: relative; */
    }
`
const ProWrapper = styled.div`
    /* position: sticky;
    top: 0; */
    /* height: max-content; */
    /* display: flex;
    width: max-content; */
    height: 600vh;
`