import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Location from './Location'
import Footer from './Footer'

const ProjectReferal = () => {
    const containerRef = useRef()

    const { scrollYProgress } = useScroll({
        target: containerRef
    })

    const scale = useTransform(scrollYProgress, [0.3, .5], [0, 1])
    const y = useTransform(scrollYProgress, [0.6, 1], ["0", "-100vh"])

    return (
        <Container ref={containerRef}>
            <PopupContainer
                style={{
                    scale
                }}
            >
                <div className="first-child">
                    <div className="first-child second">
                        <div className="first-child third">
                            <InnerContent>
                                <motion.div
                                    className="container"
                                    style={{
                                        y
                                    }}
                                >
                                    <DummyScreen>
                                        <img src="/images/laptop-screen.png" alt="" />
                                    </DummyScreen>
                                    <Location />
                                    <Footer />
                                </motion.div>
                            </InnerContent>
                        </div>
                    </div>
                </div>
            </PopupContainer>
            <Wrapper className="wrapper">
                <Main>
                    <h5>HAVE A <span>PROJECT</span> IN MIND?</h5>
                    <Button>
                        <span>Let's talk</span>
                    </Button>
                </Main>
                <span>Keep scrolling...</span>
            </Wrapper>
        </Container>
    )
}

export default ProjectReferal

const Container = styled.section`
    position: relative;
    height: 350vh;
`
const Wrapper = styled.div`
    padding: 60px 0;
    position: sticky;
    top: 0;

    &>span{
        display: block;
        font-size: 14px;
        text-align: center;
        color: #fff;
    }
`
const Main = styled.div`
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 32px;
    padding: 40px 0;

    h5{
        font-size: 52px;
        color: #fff;
        text-align: center;
        max-width: 40%;
        font-family: Satoshi-Medium;
        
        span{
            font: inherit;
            background: linear-gradient(106deg, #CE4FE3 0%, #36B2EA 101.89%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`
const Button = styled.button`
    cursor: pointer;
    border-radius: 100px;
    background: rgba(255, 255, 255, 0.20);
    padding: 14px 32px;
    position: relative;
    overflow: hidden;
    
    span{
        font-size: 14px ;
        color: #fff;
        z-index: 3;
        position: relative;
        transition: all 0.4s ease-in-out;
    }
    
    &::before{
        z-index: 1;
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background-color: #fff;
        transition: left 0.4s ease-in-out;
    }
    &:hover{
        span{
            color: #111;
        }

        &::before{
            left: 0;
        }
    }
`
const PopupContainer = styled(motion.div)`
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    z-index: 200;
    /* width: 100%;
    aspect-ratio: 1; */
    border: 400px solid #E7C6FF;
    border-radius: 50%;
    /* user-select: none;
    pointer-events: none; */

    .first-child{
        /* width: 100%;
        aspect-ratio: 1; */
        border: 300px solid #8443B1;
        border-radius: 50%;

        &.second{
            border:225px solid #4F3CC2;
        }
        &.third{
            border: 200px solid #9ACFFF;
            width: 150vw;
            aspect-ratio: 1;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #FBFBFC;
        }
    }
`
const InnerContent = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    position: sticky;
    top: 0;
    overflow-y: scroll;
    background-color: #FBFBFC;
    /* display: flex;
    align-items: center;
    justify-content: center; */
`
const DummyScreen = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 50%;
        margin: 0 auto;
    }
`