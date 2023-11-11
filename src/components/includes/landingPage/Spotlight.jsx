import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ServicePopup from '../spotlight/ServicePopup'

import infinityAnimation from "../../../assets/GIF/infinity-animation.gif"
import AnimatedSectionTitle from '../general/AnimatedSectionTitle'
import useDimension from '../../hooks/useDimension'


const Spotlight = () => {
    const targetRef = useRef()

    const [isActive, setActive] = useState(false)

    const { scrollYProgress } = useScroll({
        target: targetRef,
    })
    const { scrollYProgress: globalScrollY } = useScroll()

    const scaleEndValue = .23

    const scale = useTransform(scrollYProgress, [0, 1], [1, scaleEndValue])
    const y950 = useTransform(scrollYProgress, [0, 1], ["0", "-20vh"])
    const y560 = useTransform(scrollYProgress, [0, 1], ["0", "-15vh"])
    const scale950 = useTransform(scrollYProgress, [0, 1], [1.1, .3])
    const scale560 = useTransform(scrollYProgress, [0, 1], [2.5, .4])
    const scale380 = useTransform(scrollYProgress, [0, 1], [2.8, .4])
    const contentScale = useTransform(scrollYProgress, [0, 1], [1, .23])
    const contentY = useTransform(scrollYProgress, [0, 1], ["0", "5vh"])
    const contentY950 = useTransform(scrollYProgress, [0, 1], ["0", "-20vh"])
    const contentY560 = useTransform(scrollYProgress, [0, 1], ["0", "-15vh"])
    const contentX560 = useTransform(scrollYProgress, [0, 1], ["0", "-7vw"])

    const opacity = useTransform(globalScrollY, [.28, .3], [1, 0])

    useEffect(() => {
        const unSubscribe = scale.on("change", (currentScale) => {

            if (+ currentScale.toFixed(2) === scaleEndValue) {
                setActive(true)
            } else {
                setActive(false)
            }
        })

        return () => unSubscribe()
    }, [])

    const titles = [
        {
            title: "FASTER",
        },
        {
            title: "WITH EASE",
        },
        {
            title: "EFFICIENTLY",
        },
    ]

    const { width } = useDimension()

    const lapframeStyles = (type = "parent") => {
        const options = {
            parent: {
                res: [
                    {
                        resolution: 380,
                        props: {
                            scale: scale380,
                            y: y560,
                        }
                    },
                    {
                        resolution: 560,
                        props: {
                            scale: scale560,
                            y: y560,
                        }
                    },
                    {
                        resolution: 950,
                        props: {
                            y: y950,
                            scale: scale950,
                        }
                    },
                ],
                defaultProps: {
                    scale
                }
            },
            child: {
                res: [
                    {
                        resolution: 560,
                        props: {
                            scale: contentScale,
                            y: contentY950,
                            x: contentX560,
                        }
                    },
                    {
                        resolution: 980,
                        props: {
                            scale: contentScale,
                            y: contentY950
                        }
                    },
                    {
                        resolution: 1180,
                        props: {
                            scale: contentScale,
                        }
                    },
                ],
                defaultProps: {
                    scale: contentScale,
                    y: contentY
                }
            },
        }

        if (type in options) {
            const currentOption = options[type]
            let props = currentOption.defaultProps;

            for (let i = 0; i < currentOption.res.length; i++) {
                const res = currentOption.res[i]
                if (res?.resolution > width) {
                    props = res.props
                    break
                }
            }

            return props
        }
        return {}
    }

    return (
        <Container ref={targetRef} className='Spotlight'>
            <ServicePopup
                isActive={isActive}
                style={{ opacity }}
            />
            <LapFrame
                style={{ ...lapframeStyles("parent"), opacity }}
            >
                <LapScreen>
                </LapScreen>
            </LapFrame>
            <LapScreenContent
                style={{ ...lapframeStyles("child"), opacity }}
            >
                <p className="welcome">
                    <span>Welcome to</span>&nbsp; Ruppells Solutions
                </p>
                <h3>
                    We Grow your <br /> Business&nbsp;
                    <AnimatedSectionTitle
                        titles={titles}
                        infinity
                    />
                </h3>
            </LapScreenContent>
        </Container>
    )
}

export default Spotlight

const Container = styled.section`
    height: 150vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    position: relative;
`
const LapFrame = styled(motion.div)`
    z-index: 100;
    /* width: 800px;
    height: 500px; */
    width: 210vw;
    height: 255vh;
    /* aspect-ratio: 1; */
    position: fixed;
    pointer-events: none;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    /* scale: 1; */
    /* background: url('/images/Laptop.png') -15px 22px no-repeat; */
    background: url(/images/Laptop-02.png) 54% center no-repeat;
    background-size: 85%;
    /* background-size: cover; */
    display: flex;
    align-items: center;
    justify-content: center;
`
const LapScreenContent = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 110;
    translate: -50% -50%;
    padding: 10vw 5vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media all and (max-width: 980px){
        /* padding:20vw  10vw ; */
    }

    p.welcome{
        font-size: 28px;
        color: #F3F3F3;
        position: relative;
        margin-bottom: 22px;
        width: max-content;

        @media all and (max-width: 980px){
            font-size: 22px;
        }
        @media all and (max-width: 768px){
            font-size: 19px;
        }
        @media all and (max-width: 460px){
            font-size: 16px;
        }

        span{
            font: inherit;
            color: #BBBBBB;
        }

        &::before{
            content:"";
            position: absolute;
            left: 0;
            bottom: 0px;
            width: 30%;
            height: .4px;
            background-color: #eee;
            border-radius: 1px;
        }
    }
    h3{
        color: #F3F3F3;
        font-size: 57px;
        font-family: Satoshi-Medium;
        text-transform: uppercase;

        @media all and (max-width: 980px){
            font-size: 42px;
        }
        @media all and (max-width: 768px){
            font-size: 34px;
        }
        @media all and (max-width: 460px){
            font-size: 26px;
        }
        
        span{
            font: inherit;
            font-family: Satoshi-Medium;
            background:linear-gradient(106deg, #CE4FE3 0%, #36B2EA 101.89%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`
const LapScreen = styled.div`
    position: relative;
    /* top: 18vh; */
    z-index: 10;
    pointer-events: all;
    background: url(${infinityAnimation}) center center no-repeat;
    background-size: cover;
    background-color: #000;
    /* width: 454px;
    height: 288px; */
    width: 105vw;
    height: 70vw;
    /* height: 100vh; */
    border-radius: 10px;
    padding: 132px 45px 40px;
    overflow: hidden;
`