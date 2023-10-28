import React from 'react'
import { keyframes, styled } from 'styled-components'


const ScreenLoader = () => {
    return (
        <Container height={window.innerHeight}>
            <img
                src="/icons/logo/solutions-light.svg"
                alt="logo"
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

    img{
        width: 75px;
        max-width: 70%;
        animation:${popup} infinite 1s ;
    }
`