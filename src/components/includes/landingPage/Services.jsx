import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import useSections from '../../context/useSections';
import ServiceItem from '../services/ServiceItem';
import { Element } from 'react-scroll';


const Services = () => {
    const services = [
        {
            slug: 1,
            startingPoint: 0.3,
            title: "Branding",
            category: "DIGITAL_MARKETING",
            image: "/images/services/branding.png",
            services: [
                {
                    title: "Logo",
                },
                {
                    title: "Brand Taglines",
                },
                {
                    title: "Brand Colour",
                },
                {
                    title: "Brand Vision",
                },
                {
                    title: "Brand Mission",
                },
                {
                    title: "Brand Book",
                },
            ]
        },
        {
            slug: 2,
            startingPoint: 0.4,
            title: "Social Media Marketing",
            category: "DIGITAL_MARKETING",
            image: "/images/services/social-media-marketing.png",
            services: [
                {
                    title: "Logo",
                },
                {
                    title: "Brand Taglines",
                },
                {
                    title: "Brand Colour",
                },
                {
                    title: "Brand Vision",
                },
                {
                    title: "Brand Mission",
                },
                {
                    title: "Brand Book",
                },
            ]
        },
        {
            slug: 3,
            startingPoint: 0.5,
            title: "Content Marketing",
            category: "DIGITAL_MARKETING",
            image: "/images/services/content-marketing.png",
            services: [
                {
                    title: "Logo",
                },
                {
                    title: "Brand Taglines",
                },
                {
                    title: "Brand Colour",
                },
                {
                    title: "Brand Vision",
                },
                {
                    title: "Brand Mission",
                },
                {
                    title: "Brand Book",
                },
            ]
        },
        {
            slug: 4,
            startingPoint: 0.6,
            title: "Website Development",
            category: "IT_SERVICES",
            image: "/images/services/website-development.png",
            services: [
                {
                    title: "Logo",
                },
                {
                    title: "Brand Taglines",
                },
                {
                    title: "Brand Colour",
                },
                {
                    title: "Brand Vision",
                },
                {
                    title: "Brand Mission",
                },
                {
                    title: "Brand Book",
                },
            ]
        },
        {
            slug: 5,
            startingPoint: 0.7,
            title: "Web App Development",
            category: "IT_SERVICES",
            image: "/images/services/web-app-dev.png",
            services: [
                {
                    title: "Logo",
                },
                {
                    title: "Brand Taglines",
                },
                {
                    title: "Brand Colour",
                },
                {
                    title: "Brand Vision",
                },
                {
                    title: "Brand Mission",
                },
                {
                    title: "Brand Book",
                },
            ]
        },
        {
            slug: 6,
            startingPoint: 0.8,
            title: "Mobile App Development",
            category: "IT_SERVICES",
            image: "/images/services/mobile-app-dev.png",
            services: [
                {
                    title: "Logo",
                },
                {
                    title: "Brand Taglines",
                },
                {
                    title: "Brand Colour",
                },
                {
                    title: "Brand Vision",
                },
                {
                    title: "Brand Mission",
                },
                {
                    title: "Brand Book",
                },
            ]
        },
        {
            slug: 7,
            startingPoint: 0.9,
            title: "E-Commerce Platform",
            category: "IT_SERVICES",
            image: "/images/services/e-commerce.png",
            services: [
                {
                    title: "Logo",
                },
                {
                    title: "Brand Taglines",
                },
                {
                    title: "Brand Colour",
                },
                {
                    title: "Brand Vision",
                },
                {
                    title: "Brand Mission",
                },
                {
                    title: "Brand Book",
                },
            ]
        },
    ]

    const [activeIndex, setIndex] = useState([1])
    const [activeService, setActiveService] = useState(services[0])

    const middleScrollbarHeight = 400

    useEffect(() => {
        if (activeIndex) {
            const lastIndex = Math.max(...activeIndex)
            setActiveService(services[lastIndex - 1])
        }
    }, [activeIndex])

    const currentScrollbarHeight = `${(((services.length * middleScrollbarHeight) / 100) * (Math.max(...activeIndex)) / 2)}%`

    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
    })

    const addItem = item => {
        const temp = [...new Set([...activeIndex, item])]
        setIndex(temp)
        removeItem(item)
    }
    const removeItem = item => {
        if (activeIndex.includes(item + 1)) {
            const filteredIndexes = activeIndex.filter(itm => itm !== item + 1)
            setIndex(filteredIndexes)
        }
    }

    useEffect(() => {
        scrollYProgress.on("change", e => {
            const scrollY = +(e.toFixed(2))

            services.forEach((item, i) => {
                if (scrollY > item.startingPoint && scrollY < (item.startingPoint + 0.1)) {
                    addItem(item.slug)
                }
            })
        })
    }, [activeIndex])

    return (
        <Container id="services" ref={containerRef}>
            <Element name="service">
                <Wrapper>
                    <Content
                    // style={{ y }}
                    >
                        <Head>
                            <h4>WHAT <span>WE DO</span> <br /> FOR YOU</h4>
                            <div className="right">
                                <p className={activeService?.category === "DIGITAL_MARKETING" ? "active" : ""}>#01 Digital <span>Marketing Services</span></p>
                                <p className={activeService?.category === "IT_SERVICES" ? "active" : ""}>#02 IT <span>Services</span></p>
                            </div>
                        </Head>
                        <ServiceContent>
                            <div className="left">
                                <h5>{activeService.title}</h5>
                            </div>
                            <MiddleScrollBar
                                style={{
                                    height: `${middleScrollbarHeight}px`
                                }}
                            >
                                <div
                                    className="scroll-container"
                                    style={{
                                        height: currentScrollbarHeight,
                                    }}
                                >
                                    <div className="round"></div>
                                </div>
                            </MiddleScrollBar>
                            <div className="right">
                                {services.map((ite, i) => (
                                    <ServiceItem
                                        id={i + 1}
                                        key={i}
                                        serviceItem={ite}
                                        activeIndex={activeIndex}
                                        isActive={activeIndex.includes(i + 1)}
                                    />
                                ))}
                            </div>
                        </ServiceContent>
                    </Content>
                </Wrapper>
            </Element>
        </Container>
    )
}

export default Services

const Container = styled.section`
    min-height: 100vh;
    padding-top: 100vh;
    scroll-behavior: smooth;
    /* transform: translateX(0); */
    z-index: 100;
    position: relative;
`
const Wrapper = styled.div`
    width: 100%;
    min-height: 500vh;
`
const Content = styled(motion.div)`
    background-color:#FBFBFC;
    height: 90vh;
    border: 1px solid #808080cc;
    border-radius: 20px;
    padding: 32px;
    /* overflow-y: scroll; */
    width: 85%;
    margin: 0 7.5%;

    /* position: fixed;
    bottom: -100vh; */

    position: sticky;
    top: 15vh;
`
const ScrollContainer = styled.div`
    position: relative;
    height: 185vh;
`
const Head = styled.div`
    z-index: 100;
    /* background-color: #fff; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* position: sticky;
    left: 0;
    top: 0; */
    width: 100%;
    padding: 32px;

    h4{
        color: #111;
        font-size: 26px;
        font-family: Satoshi-Medium;
        text-transform: uppercase;

        span{
            font: inherit;
            background:linear-gradient(106deg, #CE4FE3 0%, #36B2EA 101.89%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    .right{
        p{
            font-size: 20px;
            font-family: Satoshi-Regular;
            color: #A0A0A0;
            /* color: #2C2C2C; */
            text-align: right;

            &,span{
                transition: all 0.3s ease-in-out;
            }

            span{
                font-size: inherit;
                font-family: Satoshi-Medium;
                color: #A0A0A0;
            }

            &.active{
                color: #111;

                span{
                    color: #111;
                }
            }
        }
    }
`
const ServiceContent = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    max-height: 400px;
    /* position: sticky;
    top: 166px;
    left: 0; */
    width: 100%;
    padding: 32px;

    .left,.right{
        height: 380px;
        width: calc(45% - 10px);
        /* background-color: #666; */
    }
    .right{
        background: none;
        position: relative;
        overflow: hidden;
        border-radius: 18px;
    }
    .left{
        display: flex;
        align-items: center;
        justify-content: center;

        h5{
            max-width: 70%;
            color: #202020;
            font-size: 38px;
            font-family: Satoshi-Medium;
        }
    }
`
const MiddleScrollBar = styled.div`
    width: 28px;
    background: linear-gradient(180deg, rgba(217, 217, 217, 0.00) 0%, rgba(238, 238, 238, 0.89) 62.5%, rgba(226, 226, 226, 0.00) 100%);
    /* height: 400px; */
    
    .scroll-container{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;
        height: 100%;
        max-height: max-content;
        transition: all 0.3s ease-in-out;
        padding: 4px;
        border-radius: 25px;
        background: linear-gradient(180deg, rgba(180, 146, 225, 0.00) 0%, #B492E1 100%);

        .round{
            width: 20px;
            height: 20px;
            background-color: #fff;
            border-radius: 50%;
        }
    }
`
const ServiceItemContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 4px;
    position: absolute;
    border-radius: 18px;
    border: 1px solid #d3d3d3;
    /* top: 0; */
    background-color: #fff;
    top: 80vh;
    left: 0;
    transition: top 0.6s ease-in-out;
    /* bottom: 0; */

    display: flex;
    gap: 20px;

    &.active{
        top: 0;
    }
    &.small{
        opacity: 0;
    }
`

const IntersectionContainer = styled.div`
    position: absolute;
    width: 100%;
    top: 80vh;
    left: 0;
    z-index: 100;
`
const IntersectionItem = styled.div`
    height: 20px;
    /* background-color: red; */
    /* margin-bottom: 180px; */
`
const ServiceItemLeft = styled.div`
    width: calc(57% - 10px);

    img{
        width: auto;
        /* max-width: auto; */
        max-height: 100%;
    }
`
const ServiceItemRight = styled.div`
    width: calc(43% - 10px);
    display: flex;
    align-items: center;
    justify-content: center;

    ul{
        width: 100%;
        li{
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 16px;

            &:last-child{
                margin: 0;
            }

            span.icon{
                img{
                    width: 20px;
                }
            }
            span.service{
                color: #5E5E5E;
                font-size: 17px;
            }
        }
    }
`