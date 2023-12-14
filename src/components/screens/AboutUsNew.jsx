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
    const imgRef = useRef(null);
    const [height, setHeight] = useState(0);

    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        const observeHeightChanges = () => {
            const observer = new ResizeObserver((entries) => {
                for (let entry of entries) {
                    if (entry.contentRect) {
                        setHeight(entry.contentRect.height);
                    }
                }
            });
            const contentObserver = new ResizeObserver((entries) => {
                for (let entry of entries) {
                    if (entry.contentRect) {
                        setContentHeight(entry.contentRect.height);
                    }
                }
            });

            if (imgRef.current) {
                observer.observe(imgRef.current);
            }
            if (contentRef.current) {
                contentObserver.observe(contentRef.current);
            }

            return () => {
                if (imgRef.current) {
                    observer.unobserve(imgRef.current);
                }
                if (contentRef.current) {
                    contentObserver.unobserve(contentRef.current);
                }
            };
        };

        observeHeightChanges();
    }, []);

    const newHeight = height + 20;
    const contentY = useTransform(
        scrollYProgress,
        [0.1, 0.8],
        ["0", `-${contentHeight}px`]
    );
    const heroImgY = useTransform(
        scrollYProgress,
        [0.1, 0.8],
        ["0", `-${newHeight}px`]
    );

    const nameY = useTransform(scrollYProgress, [0.1, 0.8], ["0", "-65px"]);

    const team = [
        "/images/EmployeeOne.png",
        "/images/employeeTwo.png",
        "/images/EmployeeThree.png",
        "/images/EmployeeOne.png",
        "/images/employeeTwo.png",
        "/images/EmployeeThree.png",
        "/images/EmployeeOne.png",
        "/images/employeeTwo.png",
        "/images/EmployeeThree.png",
        "/images/EmployeeOne.png",
        "/images/employeeTwo.png",
        "/images/EmployeeThree.png",
        "/images/EmployeeOne.png",
        "/images/employeeTwo.png",
        "/images/EmployeeThree.png",
        "/images/EmployeeOne.png",
        "/images/employeeTwo.png",
        "/images/EmployeeThree.png",
        "/images/EmployeeOne.png",
        "/images/employeeTwo.png",
        "/images/EmployeeThree.png",
        "/images/EmployeeOne.png",
        "/images/employeeTwo.png",
        "/images/EmployeeThree.png",
    ];

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
                                <div
                                    className="content-wrapper"
                                    ref={contentRef}
                                >
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
                                    <div className="img-container" ref={imgRef}>
                                        <motion.img
                                            style={{
                                                y: heroImgY,
                                            }}
                                            src="/images/siddiq.png"
                                            alt="CEO"
                                        />
                                        <motion.img
                                            style={{
                                                y: heroImgY,
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
                                                y: heroImgY,
                                            }}
                                            src="/images/shajahan.png"
                                            alt="CEO"
                                        />
                                        <motion.img
                                            style={{
                                                y: heroImgY,
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
                            padding-left: unset;
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
                                @media all and (max-width: 1280px) {
                                    font-size: 34px;
                                }
                                @media all and (max-width: 1080px) {
                                    font-size: 28px;
                                    margin-bottom: 5px;
                                }
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
                            p {
                                color: #9e9e9e;
                                font-size: 20px;
                                letter-spacing: 0.22px;
                                @media all and (max-width: 1280px) {
                                    font-size: 18px;
                                }
                                @media all and (max-width: 1080px) {
                                    font-size: 16px;
                                }
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
                                aspect-ratio: 1/1.1;
                                overflow: hidden;
                                border-radius: 13px;
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
                display: grid;
                grid-template-columns: repeat(6, 1fr);
                gap: 15px;
                @media all and (max-width: 1380px) {
                    grid-template-columns: repeat(5, 1fr);
                }
                @media all and (max-width: 1280px) {
                    grid-template-columns: repeat(4, 1fr);
                }
                @media all and (max-width: 768px) {
                    grid-template-columns: repeat(3, 1fr);
                }
                @media all and (max-width: 480px) {
                    grid-template-columns: repeat(2, 1fr);
                }
            }
        }
    }
`;
