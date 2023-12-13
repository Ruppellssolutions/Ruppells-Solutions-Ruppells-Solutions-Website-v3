import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ImageCard from "../ImageCard";
import { motion, useAnimate, useScroll, useTransform } from "framer-motion";
import Footer from "../includes/landingPage/Footer";

const AboutUsNew = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });
    const contentY = useTransform(scrollYProgress, [0.1, 0.8], ["0", "-128px"]);
    const heroImgY = useTransform(scrollYProgress, [0.1, 0.8], ["0", "-400px"]);
    const heroImgY1480 = useTransform(
        scrollYProgress,
        [0.1, 0.8],
        ["0", "-355px"]
    );
    const heroImgY1280 = useTransform(
        scrollYProgress,
        [0.1, 0.8],
        ["0", "-315px"]
    );
    const heroImgY1080 = useTransform(
        scrollYProgress,
        [0.1, 0.8],
        ["0", "-298px"]
    );
    const nameY = useTransform(scrollYProgress, [0.1, 0.8], ["0", "-65px"]);

    const team = [
        "/images/EmployeeOne.png",
        "/images/employeeTwo.png",
        "/images/EmployeeThree.png",
        "/images/EmployeeOne.png",
        "/images/employeeTwo.png",
        "/images/EmployeeThree.png",
    ];
    const [isBelow1480, setIsBelow1480] = useState(false);
    const [isBelow1280, setIsBelow1280] = useState(false);
    const [isBelow1080, setIsBelow1080] = useState(false);
    const [isBelow980, setIsBelow980] = useState(false);
    const [isBelow768, setIsBelow768] = useState(false);
    const [isBelow640, setIsBelow640] = useState(false);
    const [isBelow480, setIsBelow480] = useState(false);
    const [isBelow420, setIsBelow420] = useState(false);

    const checkScreenSize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth > 1280 && screenWidth <= 1480) {
            setIsBelow1480(true);
        } else {
            setIsBelow1480(false);
        }
        if (screenWidth > 1080 && screenWidth <= 1280) {
            setIsBelow1280(true);
        } else {
            setIsBelow1280(false);
        }
        if (screenWidth > 980 && screenWidth <= 1080) {
            setIsBelow1080(true);
        } else {
            setIsBelow1080(false);
        }
        if (screenWidth > 768 && screenWidth <= 980) {
            setIsBelow980(true);
        } else {
            setIsBelow980(false);
        }
        if (screenWidth > 640 && screenWidth <= 768) {
            setIsBelow768(true);
        } else {
            setIsBelow768(false);
        }
        if (screenWidth > 480 && screenWidth <= 640) {
            setIsBelow640(true);
        } else {
            setIsBelow640(false);
        }
        if (screenWidth > 420 && screenWidth <= 480) {
            setIsBelow480(true);
        } else {
            setIsBelow480(false);
        }
        if (screenWidth <= 420) {
            setIsBelow420(true);
        } else {
            setIsBelow420(false);
        }
    };

    useEffect(() => {
        checkScreenSize(); // Initial check

        const handleResize = () => {
            checkScreenSize(); // Check on window resize
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    console.log(isBelow1480);

    return (
        <Wrapper>
            <section id="about-us">
                <div className="container-wrapper">
                    <div className="container wrapper">
                        <h2>
                            WHO <span>WE ARE</span>
                        </h2>
                        <p>
                            Ruppells Solutions offers expert IT and digital
                            marketing services, dedicated to elevating your
                            business. Our strategic and innovative approach
                            includes website creation, branding, social media
                            management, and online advertising. We provide the
                            necessary tools and expertise to transform and drive
                            your brand beyond mediocrity. Partner with us to
                            experience business excellence and success.
                        </p>
                    </div>
                </div>
                <div className="scroll-container" ref={containerRef}>
                    <div className="founders">
                        <div className="content-container wrapper">
                            <div className="moving-banner">
                                <p>
                                    <span></span>OUR TEAM <span></span>THE
                                    PEOPLE BEHIND HANDPLAYED <span></span>
                                    OUR TEAM <span></span>THE PEOPLE BEHIND
                                    HANDPLAYED
                                </p>
                            </div>
                            <div className="left">
                                <div className="content-wrapper">
                                    <motion.h4 style={{ y: contentY }}>
                                        THE
                                        <span>&nbsp; FOUNDERS</span>
                                    </motion.h4>
                                    <motion.p style={{ y: contentY }}>
                                        Ready to Elevate Your Business to New
                                        Heights? of your business.{" "}
                                    </motion.p>
                                    <motion.h4 style={{ y: contentY }}>
                                        THE
                                        <span>&nbsp; PEOPLE</span>
                                    </motion.h4>
                                    <motion.p style={{ y: contentY }}>
                                        Ready to Elevate Your Business to New
                                        Heights? of your business.{" "}
                                    </motion.p>
                                </div>
                            </div>
                            <div className="right">
                                <div className="main-img-container">
                                    <div className="img-container">
                                        <motion.img
                                            style={{
                                                y: isBelow1480
                                                    ? heroImgY1480
                                                    : isBelow1280
                                                    ? heroImgY1280
                                                    : isBelow1080
                                                    ? heroImgY1080
                                                    : heroImgY,
                                            }}
                                            src="/images/siddiq.png"
                                            alt="CEO"
                                        />
                                        <motion.img
                                            style={{
                                                y: isBelow1480
                                                    ? heroImgY1480
                                                    : isBelow1280
                                                    ? heroImgY1280
                                                    : isBelow1080
                                                    ? heroImgY1080
                                                    : heroImgY,
                                            }}
                                            src="/images/siddiq.png"
                                            alt="CEO"
                                        />
                                    </div>
                                    <div className="content-wrapper">
                                        <motion.div
                                            className="content"
                                            style={{ y: nameY }}
                                        >
                                            <div className="details">
                                                <span className="name">
                                                    Siddique Saifudheen
                                                </span>
                                                <span className="position">
                                                    CEO Ruppells group
                                                </span>
                                            </div>
                                            <div className="linkedin">
                                                <img
                                                    src="/icons/linkedin.svg"
                                                    alt="Linked In"
                                                />
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            className="content"
                                            style={{ y: nameY }}
                                        >
                                            <div className="details">
                                                <span className="name">
                                                    Jerin Jabbar A
                                                </span>
                                                <span className="position">
                                                    COO Ruppells group
                                                </span>
                                            </div>
                                            <div className="linkedin">
                                                <img
                                                    src="/icons/linkedin.svg"
                                                    alt="Linked In"
                                                />
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                                <div className="main-img-container">
                                    <div className="img-container">
                                        <motion.img
                                            style={{
                                                y: isBelow1480
                                                    ? heroImgY1480
                                                    : isBelow1280
                                                    ? heroImgY1280
                                                    : isBelow1080
                                                    ? heroImgY1080
                                                    : heroImgY,
                                            }}
                                            src="/images/shajahan.png"
                                            alt="CEO"
                                        />
                                        <motion.img
                                            style={{
                                                y: isBelow1480
                                                    ? heroImgY1480
                                                    : isBelow1280
                                                    ? heroImgY1280
                                                    : isBelow1080
                                                    ? heroImgY1080
                                                    : heroImgY,
                                            }}
                                            src="/images/shajahan.png"
                                            alt="CEO"
                                        />
                                    </div>
                                    <div className="content-wrapper">
                                        <motion.div
                                            className="content"
                                            style={{ y: nameY }}
                                        >
                                            <div className="details">
                                                <span className="name">
                                                    Shajahan yahiya
                                                </span>
                                                <span className="position">
                                                    CEO Ruppells group
                                                </span>
                                            </div>
                                            <div className="linkedin">
                                                <img
                                                    src="/icons/linkedin.svg"
                                                    alt="Linked In"
                                                />
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            className="content"
                                            style={{ y: nameY }}
                                        >
                                            <div className="details">
                                                <span className="name">
                                                    Salma Saifudeen
                                                </span>
                                                <span className="position">
                                                    CPO Ruppells group
                                                </span>
                                            </div>
                                            <div className="linkedin">
                                                <img
                                                    src="/icons/linkedin.svg"
                                                    alt="Linked In"
                                                />
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-container wrapper">
                    <motion.div className="moving-img-container">
                        {team.map((image, i) => (
                            <ImageCard image={image} key={i} />
                        ))}
                    </motion.div>
                    <motion.div className="moving-img-container">
                        {team.map((image, i) => (
                            <ImageCard image={image} key={i} />
                        ))}
                    </motion.div>
                    <motion.div className="moving-img-container">
                        {team.map((image, i) => (
                            <ImageCard image={image} key={i} />
                        ))}
                    </motion.div>
                    <motion.div className="moving-img-container">
                        {team.map((image, i) => (
                            <ImageCard image={image} key={i} />
                        ))}
                    </motion.div>
                </div>
            </section>
            <Footer />
        </Wrapper>
    );
};

export default AboutUsNew;

const Wrapper = styled.div`
    #about-us {
        overflow: clip;
        .container-wrapper {
            height: 100vh;
            background: url("/images/about-us-bg.png") no-repeat;
            .container {
                height: 100%;
                position: relative;
                h2 {
                    position: absolute;
                    left: 0;
                    top: 62%;
                    color: #fff;
                    text-shadow: 0px 0px 32px rgba(255, 255, 255, 0.2);
                    font-family: Satoshi-Medium;
                    font-size: 66px;
                    @media all and (max-width: 1280px) {
                        top: 60%;
                    }
                    @media all and (max-width: 980px) {
                        top: 58%;
                        font-size: 55px;
                    }
                    @media all and (max-width: 768px) {
                        top: 56%;
                        font-size: 50px;
                    }
                    @media all and (max-width: 640px) {
                        top: 52%;
                        font-size: 42px;
                    }
                    @media all and (max-width: 480px) {
                        font-size: 38px;
                    }
                    @media all and (max-width: 420px) {
                        font-size: 32px;
                    }
                    span {
                        font-size: inherit;
                        font-family: inherit;
                        background: linear-gradient(
                            98deg,
                            rgba(228, 83, 194, 0.9) 43.71%,
                            rgba(0, 127, 255, 0.9) 97.89%
                        );
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }
                p {
                    width: 80%;
                    position: absolute;
                    /* left: 55%;
                    transform: translateX(-50%); */
                    bottom: 10%;
                    color: #c7c7c7;
                    font-size: 18px;
                    line-height: 27px;
                    letter-spacing: 0.2px;
                    @media all and (max-width: 1280px) {
                        width: 90%;
                        font-size: 16px;
                    }
                    @media all and (max-width: 1280px) {
                        width: 100%;
                    }
                    @media all and (max-width: 480px) {
                        font-size: 14px;
                    }
                }
            }
        }
        .scroll-container {
            height: 200vh;
            .founders {
                /* padding: 100px; */
                height: 100vh;
                position: sticky;
                top: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                .content-container {
                    display: flex;
                    position: relative;
                    .moving-banner {
                        position: absolute;
                        bottom: -110px;
                        p {
                            font-family: Satoshi-Medium;
                            font-size: 40px;
                            color: #d9d9d9;
                            width: max-content;
                            animation: moveBanner 20s linear infinite;
                            display: flex;
                            align-items: center;
                            span {
                                width: 20px;
                                height: 20px;
                                border-radius: 50%;
                                background-color: #d9d9d9;
                                margin: 0 15px 0 30px;
                            }
                        }
                    }
                    .left {
                        padding-left: 80px;
                        width: 40%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        /* gap: 15px; */
                        @media all and (max-width: 1280px) {
                            padding-left: 50px;
                        }
                        .content-wrapper {
                            height: 128px;
                            overflow: hidden;
                            h4 {
                                color: #202020;
                                text-shadow: 0px 0px 32px
                                    rgba(255, 255, 255, 0.26);
                                font-family: Satoshi-Medium;
                                font-size: 36px;
                                margin-bottom: 15px;
                            }
                            span {
                                background: linear-gradient(
                                    98deg,
                                    rgba(228, 83, 194, 0.9) 43.71%,
                                    rgba(0, 127, 255, 0.9) 97.89%
                                );
                                background-clip: text;
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                font-family: inherit;
                                font-size: inherit;
                            }
                        }
                    }
                    .right {
                        right: 60%;
                        display: flex;
                        justify-content: space-evenly;
                        .main-img-container {
                            width: 42%;
                            .img-container {
                                width: 100%;
                                margin-bottom: 20px;
                                height: 386px;
                                overflow: hidden;
                                border-radius: 13px;
                                @media all and (max-width: 1448px) {
                                    height: 341px;
                                }
                                @media all and (max-width: 1280px) {
                                    height: 300px;
                                }
                                @media all and (max-width: 1080px) {
                                    height: 281px;
                                }
                                img {
                                    margin-bottom: 20px;
                                    &:last-child {
                                        margin-bottom: unset;
                                    }
                                }
                            }
                            .content-wrapper {
                                height: 50px;
                                overflow: hidden;
                                .content {
                                    display: flex;
                                    justify-content: space-between;
                                    margin-bottom: 15px;
                                    &:last-child {
                                        margin-bottom: unset;
                                    }
                                    /* height: 50px; */
                                    .details {
                                        display: flex;
                                        flex-direction: column;
                                        .name {
                                            color: #0a0a0a;
                                            font-family: Satoshi-Medium;
                                            font-size: 20px;
                                        }
                                        .position {
                                            background: linear-gradient(
                                                180deg,
                                                #15bbef 0%,
                                                #e600eb 100%
                                            );
                                            background-clip: text;
                                            -webkit-background-clip: text;
                                            -webkit-text-fill-color: transparent;
                                            font-size: 16px;
                                        }
                                    }
                                    .linkedin {
                                        width: 50px;
                                        padding: 10px;
                                        display: flex;
                                        align-items: center;
                                        border-radius: 8px;
                                        background-color: #5e5e5e;
                                        transition: background-color 2s ease;
                                        cursor: pointer;
                                        &:hover {
                                            background-color: #000;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .team-container {
            .moving-img-container {
                display: flex;
                flex-wrap: nowrap;
                margin-bottom: 15px;
                /* overflow: hidden; */
                gap: 13px;
            }
        }
    }
`;
