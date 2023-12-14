import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";

const ImageCard = ({ image }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <Wrapper isInView={isInView} ref={ref}>
            <img src={image} alt="Image" />
            <div className="content">
                <div className="details">
                    <span className="name">Safwan</span>
                    <span className="position">Full Stack Developer</span>
                </div>
                <div className="linkedin">
                    <img src="/icons/linkedin.svg" alt="Linked In" />
                </div>
            </div>
        </Wrapper>
    );
};

export default ImageCard;

const Wrapper = styled.div`
    /* width: 15.5%; */
    /* flex: 0 0 15.5%; */
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    transform: ${({ isInView }) =>
        isInView ? "translateX(0)" : "translateX(100%)"};
    transition: all 01.5s ease 0.1s;
    /* @media all and (max-width: 1280px) {
        flex: 0 0 19%;
    }
    @media all and (max-width: 980px) {
        flex: 0 0 24%;
    }
    @media all and (max-width: 640px) {
        flex: 0 0 32%;
    }
    @media all and (max-width: 480px) {
        flex: 0 0 48%;
    } */
    &:hover {
        .content {
            opacity: 0.5;
        }
    }
    .content {
        width: 100%;
        padding: 10px;
        position: absolute;
        bottom: 0;
        background-color: #000;
        opacity: 0;
        transition: opacity 1s ease;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .details {
            display: flex;
            flex-direction: column;
            .name {
                color: #fff;
                font-size: 16px;
            }
            .position {
                color: #fff;
                font-size: 14px;
            }
        }
        .linkedin {
            width: 30px;
            height: 30px;
            border-radius: 8px;
            padding: 5px;
            background-color: #5e5e5e;
        }
    }
`;
