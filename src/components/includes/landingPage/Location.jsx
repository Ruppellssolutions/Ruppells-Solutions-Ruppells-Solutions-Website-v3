import React from 'react'
import styled from 'styled-components'


const Location = () => {
    const redirectHandler = () => {
        const a = document.createElement("a")
        a.href = "https://google.com"
        a.target = "_blank"
        a.click()
    }

    return (
        <Container>
            <Wrapper className="wrapper">
                <img src="/images/location-map.png" alt="map" />
                <Pin>
                    <img
                        onClick={redirectHandler}
                        src="/images/location-pin.png"
                        alt="pin"
                    />
                </Pin>
            </Wrapper>
        </Container>
    )
}

export default Location

const Container = styled.section`
    padding: 28px 0;
    position: relative;
`
const Wrapper = styled.div`
    max-width: 90%;
`
const Pin = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    img{
        width: 78px;
        cursor: pointer;
    }
`
const BottomContainer = styled.div`
    margin-top: 78px;
    width: 100%;
    height: 24px;
    border-radius: 58px 58px 0 0;
    border: 1px solid #FFFFFF3D;
    border-left-width: .5px;
    border-bottom: none;
`