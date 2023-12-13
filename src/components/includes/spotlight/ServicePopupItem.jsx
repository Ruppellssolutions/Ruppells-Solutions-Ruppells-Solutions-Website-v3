import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ServicePopupItem = ({ title = "", icon = "", type = "LEFT", uid = "" }) => {
    const [isHovering, setHovering] = useState(false)

    const containerRef = useRef()

    const onClick = () => {
        const serviceContainer = document.querySelector("#services");

        serviceContainer.scrollIntoView({
            behavior: "smooth",
        });
    };

    useEffect(() => {
        if (isHovering) {
            const currentEl = document.getElementById(uid)

            containerRef.current.scrollTo({
                behavior: "smooth",
                left: 0,
                top: currentEl.clientHeight,
            })
        } else {
            containerRef.current.scrollTo({
                behavior: "smooth",
                left: 0,
                top: 0,
            })
        }
    }, [isHovering])

    return (
        <Container
            className={type}
            onClick={onClick}
            onMouseEnter={e => setHovering(true)}
            onMouseLeave={e => setHovering(false)}
        >
            <Left className="center-align">
                <img src={icon} alt="icon" />
            </Left>
            <Right>
                <TitleContainer ref={containerRef}>
                    <span id={uid} className="head">{title}</span>
                    <span className="head">{title}</span>
                </TitleContainer>
                <span
                    className={`explore ${isHovering ? "active" : ""}`}
                >
                    Explore
                </span>
            </Right>
        </Container>
    );
};

export default ServicePopupItem;

const Container = styled(motion.div)`
    cursor: pointer;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(3px);
    width: max-content;
    
    display: flex;
    width: 90%;
    align-items: center;
    gap: 20px;
    padding: 10px 20px;
    transition: all 1s ease-in-out;

    @media all and (max-width: 950px) {
        width: calc(50% - 4px) !important;
        margin: 0 !important;
    }
    @media all and (max-width: 640px) {
        width: calc(50% - 5px) !important;
        padding: 6px 14px;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;

        &.RIGHT{
            &:nth-child(3){
                display: none;
            }
        }
    } 
    &:nth-child(2) {
        margin-right: 24px;

        &.RIGHT {
            margin: 0;
            margin-left: 24px;
        }
    }
    &:nth-child(3) {
        &.LEFT {
            margin-right: 24px;
        }
    }
    
    .upper{
        
    }
`;
const Left = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.04);

    img {
        width: 16px;
        @media all and (max-width: 640px) {
            /* width: 14px; */
            /* height: 100%; */
            border-radius: 0;
        }
    }
`;
const Right = styled.div`
    span {
        display: block;

        &.head {
            color: #f2f2f2;
            font-size: 14px;

            @media all and (max-width: 1080px) {
                font-size: 12px;
            }
        }
        &.explore {
            cursor: pointer;
            color: #ababab;
            font-size: 12px;
            position: relative;
            width: max-content;

            &::after{
                content: "";
                width: 0;
                height: 1px;
                border-radius: 0.5px;
                position: absolute;
                right: -105%;
                top: 50%;
                transition: all 0.5s ease-in-out;
            }
            &.active{
                &::after{
                    width: 30px;
                    background-color: #fff;
                }
            }

            @media all and (max-width: 1080px) {
                font-size: 10px;
            }
        }
    }
    @media all and (max-width: 640px) {
        display: block;
    }
`;

const TitleContainer = styled.div`
    height: 20px;
    overflow: hidden;
    margin-bottom: 6px;

    @media all and (max-width: 1080px) {
        height: 17px;
    }
`