import React, { useState } from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import Tabs from "../Tabs";
import GridCard from "../GridCard";
import PortfolioFooter from "./PortfolioFooter";

const Portfolio = () => {
    const tabsData = [
        "All",
        "Mobile apps",
        "Websites",
        "Digital marketing",
        "Content marketing",
        "Web apps",
    ];
    const imageSetLeft = [
        {
            src: "/images/portfolio/img1.png",
            loading: "lazy",
            // sizes: "(max-width: 767px) 100vw, (max-width: 991px) 152.83253479003906px, 34vw",
            alt: "",
            className: "numbers-image",
        },
        {
            src: "/images/portfolio/img2.png",
            loading: "lazy",
            // sizes: "(max-width: 767px) 100vw, (max-width: 991px) 91.45758819580078px, 9vw",
            alt: "",
            className: "numbers-image",
        },
        {
            src: "/images/portfolio/img3.png",
            loading: "lazy",
            // sizes: "(max-width: 767px) 100vw, (max-width: 991px) 60.8497428894043px, 6vw",
            alt: "",
            className: "numbers-image",
        },
        {
            src: "/images/portfolio/img4.png",
            loading: "lazy",
            // sizes: "(max-width: 767px) 100vw, (max-width: 991px) 43.39750671386719px, 4vw",
            alt: "",
            className: "numbers-image",
        },
        {
            src: "/images/portfolio/img2.png",
            loading: "lazy",
            // sizes: "(max-width: 767px) 100vw, (max-width: 991px) 32.509056091308594px, 3v",
            alt: "",
            className: "numbers-image",
        },
    ];
    const imageSetRight = [
        {
            src: "/images/portfolio/img1.png",
            loading: "lazy",
            // sizes: "(max-width: 767px) 100vw, (max-width: 991px) 32.509056091308594px, 3vw",
            alt: "",
            className: "numbers-image",
        },
        {
            src: "/images/portfolio/img2.png",
            loading: "lazy",
            // sizes: "(max-width: 767px) 100vw, (max-width: 991px) 43.39750671386719px, 4vw",
            alt: "",
            className: "numbers-image",
        },
        {
            src: "/images/portfolio/img3.png",
            loading: "lazy",
            // sizes: "(max-width: 767px) 100vw, (max-width: 991px) 60.8497428894043px, 6vw",
            alt: "",
            className: "numbers-image",
        },
        {
            src: "/images/portfolio/img4.png",
            loading: "lazy",
            // sizes: "(max-width: 767px) 100vw, (max-width: 991px) 91.45761108398438px, 9vw",
            alt: "",
            className: "numbers-image",
        },
        {
            src: "/images/portfolio/img2.png",
            loading: "lazy",
            // sizes: "(max-width: 767px) 100vw, (max-width: 991px) 152.8325653076172px, 34vw",
            alt: "",
            className: "numbers-image",
        },
    ];
    const gridCardBg = [
        "/images/portfolio/card-bg-one.png",
        "/images/portfolio/card-bg-two.png",
        "/images/portfolio/card-bg-three.png",
        "/images/portfolio/card-bg-four.png",
        "/images/portfolio/card-bg-five.png",
        "/images/portfolio/card-bg-six.png",
    ];

    return (
        <Wrapper>
            <section id="portfolio" className="wrapper">
                <div className="animation">
                    <div className="numbers-screen">
                        <div className="numbers-bg-grad"></div>
                        <div className="numbers-grad"></div>
                        <div className="numbers-grad is-right"></div>
                        <div className="numbers-screen-left">
                            <div className="numbers-screen-box-left">
                                {imageSetLeft.map((item, i) => (
                                    <img
                                        key={i}
                                        src={item.src}
                                        loading={item.loading}
                                        sizes={item.sizes}
                                        alt={item.alt}
                                        className={item.className}
                                    />
                                ))}
                            </div>
                            <div className="numbers-screen-box-left">
                                {imageSetLeft.map((item, i) => (
                                    <img
                                        key={i}
                                        src={item.src}
                                        loading={item.loading}
                                        sizes={item.sizes}
                                        alt={item.alt}
                                        className={item.className}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="numbers-screen-right">
                            <div className="numbers-screen-box-right">
                                {imageSetRight.map((item, i) => (
                                    <img
                                        key={i}
                                        src={item.src}
                                        loading={item.loading}
                                        sizes={item.sizes}
                                        alt={item.alt}
                                        className={item.className}
                                    />
                                ))}
                            </div>
                            <div className="numbers-screen-box-right">
                                {imageSetRight.map((item, i) => (
                                    <img
                                        key={i}
                                        src={item.src}
                                        loading={item.loading}
                                        sizes={item.sizes}
                                        alt={item.alt}
                                        className={item.className}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h4>
                            <span>our</span> portfolio
                        </h4>
                        <div className="counter-wrapper">
                            <div className="number-card">
                                <span>
                                    <CountUp end={100} duration={3} />+
                                </span>
                                <p>Completed projects</p>
                            </div>
                            <div className="number-card">
                                <span>
                                    <CountUp end={13} duration={3} />+
                                </span>
                                <p>Years of experience</p>
                            </div>
                            <div className="number-card">
                                <span>
                                    <CountUp end={118} duration={3} />+
                                </span>
                                <p>Clients worldwide</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Tabs data={tabsData} />
                <div class="grid-container">
                    {gridCardBg.map((url, i) => (
                        <GridCard key={i} url={url} />
                    ))}
                </div>
                <PortfolioFooter />
            </section>
        </Wrapper>
    );
};

export default Portfolio;

const Wrapper = styled.div`
    background-color: #060707;
    padding-top: 100px;
    #portfolio {
        .animation {
            height: 460px;
            z-index: 2;
            position: relative;
            overflow: hidden;
            margin-bottom: 100px;
            .numbers-screen {
                z-index: -1;
                opacity: 0.5;
                perspective: 1412px;
                position: absolute;
                top: 0%;
                bottom: 0%;
                left: 0%;
                right: 0%;
                overflow: hidden;
                .numbers-bg-grad {
                    z-index: 1;
                    background-image: radial-gradient(
                        circle,
                        rgba(255, 255, 255, 0.1),
                        transparent 50%
                    );
                    position: absolute;
                    top: 0%;
                    bottom: 0%;
                    left: 0%;
                    right: 0%;
                }
                .numbers-grad {
                    z-index: 0;
                    width: 290vw;
                    height: 50vw;
                    transform-origin: 0%;
                    transform-style: preserve-3d;
                    background-image: linear-gradient(
                        270deg,
                        #060707 50%,
                        transparent 80%
                    );
                    flex: none;
                    margin-top: auto;
                    margin-bottom: auto;
                    position: absolute;
                    top: 0%;
                    bottom: 0%;
                    left: 0%;
                    right: auto;
                    transform: rotate3d(0, 1, 0.0000949539, 80deg);
                }
                .is-right {
                    transform-origin: 100%;
                    transform-style: preserve-3d;
                    background-image: linear-gradient(
                        90deg,
                        #060707 50%,
                        transparent 80%
                    );
                    top: 0%;
                    bottom: 0%;
                    left: auto;
                    right: 0%;
                    transform: rotateX(0) rotateY(-80deg) rotate(0);
                }
                .numbers-screen-left {
                    z-index: -1;
                    transform-origin: 0%;
                    transform-style: preserve-3d;
                    justify-content: flex-start;
                    display: flex;
                    position: absolute;
                    top: 0%;
                    bottom: 0%;
                    left: 0%;
                    right: auto;
                    transform: rotate3d(0, 1, 0.0000949539, 80deg);
                    .numbers-screen-box-left {
                        flex: none;
                        display: flex;
                        transform: translate(0%, 0px);
                        animation-name: bgshots;
                        animation-duration: 45s;
                        animation-timing-function: linear;
                        animation-iteration-count: infinite;
                        img {
                            border: 0;
                            vertical-align: middle;
                            max-width: 100%;
                            display: inline-block;
                            width: 40vw;
                            perspective: 100px;
                            object-fit: contain;
                            flex: none;
                            margin-left: 3rem;
                            margin-right: 3rem;
                            transform: perspective(100px);
                        }
                        .numbers-image {
                            width: 40vw;
                            perspective: 100px;
                            object-fit: contain;
                            flex: none;
                            margin-left: 3rem;
                            margin-right: 3rem;
                            transform: perspective(100px);
                        }
                    }
                }
                .numbers-screen-right {
                    z-index: -1;
                    transform-origin: 100%;
                    transform-style: preserve-3d;
                    justify-content: flex-end;
                    display: flex;
                    position: absolute;
                    top: 0%;
                    bottom: 0%;
                    left: auto;
                    right: 0%;
                    transform: rotateX(0) rotateY(-80deg) rotate(0);
                    .numbers-screen-box-right {
                        flex: none;
                        display: flex;
                        transform: translate(0%, 0px);
                        animation-name: bgshotsright;
                        animation-duration: 45s;
                        animation-timing-function: linear;
                        animation-iteration-count: infinite;
                        img {
                            border: 0;
                            vertical-align: middle;
                            max-width: 100%;
                            display: inline-block;
                            width: 40vw;
                            perspective: 100px;
                            object-fit: contain;
                            flex: none;
                            margin-left: 3rem;
                            margin-right: 3rem;
                            transform: perspective(100px);
                            .numbers-image {
                                width: 40vw;
                                perspective: 100px;
                                object-fit: contain;
                                flex: none;
                                margin-left: 3rem;
                                margin-right: 3rem;
                                transform: perspective(100px);
                            }
                        }
                    }
                }
            }
            .container {
                position: absolute;
                bottom: 10%;
                left: 50%;
                transform: translateX(-50%);
                h4 {
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 70px;
                    text-transform: uppercase;
                    margin-bottom: 20px;
                    span {
                        font-size: inherit;
                        background: linear-gradient(
                            106deg,
                            #ce4fe3 0%,
                            #36b2ea 101.89%
                        );

                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }
                .counter-wrapper {
                    display: flex;
                    justify-content: space-between;
                    .number-card {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        span {
                            color: #f9f9f9;
                            text-shadow: 0px 0px 32px rgba(255, 255, 255, 0.26);
                            font-family: Satoshi-Bold;
                            font-size: 38px;
                        }
                        p {
                            color: rgba(205, 205, 205, 0.9);
                            text-shadow: 0px 0px 32px rgba(255, 255, 255, 0.26);
                            font-size: 20px;
                        }
                    }
                }
            }
        }
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 20px;
        }
    }
`;
