import React, { useEffect, useRef, useState } from "react";
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
// import useResponsive from "../hooks/useResponsive";
import NavigateFuture from "../includes/landingPage/NavigateFuture";
import Location from "../includes/landingPage/Location";
import Footer from "../includes/landingPage/Footer";
import useDimension from "../hooks/useDimension";

const LandingPage = () => {
    const { width } = useDimension()

    // product to project transition container
    const proContainerRef = useRef();
    const { scrollYProgress } = useScroll({
        target: proContainerRef,
    });

    const [bottomContentHeight, setHeight] = useState(0)

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

    useEffect(() => {
        const bottomContentHeight = document.getElementById("bottom-content")
        setHeight(bottomContentHeight.clientHeight)
    }, [])

    const scale = useTransform(bottomYProgress, [0.1, 1], [0, 4])
    const scale460 = useTransform(bottomYProgress, [0.1, .8], [0, 10])
    // const opacity = useTransform(bottomYProgress, [0.22, 0.23], [1, 0]);
    const y = useTransform(bottomYProgress, [0.7, 1], ["0px", `-${bottomContentHeight}px`])

    useEffect(() => {
        const preventZoom = (e) => {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        };
        const child = document.querySelector('.first-child.third');
        const sibling2 = document.querySelector('.sibling-2');

        function applyMask() {
            const rect = child.getBoundingClientRect();

            sibling2.style.clipPath = `circle(${rect.width / 2}px at ${rect.left + rect.width / 2}px ${rect.top + rect.height / 2}px)`;
        }

        scale.on("change", applyMask)
        scale460.on("change", applyMask)

        applyMask();

        // Reapply when the window resizes
        window.addEventListener("scroll", applyMask)
        window.addEventListener('resize', applyMask);
        document.addEventListener('touchstart', preventZoom, { passive: false });

        return () => {
            window.removeEventListener("scroll", applyMask)
            window.removeEventListener("resize", applyMask)
            document.removeEventListener('touchstart', preventZoom);
        };
    }, []);

    return (
        <Container>
            <Wrapper>
                <Header type="SECTIONS" />
                <Element name="home">
                    <Spotlight />
                </Element>
                <ZIndexContainer>
                    <Services />
                    <ProContainer ref={proContainerRef}>
                        <ProWrapper ref={containerRef}>
                            <ProScrollWrapper>
                                <ProductWrapper style={{ x: width > 860 && productX }}>
                                    <Product />
                                </ProductWrapper>
                                <ProjectWrapper style={{ x: width > 860 && productX }}>
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
                        <BottomContainer id="bottom-content">
                            {/* <NavigateFuture /> */}
                            <Location />
                            <Footer />
                        </BottomContainer>
                        {/* Bubbles transition */}
                        <PopupWrapper>
                            <DummyContent
                                className="sibling-2"
                                style={{
                                    y
                                }}
                            >
                                <NavigateFuture />
                                <Location />
                                <Footer />
                            </DummyContent>
                            <PopupContainer
                                style={{
                                    scale: width <= 460 ? scale460 : scale,
                                }}
                                transition={{
                                    stiffness: 500
                                }}
                            >
                                <div className="first-child">
                                    <div className="first-child second">
                                        <motion.div
                                            className="first-child third"
                                            style={{
                                                // opacity
                                            }}
                                        >
                                        </motion.div>
                                    </div>
                                </div>
                            </PopupContainer>
                        </PopupWrapper>
                    </BottomWrapper>
                </ZIndexContainer>
            </Wrapper>
        </Container >
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
        background: url("/images/body-bg.png") 0 0 no-repeat , url(/images/spotlight/center.png) center center no-repeat;
        background-size: cover, cover;
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
// const LeftContainer#ff000028styled.div`
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
    visibility: hidden;
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
        height: max-content;
    }
`;
const PopupWrapper = styled.div`
    pointer-events: none;
    user-select: none;
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
`
const DummyContent = styled(motion.div)`
    position: absolute;
    pointer-events: all;
    user-select: text;
    /* clip-path: circle(50% at center); */
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    /* background-color: #bd2929b2; */
    /* mix-blend-mode: multiply; */
`
const PopupContainer = styled(motion.div)`
    /* top: 50%;
    left: 50%;
    translate: -50% -50%; */
    /* z-index: 200; */
    /* width: 100vw;
    aspect-ratio: 1; */
    transform: all 0.5s ease-in-out;
    border: 400px solid #e7c6ff;
    border-radius: 50%;
    user-select: none;
    pointer-events: none;

    .first-child {
        /* width: 100%;
        aspect-ratio: 1; */
        border: 300px solid #8443b1;
        border-radius: 50%;
        /* width: calc(150vw + 300px);
        height: calc(150vw + 300px); */

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
            /* background-color: #fbfbfc; */
            @media all and (max-width: 480px) {
                /* border: 0px solid #9acfff; */
                // overflow: hidden;
            }
        }
    }
`;