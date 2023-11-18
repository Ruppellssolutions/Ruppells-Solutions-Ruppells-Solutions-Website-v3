import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ServiceItem from "../services/ServiceItem";
import { Element } from "react-scroll";
import services from "../../utils/services";
// import AnimatedSectionTitle from '../general/AnimatedSectionTitle';


const Services = () => {
    const [activeIndexes, setIndexes] = useState([1]);
    const [activeIndex, setIndex] = useState(0);
    const [activeService, setActiveService] = useState(services[0]);

    const middleScrollbarHeight = 340;

    useEffect(() => {
        if (activeIndexes) {
            const lastIndex = Math.max(...activeIndexes);
            setActiveService(services[lastIndex - 1]);
            setIndex(lastIndex - 1);
        }
    }, [activeIndexes, activeIndex]);

    // const currentScrollbarHeight = `${(((services.length * middleScrollbarHeight) / 100) * Math.max(...activeIndexes)) /
    //     1.8
    //     }%`;

    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
    });

    const addItem = (item) => {
        const temp = [...new Set([...activeIndexes, item])];
        setIndexes(temp);
        removeItem(item);
    };
    const removeItem = (item) => {
        if (activeIndexes.includes(item + 1)) {
            const filteredIndexes = activeIndexes.filter((itm) => itm !== item + 1);
            setIndexes(filteredIndexes);
        }
    };

    useEffect(() => {
        scrollYProgress.on("change", (e) => {
            const scrollY = +e.toFixed(2);

            services.forEach((item, i) => {
                if (scrollY > item.startingPoint && scrollY < item.startingPoint + 0.2) {
                    addItem(item.slug);
                }
            });
        });
    }, [activeIndexes]);

    // .15, .28, .38, .49, .65, .76, .9

    const top1 = useTransform(scrollYProgress, [0.00, 0.15], ["-100%", "-100%"])
    const top2 = useTransform(scrollYProgress, [0.15, 0.30], ["0", "-100%"])
    const top3 = useTransform(scrollYProgress, [0.30, 0.45], ["0", "-100%"])
    const top4 = useTransform(scrollYProgress, [0.45, 0.60], ["0", "-100%"])
    const top5 = useTransform(scrollYProgress, [0.60, 0.75], ["0", "-100%"])
    const top6 = useTransform(scrollYProgress, [0.75, 0.90], ["0", "-100%"])
    const top7 = useTransform(scrollYProgress, [0.90, 1.00], ["0", "-100%"])
    // const top7 = useTransform(scrollYProgress, [0.90, 1.00], ["0", "-100%"])

    const tops = {
        1: top1,
        2: top2,
        3: top3,
        4: top4,
        5: top5,
        6: top6,
        7: top7,
    }

    const height = useTransform(scrollYProgress, [0, 1], ["10%", "100%"])

    return (
        <Container id="services" ref={containerRef}>
            <Element name="service">
                <Wrapper id="services-child">
                    <Content>
                        <Head>
                            <h4>
                                WHAT <span>WE DO</span> <br /> FOR YOU
                            </h4>
                            <div className="right">
                                <p
                                    className={
                                        activeService?.category === "IT_SERVICES"
                                            ? "active"
                                            : ""
                                    }
                                >
                                    #01 IT <span>Services</span>
                                </p>
                                <p
                                    className={
                                        activeService?.category === "DIGITAL_MARKETING"
                                            ? "active"
                                            : ""
                                    }
                                >
                                    #02 Digital <span>Marketing Services</span>
                                </p>
                            </div>
                        </Head>
                        <ServiceContent>
                            <div className="left">
                                <h5>
                                    {activeService.title}
                                    {/* <AnimatedSectionTitle
                                        titles={services}
                                        activeIndex={activeIndex}
                                    /> */}
                                </h5>
                            </div>
                            <MiddleScrollBar
                                style={{
                                    height: `${middleScrollbarHeight}px`,
                                }}
                            >
                                <motion.div
                                    className="scroll-container"
                                    style={{
                                        height,
                                        // height: currentScrollbarHeight,
                                    }}
                                >
                                    <div className="round"></div>
                                </motion.div>
                            </MiddleScrollBar>
                            <div className="right">
                                {services.map((ite, i) => (
                                    <ServiceItem
                                        id={i + 1}
                                        key={i}
                                        top={tops[ite.slug]}
                                        serviceItem={ite}
                                        setActiveService={setActiveService}
                                        scrollY={scrollYProgress}
                                        prevItem={services[i - 0]}
                                    // activeIndex={activeIndexes}
                                    // isActive={activeIndexes.includes(i + 1)}
                                    />
                                ))}
                            </div>
                        </ServiceContent>
                    </Content>
                </Wrapper>
            </Element>
        </Container>
    );
};

export default Services;

const Container = styled.section`
    min-height: 100vh;
    /* padding-top: 100vh; */
    scroll-behavior: smooth;
    /* transform: translateX(0); */
    z-index: 100;
    position: relative;
`;
const Wrapper = styled.div`
    width: 100%;
    min-height: 550vh;
    margin-top: 100vh;
`;
const Content = styled(motion.div)`
    background-color: #fbfbfc;
    height: 95vh;
    border: 1px solid #808080cc;
    border-radius: 80px 80px 52px 52px;
    padding: 32px;
    width: 90%;
    margin: 0 5%;
    position: sticky;
    top: 15vh;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media all and (max-width: 980px) {
        width: 100%;
        margin: 0;
        border-radius: 48px 48px 28px 28px;
        padding: 32px 12px;
    }
    @media all and (max-width: 720px) {
        padding: 12px 6px;
        gap: 42px;
        border-radius: 38px 38px 20px 20px;
    }
    @media all and (max-width: 640px) {
        top: 12vh;
        height: 89vh;
    }
`;
const Head = styled.div`
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 32px;

    @media all and (max-width: 720px) {
        padding: 32px 32px 0 32px;
    }
    @media all and (max-width: 469px) {
        padding: 20px 20px 0 20px;
    }

    h4 {
        color: #111;
        font-size: 26px;
        font-family: Satoshi-Medium;
        text-transform: uppercase;

        @media all and (max-width: 1080px) {
            font-size: 22px;
        }
        @media all and (max-width: 720px) {
            font-size: 17px;
        }

        span {
            font: inherit;
            background: linear-gradient(106deg, #ce4fe3 0%, #36b2ea 101.89%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    .right {
        p {
            font-size: 20px;
            font-family: Satoshi-Regular;
            color: #a0a0a0;
            text-align: right;

            @media all and (max-width: 1080px) {
                font-size: 17px;
            }
            @media all and (max-width: 720px) {
                font-size: 14px;
            }

            &,
            span {
                transition: all 0.3s ease-in-out;
            }

            span {
                font-size: inherit;
                font-family: Satoshi-Medium;
                color: #a0a0a0;
            }

            &.active {
                color: #111;

                span {
                    color: #111;
                }
            }
        }
    }
`;
const ServiceContent = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    max-height: 480px;
    width: 100%;
    padding: 32px;

    @media all and (max-width: 720px) {
        flex-direction: column;
        padding: 26px;
        max-height: 70%;
    }
    @media all and (max-width: 460px) {
        padding: 16px;
    }

    .left,
    .right {
        height: 400px;
        width: calc(50% - 20px - 14px);
        /* background-color: #666; */

        @media all and (max-width: 768px) {
            height: 360px;
        }
    }

    .right {
        background: none;
        position: relative;
        overflow: hidden;
        border-radius: 18px;

        @media all and (max-width: 1180px) {
            width: calc(100% - 38% - 34px);
        }
        @media all and (max-width: 920px) {
            width: calc(68% - 20px);
        }
        @media all and (max-width: 720px) {
            width: 100%;
            height: 70vh;
        }
    }
    .left {
        display: flex;
        align-items: center;
        /* justify-content: center; */

        @media all and (max-width: 1180px) {
            width: 38%;
        }
        @media all and (max-width: 1180px) {
            width: 32%;
        }
        @media all and (max-width: 720px) {
            width: 100%;
            height: max-content;
        }

        h5,
        span {
            /* max-width: 70%; */
            color: #202020;
            font-size: 38px;
            font-family: Satoshi-Medium;

            @media all and (max-width: 1080px) {
                font-size: 29px;
            }
            @media all and (max-width: 920px) {
                font-size: 24px;
            }
            @media all and (max-width: 720px) {
                font-size: 19px;
            }
        }
    }
`;
const MiddleScrollBar = styled.div`
    width: 28px;
    background: linear-gradient(
        180deg,
        rgba(217, 217, 217, 0) 0%,
        rgba(238, 238, 238, 0.89) 62.5%,
        rgba(226, 226, 226, 0) 100%
    );
    /* height: 400px; */

    @media all and (max-width: 980px) {
        width: 20px;
    }
    @media all and (max-width: 920px) {
        display: none;
    }

    .scroll-container {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;
        height: 100%;
        max-height: max-content;
        /* transition: all 0.3s ease-in-out; */
        padding: 4px;
        border-radius: 25px;
        background: linear-gradient(180deg, rgba(180, 146, 225, 0) 0%, #b492e1 100%);

        .round {
            width: 20px;
            height: 20px;
            background-color: #fff;
            border-radius: 50%;

            @media all and (max-width: 980px) {
                width: 16px;
                height: 16px;
            }
        }
    }
`;
