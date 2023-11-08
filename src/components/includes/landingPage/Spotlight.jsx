import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ServicePopup from '../spotlight/ServicePopup'

import infinityAnimation from "../../../assets/GIF/infinity-animation.gif"

const Spotlight = () => {
    const targetRef = useRef()

    const [isActive, setActive] = useState(false)

    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const { scrollYProgress: globalScrollY } = useScroll()

    const scaleEndValue = 1

    const scale = useTransform(scrollYProgress, [0, 1], [3.6, scaleEndValue])
    const opacity = useTransform(globalScrollY, [.28, .3], [1, 0])
    // const smoothScale = useSpring(scale, { stiffness: 100, damping: 16 });



    useEffect(() => {
        const unSubscribe = scale.on("change", (currentScale) => {

            if (currentScale === scaleEndValue) {
                setActive(true)
            } else {
                setActive(false)
            }
        })

        return () => unSubscribe()
    }, [])

    return (
        <Container ref={targetRef} className='Spotlight'>
            <ServicePopup
                isActive={isActive}
                style={{ opacity }}
            />
            <LapFrame
                style={{ scale, opacity }}
            >
                <LapScreen>
                    <p className="welcome">
                        <span>Welcome to</span>&nbsp; Ruppells Solutions
                    </p>
                    <h3>We Grow your <br /> Business <span>FASTER</span> </h3>
                </LapScreen>
            </LapFrame>
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
`
const LapFrame = styled(motion.div)`
    z-index: 100;
    width: 800px;
    height: 500px;
    position: fixed;
    pointer-events: none;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    scale: 1;
    background: url('/images/laptop-screen.png') -15px 22px no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const LapScreen = styled.div`
    position: relative;
    z-index: 10;
    /* background: url(${infinityAnimation}) center center no-repeat; */
    background-size: cover;
    background-color: #000;
    width: 454px;
    height: 288px;
    border-radius: 2px;
    padding: 132px 45px 40px;
    overflow: hidden;
    /* box-sizing: border-box; */

    /* &::before{
        content: "";
        position: absolute;
        left: -80px;
        top: 0px;
        width: 200px;
        height: 20px;
        transform: rotate(45deg);
        background-color: #2d2454;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(9.2px);
        -webkit-backdrop-filter: blur(9.2px);
    } */

    p.welcome{
        font-size: 8px;
        color: #F3F3F3;
        position: relative;
        margin-bottom: 22px;

        span{
            font: inherit;
            color: #BBBBBB;
        }

        &::before{
            content:"";
            position: absolute;
            left: 0;
            bottom: 0px;
            width: 32px;
            height: .4px;
            background-color: #eee;
            border-radius: 1px;
        }
    }
    h3{
        color: #F3F3F3;
        font-size: 17px;
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
`