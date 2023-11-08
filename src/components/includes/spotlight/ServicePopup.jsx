import React from 'react'
import styled from 'styled-components'
import ServicePopupItem from './ServicePopupItem'
import { motion } from 'framer-motion'


const ServicePopup = ({ isActive = false, style = {} }) => {
    const servicesLeft = [
        {
            id: 1,
            title: "Social Media Marketing",
            icon: "/icons/services/social-media-marketing.svg",
            link: "",
        },
        {
            id: 2,
            title: "Web App Development",
            icon: "/icons/services/web-app-dev.svg",
            link: "",
        },
        {
            id: 3,
            title: "Content Marketing",
            icon: "/icons/services/content-marketing.svg",
            link: "",
        },
        {
            id: 4,
            title: "Branding",
            icon: "/icons/services/branding.svg",
            link: "",
        },
    ]
    const servicesRight = [
        {
            id: 1,
            title: "E-Commerce Platform",
            icon: "/icons/services/e-commerce.svg",
            link: "",
        },
        {
            id: 2,
            title: "Website Development",
            icon: "/icons/services/website-dev.svg",
            link: "",
        },
        {
            id: 3,
            title: "Mobile App Development",
            icon: "/icons/services/mobile-app-dev.svg",
            link: "",
        },
    ]

    return (
        <Container
            className={isActive ? "active" : ""}
            style={{
                ...style
            }}
            // transition={{
            //     duration: 1,
            // }}
        >
            <LeftContainer
            >
                {servicesLeft.map((service, i) => (
                    <ServicePopupItem
                        isActive={isActive}
                        key={service.id}
                        {...service}
                    />
                ))}
            </LeftContainer>
            <RightContainer
            >
                {servicesRight.map((service, i) => (
                    <ServicePopupItem
                        isActive={isActive}
                        type='RIGHT'
                        key={service.id}
                        {...service}
                    />
                ))}
            </RightContainer>
        </Container>
    )
}

export default ServicePopup

const Container = styled(motion.div)`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(.3);
    z-index: 2;
    width: 30%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.5s ease-in-out;
    opacity: .2;
    
    &.active{
        width: 80%;
        opacity: 1;
        transform: translate(-50%,-50%) scale(1);
    }
`

const LeftContainer = styled.div`
    width: 330px;
    height: 300px;
    /* background-color: #fff; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 20px;
`
const RightContainer = styled(LeftContainer)`
    align-items: flex-start;
`