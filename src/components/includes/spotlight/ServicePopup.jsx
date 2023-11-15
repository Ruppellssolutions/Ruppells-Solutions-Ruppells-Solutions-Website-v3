import React from "react";
import styled from "styled-components";
import ServicePopupItem from "./ServicePopupItem";
import { motion } from "framer-motion";
import services from "../../utils/services";

const ServicePopup = ({ isActive = false, style = {} }) => {
    // const servicesLeft = [
    //     {
    //         id: 1,
    //         title: "Mobile App Development",
    //         icon: "/icons/services/mobile-app-dev.svg",
    //         link: "",
    //     },
    //     {
    //         id: 2,
    //         title: "Web App Development",
    //         icon: "/icons/services/web-app-dev.svg",
    //         link: "",
    //     },
    //     {
    //         id: 3,
    //         title: "Content Marketing",
    //         icon: "/icons/services/content-marketing.svg",
    //         link: "",
    //     },
    //     {
    //         id: 4,
    //         title: "Branding",
    //         icon: "/icons/services/branding.svg",
    //         link: "",
    //     },
    // ]
    // const servicesRight = [
    //     {
    //         id: 1,
    //         title: "E-Commerce Platform",
    //         icon: "/icons/services/e-commerce.svg",
    //         link: "",
    //     },
    //     {
    //         id: 2,
    //         title: "Website Development",
    //         icon: "/icons/services/website-dev.svg",
    //         link: "",
    //     },
    //     {
    //         id: 3,
    //         title: "Social Media Marketing",
    //         icon: "/icons/services/social-media-marketing.svg",
    //         link: "",
    //     },
    // ]

    return (
        <Container
            className={isActive ? "active test" : " test"}
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
    transform: translate(-50%, -50%) scale(0.3);
    z-index: 2;
    width: 30%;
    height: auto;
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease-in-out;
    opacity: 0.2;

    @media all and (max-width: 950px) {
        bottom: -100vh;
        top: unset;
        left: 2.5%;
        transform: unset;
        width: 95%;
    }

    &.active {
        width: 83%;
        opacity: 1;
        bottom: 10px;
        transform: translate(-50%, -50%) scale(1);

        @media all and (max-width: 1440px) {
            width: 90%;
        }
        @media all and (max-width: 1180px) {
            width: 95%;
        }
        @media all and (max-width: 1080px) {
            width: 100%;
        }
        @media all and (max-width: 980px) {
            width: 95%;
        }
        @media all and (max-width: 950px) {
            transform: unset;
            flex-direction: column;
        }
        @media all and (max-width: 640px) {
            top: 50%;
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
    }
`;
const RightContainer = styled(LeftContainer)`
    align-items: flex-start;

    @media all and (max-width: 980px) {
        align-items: stretch;
    }
`;
