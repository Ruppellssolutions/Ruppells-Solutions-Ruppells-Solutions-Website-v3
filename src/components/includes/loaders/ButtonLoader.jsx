import React from 'react'
import { keyframes, styled } from 'styled-components'


const ButtonLoader = () => {
    return (
        <Container>
            <Loader />
        </Container>
    )
}

export default ButtonLoader


const Container = styled.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`
const Loader = styled.div`
    display: block;
    width: 16px;
    height: 16px;
    border: 1px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${rotation} 1s linear infinite;
`