import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'


const ServicePopupItem = ({
    title = "",
    icon = "",
    link = "",
    isActive = false,
    type = "LEFT"
}) => {
    const springConfig = { stiffness: 100, damping: 100, mass: 1 };

    return (
        <Container
            className={type}
        >
            <Left className='center-align'>
                <img src={icon} alt="icon" />
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

    &:nth-child(2){
        margin-right: 24px;

        &.RIGHT{
            margin: 0;
            margin-left: 24px;
        }
    }
    &:nth-child(3){
        margin-right: 24px;
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
`
const Right = styled.div`
    span{
        display: block;
        
        &.head{
            color: #F2F2F2;
            font-size: 14px;
            margin-bottom: 6px;
        }
        &.explore{
            cursor: pointer;
            color: #ABABAB;
            font-size: 12px;
        }
    }
`