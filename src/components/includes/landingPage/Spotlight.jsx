import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import styled from 'styled-components'


const Spotlight = () => {
    const targetRef = useRef()

    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const scaleEndValue = 1

    const scale = useTransform(scrollYProgress, [0, 1], [3.6, scaleEndValue])

    return (
        <Container ref={targetRef}>
            <LapFrame
                style={{ scale }}
            >
                <LapScreen>

                </LapScreen>
            </LapFrame>
        </Container>
    )
}

export default Spotlight

const Container = styled.section`
    height: 150vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const LapFrame = styled(motion.div)`
    width: 800px;
    height: 500px;
    position: fixed;
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
    background-color: #111;
    width: 454px;
    height: 288px;
    border-radius: 2px;
`