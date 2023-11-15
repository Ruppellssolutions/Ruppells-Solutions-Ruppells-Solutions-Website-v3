import React from 'react'
import styled from 'styled-components'
import bg from "/images/future-bg.png"


const NavigateFuture = () => {
    return (
        <StickyContainer>
            <Container>
                <div className="wrapper">
                    <Left>
                        <img src="/images/future-hero.png" alt="hero" />
                    </Left>
                    <Right>
                        <h6>
                            <span>Navigate</span> the <span>Future</span> With us
                        </h6>
                    </Right>
                </div>
            </Container>
        </StickyContainer>
    )
}

export default NavigateFuture

const StickyContainer = styled.section`
    height: 150vh;
`

const Container = styled.div`
    position: sticky;
    top: 0;
    background: url(${bg}) center center no-repeat;
    background-size: cover;
    
    .wrapper{
        height: 100vh;
        display: flex;
        align-items: center;
        gap: 20px;

        @media all and (max-width: 640px){
            flex-direction: column;
            justify-content: center;
        }
    }
`
const Left = styled.div`
    width: 50%;

    img{
        width: 80%;
        margin: 0 0 0 auto; 

        @media all and (max-width: 640px){
            margin: 0 auto ;
            width: 100%;
        }
    }
`
const Right = styled.div`
    width: 50%;

    @media all and (max-width: 640px){
        width: 100%;
    }

    h6{
        max-width: 80%;
        font-size: 68px;

        @media all and (max-width: 1180px){
            font-size: 58px;
        }
        @media all and (max-width: 980px){
            font-size: 46px;
        }
        @media all and (max-width: 768px){
            font-size: 36px;
        }
        @media all and (max-width: 640px){
            text-align: center;
            margin: 0 auto;
            /* max-width: 100%; */
        }
        @media all and (max-width: 460px){
            font-size: 26px;
        }

        span{
            font: inherit;
            background: linear-gradient(106deg, #CE4FE3 0%, #36B2EA 101.89%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`