import React from "react";
import styled from "styled-components";
import ServicePopupItem from "./ServicePopupItem";
import { motion } from "framer-motion";
import services from "../../utils/services";

const ServicePopup = ({ isActive = false, style = {} }) => {

    return (
        <Container
            className={isActive ? "active" : ""}
            style={{
                ...style, 
            }}
        >
            <LeftContainer>
                {services
                    .filter((service) => service.category === "IT_SERVICES")
                    .map((service, i) => (
                        <ServicePopupItem
                            isActive={isActive}
                            key={service.slug}
                            uid={service.slug}
                            {...service}
                        />
                    ))}
            </LeftContainer>
            <RightContainer>
                {services
                    .filter((service) => service.category === "DIGITAL_MARKETING")
                    .map((service, i) => (
                        <ServicePopupItem
                            isActive={isActive}
                            type="RIGHT"
                            key={service.slug}
                            uid={service.slug}
                            {...service}
                        />
                    ))}
            </RightContainer>
        </Container>
    );
};

export default ServicePopup;

const Container = styled(motion.div)`
    position: fixed !important;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    transform: translate(-50%, -50%) scale(0.3);
    z-index: 2;
    width: 30vw;
    height: auto;
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    opacity: 0.2;
    
    @media all and (max-width: 950px) {
        bottom: -100vh;
        top: unset;
        left: 2.5%;
        transform: scale(1);
        width: 95vw;
        translate: unset;
        transition: all .3s ease-in-out;
    }

    &.active {
        width: 83vw;
        opacity: 1;
        bottom: 10px;
        transform: translate(-50%, -50%) scale(1);

        @media all and (max-width: 1440px) {
            width: 90vw !important;
        }
        @media all and (max-width: 1180px) {
            width: 95vw !important;
        }
        @media all and (max-width: 1080px) {
            width: 100vw !important;
        }
        @media all and (max-width: 980px) {
            width: 95vw !important;
        }
        @media all and (max-width: 950px) {
            transform: unset;
            flex-direction: column;
        }
        @media all and (max-width: 640px) {
            /* top: 50%; */
        }
    }
`;

const LeftContainer = styled.div`
    width: 330px;
    height: 300px;
    /* background-color: #fff; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 20px;

    @media all and (max-width: 1080px) {
        width: 280px;
    }
    @media all and (max-width: 980px) {
        align-items: start;
    }
    @media all and (max-width: 950px) {
        width: 100%;
        height: max-content;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 8px;
        align-items: stretch;
    }
    @media all and (max-width: 640px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 10px;
    }
`;
const RightContainer = styled(LeftContainer)`
    align-items: flex-start;

    @media all and (max-width: 980px) {
        align-items: stretch;
    }
`;
