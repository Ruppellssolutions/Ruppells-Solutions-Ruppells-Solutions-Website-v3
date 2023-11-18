import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const ProjectReferal = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <Wrapper className="wrapper">
                <Main>
                    <h5>
                        HAVE A <span>PROJECT</span> IN MIND?
                    </h5>
                    <Button
                        onClick={e => navigate("/contact-us")}
                    >
                        <span>Let's talk</span>
                    </Button>
                </Main>
                <span>Keep scrolling...</span>
            </Wrapper>
        </Container>
    );
};

export default ProjectReferal;

const Container = styled.section`
    position: relative;
    height: 200vh;
`;
const Wrapper = styled.div`
    padding: 60px 0;
    position: sticky;
    top: 0;
    @media all and (max-width: 480px) {
        padding: 100px 0;
        top: 21%;
    }

    & > span {
        display: block;
        font-size: 14px;
        text-align: center;
        color: #fff;
    }
`;
const Main = styled.div`
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 32px;
    padding: 40px 0;

    @media all and (max-width: 480px) {
        justify-content: unset;
        padding: 0px 0;
        height: 42vh;
    }

    h5 {
        font-size: 52px;
        color: #fff;
        text-align: center;
        max-width: 50%;
        font-family: Satoshi-Medium;

        @media all and (max-width: 768px) {
            font-size: 46px;
        }
        @media all and (max-width: 640px) {
            font-size: 38px;
            max-width: 100%;
        }
        @media all and (max-width: 460px) {
            font-size: 32px;
        }
        @media all and (max-width: 360px) {
            font-size: 26px;
        }
        span {
            font: inherit;
            background: linear-gradient(106deg, #ce4fe3 0%, #36b2ea 101.89%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`;
const Button = styled.button`
    cursor: pointer;
    border-radius: 100px;
    background: rgba(255, 255, 255, 0.2);
    padding: 14px 32px;
    position: relative;
    overflow: hidden;

    @media all and (max-width: 640px){
        padding: 8px 16px;
    }

    span {
        font-size: 14px;
        color: #fff;
        z-index: 3;
        position: relative;
        transition: all 0.4s ease-in-out;

        @media all and (max-width: 640px){
            font-size: 13px;
        }
    }

    &::before {
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
    &:hover {
        span {
            color: #111;
        }

        &::before {
            left: 0;
        }
    }
`;