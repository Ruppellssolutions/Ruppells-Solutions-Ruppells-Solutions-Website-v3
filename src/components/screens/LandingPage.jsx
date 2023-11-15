import React, { useRef } from "react";
import Header from "../includes/landingPage/Header";
import styled from "styled-components";
import Spotlight from "../includes/landingPage/Spotlight";
import Services from "../includes/landingPage/Services";
import Projects from "../includes/landingPage/Projects";
import Product from "../includes/landingPage/Product";
import Clients from "../includes/landingPage/Clients";
import ProjectReferal from "../includes/landingPage/ProjectReferal";
import { motion, useScroll, useTransform } from "framer-motion";
import { Element } from "react-scroll";
import useResponsive from "../hooks/useResponsive";
import NavigateFuture from "../includes/landingPage/NavigateFuture";
import Location from "../includes/landingPage/Location";
import Footer from "../includes/landingPage/Footer";
import useDimension from "../hooks/useDimension";

const LandingPage = () => {
    const { sm } = useResponsive();

    // product to project transition container
    const proContainerRef = useRef();
    const { scrollYProgress } = useScroll({
        target: proContainerRef,
    });

    const productX = useTransform(scrollYProgress, [0.1, 0.25], ["0vw", "-100vw"]);

    // project component
    const containerRef = useRef();
    const { scrollYProgress: projectScrollY } = useScroll({
        target: containerRef,
    });

    // bottom bubble transition container
    const bottomRef = useRef();
    const { scrollYProgress: bottomYProgress } = useScroll({
        target: bottomRef,
    })

    const scale = useTransform(bottomYProgress, [0.2, 0.4], [0, 3])
    const scale460 = useTransform(bottomYProgress, [0.2, 0.4], [0, 10])
    const opacity = useTransform(bottomYProgress, [0.5, 0.55], [1, 0]);

    const { width } = useDimension()


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
                        <ProWrapper ref={containerRef}>
                            <ProScrollWrapper>
                                <ProductWrapper style={{ x: !sm && productX }}>
                                    <Product />
                                </ProductWrapper>
                                <ProjectWrapper style={{ x: !sm && productX }}>
                                    <Projects scrollYProgress={projectScrollY} />
                                </ProjectWrapper>
                            </ProScrollWrapper>
                        </ProWrapper>
                    </ProContainer>
                    <Element name="clients">
                        <Clients />
                    </Element>
                    <BottomWrapper ref={bottomRef}>
                        <ProjectReferal />
                        <BottomContainer>
                            <NavigateFuture />
                            <Location />
                            <Footer />
                        </BottomContainer>
                        {/* Bubbles transition */}
                        <PopupContainer
                            style={{
                                scale: width <= 460 ? scale460 : scale,
                            }}
                        >
                            <div className="first-child">
                                <div className="first-child second">
                                    <motion.div
                                        className="first-child third"
                                        style={{
                                            opacity
                                        }}
                                    >
                                    </motion.div>
                                </div>
                            </div>
                        </PopupContainer>
                    </BottomWrapper>
                </ZIndexContainer>
            </Wrapper>
        </Container>
    );
};

export default LandingPage;

const Container = styled.div`
    background-color: #111;
    position: relative;

    &::before {
        position: fixed;
        left: 0;
        z-index: 1;
        top: 0;
        content: "";
        width: 100%;
        height: 100vh;
        background: url("/images/body-bg.png") 0 0 no-repeat;
        background-size: cover;
        background-color: #111;
    }
`;
const ProScrollWrapper = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    width: max-content;
    @media all and (max-width: 860px) {
        position: static;
        display: block;
    }
`;
const Wrapper = styled.div`
    z-index: 2;
    position: relative;
`;
// const LeftContainer = styled.div`
//     transition: transform 1s ease-in-out;

//     &.disappear {
//         transform: translateX(-100%);
//     }
// `;
// const RightContainer = styled.div`
//     width: 100%;
//     height: 100vh;
//     /* max-height: 100vh; */
//     overflow-y: scroll;
//     -webkit-overflow-scrolling: touch;
//     /* background-color: #ff9595; */
//     position: fixed;
//     z-index: 100;
//     bottom: 0;
//     left: 0;
//     transform: translateX(100vw);
//     transition: transform 1s ease-in-out;

//     &.active {
//         top: 0;
//         bottom: unset;
//         transform: translateX(0);
//     }
// `;
const ZIndexContainer = styled.div`
    position: relative;
    z-index: 110;
`;
const BottomWrapper = styled.div`
    
`
const BottomContainer = styled.div`
    background-color: #fbfbfc;
`;
const ProContainer = styled.div`
    position: relative;

`;
const ProductWrapper = styled(motion.div)`
    width: 100vw;
`;
const ProjectWrapper = styled(motion.div)`
    width: 100vw;
`;
const ProWrapper = styled.div`
    height: 600vh;

    @media all and (max-width: 860px){
        height: min-content;
    }
`;

const PopupContainer = styled(motion.div)`
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    z-index: 200;
    /* width: 100vw;
    aspect-ratio: 1; */
    border: 400px solid #e7c6ff;
    border-radius: 50%;
    user-select: none;
    pointer-events: none;

    .first-child {
        /* width: 100%;
        aspect-ratio: 1; */
        border: 300px solid #8443b1;
        border-radius: 50%;

        &.second {
            border: 225px solid #4f3cc2;
        }
        &.third {
            border: 200px solid #9acfff;
            width: 150vw;
            height: 150vw;
            /* aspect-ratio: 1; */
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fbfbfc;
            @media all and (max-width: 480px) {
                /* border: 0px solid #9acfff; */
                // overflow: hidden;
            }
        }
    }
`;