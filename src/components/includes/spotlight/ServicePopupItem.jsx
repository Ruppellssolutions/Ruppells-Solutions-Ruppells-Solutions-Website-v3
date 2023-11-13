import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const ServicePopupItem = ({ title = "", icon = "", type = "LEFT" }) => {
    // const springConfig = { stiffness: 100, damping: 100, mass: 1 };

    const onClick = () => {
        const serviceContainer = document.querySelector("#services");
        // const serviceChild = document.querySelector("#services-child")

        serviceContainer.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <Container className={type} onClick={onClick}>
            <Left className="center-align">
                <img src="/icons/services/web-app-dev.svg" alt="icon" />
            </Left>
            <Right>
                <span className="head">{title}</span>
                <span className="explore">Explore</span>
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
    align-items: center;
    gap: 20px;
    padding: 10px 20px;
    transition: all 1s ease-in-out;

    @media all and (max-width: 950px) {
        width: calc(50% - 10px) !important;
        margin: 0 !important;
    }
    @media all and (max-width: 640px) {
        width: 47% !important;
        padding: 6px 14px;
        flex-direction: column;
        align-items: flex-start;
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
`;
const Left = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.04);

    img {
        width: 16px;
        @media all and (max-width: 640px) {
            width: 100%;
            height: 100%;
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
            margin-bottom: 6px;

            @media all and (max-width: 1080px) {
                font-size: 12px;
            }
        }
        &.explore {
            cursor: pointer;
            color: #ababab;
            font-size: 12px;

            @media all and (max-width: 1080px) {
                font-size: 10px;
            }
        }
    }
    @media all and (max-width: 640px) {
        display: block;
    }
`;
