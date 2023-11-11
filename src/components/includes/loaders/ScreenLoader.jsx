import React from 'react'
import Lottie from 'react-lottie'
import { keyframes, styled } from 'styled-components'

import infinityAnimation from "../../../assets/lottie/infinity-animation.json"


const ScreenLoader = () => {
    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: infinityAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <Container height={window.innerHeight}>
            <Lottie
                width={250}
                height={250}
                options={lottieOptions}
            />
        </Container>
    )
}

export default ScreenLoader

const popup = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.3);
    }
    100% {
        transform: scale(1);
    }
`;

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${({ height }) => `${height}px`};
    background-color: #0b0c0d;

    /* img{
        width: 75px;
        max-width: 70%;
        animation:${popup} infinite 1s ;
    } */
`