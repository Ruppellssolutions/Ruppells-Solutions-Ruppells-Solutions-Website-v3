import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const ProjectReferal = () => {
    const containerRef = useRef()

    const { scrollYProgress } = useScroll({
        target: containerRef
    })

    const scale = useTransform(scrollYProgress, [0.3, 1], [0, 15])

    return (
        <Container ref={containerRef}>
            <PopupContainer
                style={{
                    scale
                }}
            >
                <div className="first-child">
                    <div className="first-child blue">
                        <div className="first-child yellow">

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
    height: 300vh;
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
    width: 100%;
    z-index: 200;
    aspect-ratio: 1;
    border: 100px solid red;
    border-radius: 50%;

    .first-child{
        width: 100%;
        aspect-ratio: 1;
        border: 200px solid green;
        border-radius: 50%;

        &.blue{
            border-color: blue;
        }
        &.yellow{
            border-color: yellow;
        }
    }
`