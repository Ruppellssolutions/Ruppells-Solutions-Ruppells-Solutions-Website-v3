import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'


const ServicePopupItem = ({
    title = "",
    icon = "",
    type = "LEFT"
}) => {
    // const springConfig = { stiffness: 100, damping: 100, mass: 1 };

    const onClick = () => {
        const serviceContainer = document.querySelector("#services")
        // const serviceChild = document.querySelector("#services-child")

        serviceContainer.scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <Container
            className={type}
            onClick={onClick}
        >
            <Left className='center-align'>
                <img src="/icons/services/web-app-dev.svg" alt="icon" />
            </Left>
            <Right>
                <span className="head">{title}</span>
                <span className="explore">Explore</span>
            </Right>
        </Container >
    )
}

export default ServicePopupItem

const Container = styled(motion.div)`
    cursor: pointer;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.70);
    backdrop-filter: blur(3px);
    width: max-content;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px 20px;
    transition: all 1s ease-in-out;

    @media all and (max-width: 950px){
        width: calc(50% - 10px) !important;
        margin: 0 !important;
    }
    @media all and (max-width: 460px){
        width: 100% !important;
        padding: 6px 14px;
    }

    &:nth-child(2){
        margin-right: 24px;

        &.RIGHT{
            margin: 0;
            margin-left: 24px;
        }
    }
    &:nth-child(3){
        &.LEFT{
            margin-right: 24px;
        }
    }
`
const Left = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.04);

    img{
        width: 16px;
    }

    @media all and (max-width: 460px){
        width: 24px;
        height: 24px;

        img{
            width: 12px;
        }
    }
`
const Right = styled.div`

    span{
        display: block;
        
        &.head{
            color: #F2F2F2;
            font-size: 14px;
            margin-bottom: 6px;

            @media all and (max-width: 1080px){
                font-size: 12px;
            }
        }
        &.explore{
            cursor: pointer;
            color: #ABABAB;
            font-size: 12px;

            @media all and (max-width: 1080px){
                font-size: 10px;
            }
        }
    }
    @media all and (max-width: 460px){
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span.head{
            margin: 0;
        }
    }
`