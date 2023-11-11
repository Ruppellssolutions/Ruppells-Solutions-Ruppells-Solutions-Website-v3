import { motion, useTime, useTransform } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'


const Location = () => {
    const redirectHandler = () => {
        const a = document.createElement("a")
        a.href = "https://google.com"
        a.target = "_blank"
        a.click()
    }

    return (
        <Container>
            <Wrapper className="wrapper">
                <div className="content">
                    <img src="/images/location-map.png" alt="map" />
                    <Pin>
                        <img
                            onClick={redirectHandler}
                            src="/icons/main/map-pin.svg"
                            alt="pin"
                        />
                        <motion.img
                            initial={{
                                scale: 1
                            }}
                            animate={{
                                scale: [1, 1.5, 1]
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatDelay: 1,
                            }}
                            className='pin'
                            src="/icons/main/map-pin-bottom.svg"
                            alt="pin bottom"
                        />
                    </Pin>
                </div>
                <BottomContainer />
            </Wrapper>
        </Container>
    )
}

export default Location

const Container = styled.section`
    padding: 28px 0;
    position: relative;
`
const Wrapper = styled.div`
    max-width: 90%;

    .content{
        position: relative;
    }
`
const Pin = styled.div`
    rotate: 10deg;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img{
        width: 38px;
        cursor: pointer;

        &.pin{
            width: 20px;
            margin-top: -10px;
            z-index: -1;
        }
    }
`
const BottomContainer = styled.div`
    margin-top: 78px;
    width: 100%;
    height: 24px;
    border-radius: 58px 58px 0 0;
    border: 1px solid  #8E8E8E3D;
    border-left-width: .5px;
    border-bottom: none;
`
