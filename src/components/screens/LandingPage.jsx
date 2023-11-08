import React, { useRef } from 'react'
import Header from '../includes/landingPage/Header'
import styled from 'styled-components'
import Spotlight from '../includes/landingPage/Spotlight'
import Services from '../includes/landingPage/Services'
import useSections from '../context/useSections'
import Projects from '../includes/landingPage/Projects'
import Product from '../includes/landingPage/Product'
import Clients from '../includes/landingPage/Clients'
import ProjectReferal from '../includes/landingPage/ProjectReferal'
import Location from '../includes/landingPage/Location'
import Footer from '../includes/landingPage/Footer'
import { motion, useScroll, useTransform } from 'framer-motion'


const LandingPage = () => {
    const { isProjectSectionActive } = useSections()

    const proContainerRef = useRef()
    const { scrollYProgress } = useScroll({
        target: proContainerRef
    })

    const productX = useTransform(scrollYProgress, [0.3, 0.9], ["0vw", "-100vw"])
    // const projectX = useTransform(scrollYProgress, [0.5, 1], ["0vw", "-100vw"])
    const projectX = useTransform(scrollYProgress, [0.3, 0.9], ["100vw", "0vw"])


    // project component 
    const containerRef = useRef()
    const { scrollYProgress: projectScrollY } = useScroll({
        target: containerRef,
    })

    return (
        <Container>
            <Wrapper>
                <Header />
                <Spotlight />
                <Services />
                <ProContainer ref={proContainerRef}>
                    <ProductWrapper
                        style={{ x: productX }}
                    >
                        <Product />
                    </ProductWrapper>
                    <ProjectWrapper
                        ref={containerRef}
                        style={{ x: projectX }}
                    >
                        <div>
                            <Projects
                                scrollYProgress={projectScrollY}
                            />
                        </div>
                    </ProjectWrapper>
                </ProContainer>
                <Clients />
                <ProjectReferal />
                <BottomContainer>
                    <Location />
                    <Footer />
                </BottomContainer>
            </Wrapper>
        </Container>
        // <Container>
        //     <Wrapper>
        //         <Header />
        //         {/* <LeftContainer className={isProjectSectionActive ? "disappear" : ""}> */}
        //         <Spotlight />
        //         <Services />
        //         <Product />
        //         {/* </LeftContainer> */}
        //         {/* <RightContainer className={`${isProjectSectionActive ? "active" : ""}`}> */}
        //         <Projects />
        //         <Clients />
        //         <ProjectReferal />
        //         {/* </RightContainer> */}
        //         <BottomContainer>
        //             <Location />
        //             <Footer />
        //         </BottomContainer>
        //     </Wrapper>
        // </Container>
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
const BottomContainer = styled.div`
    background-color:#FBFBFC;
`
const ProContainer = styled.div`        // Projects and Product container
    /* height: 200vh; */
    height: max-content;
    position: relative;
`
const ProductWrapper = styled(motion.div)`
    position: sticky;
    top: 0;
`
const ProjectWrapper = styled(motion.div)`
    /* width: 100%;
    position: sticky;
    top: 0; */
    height: 100vh;
    
    &>div{
        position: relative;
    }
`