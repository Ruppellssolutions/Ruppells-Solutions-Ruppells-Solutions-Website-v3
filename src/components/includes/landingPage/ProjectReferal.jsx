import React from 'react'
import styled from 'styled-components'

const ProjectReferal = () => {
    return (
        <Container>
            <Wrapper className="wrapper">
                <Main>
                    <h5>HAVE A <span>PROJECT</span> IN MIND?</h5>
                    <Button>
                        <span>Let's talk</span>
                    </Button>
                </Main>
                <span>Keep scrolling...</span>
            </Wrapper>
        </Container>
    )
}

export default ProjectReferal

const Container = styled.section`
    padding: 60px 0;
`
const Wrapper = styled.div`
    &>span{
        display: block;
        font-size: 14px;
        text-align: center;
        color: #fff;
    }
`
const Main = styled.div`
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 32px;
    padding: 40px 0;

    h5{
        font-size: 52px;
        color: #fff;
        text-align: center;
        max-width: 40%;
        font-family: Satoshi-Medium;
        
        span{
            font: inherit;
            background: linear-gradient(106deg, #CE4FE3 0%, #36B2EA 101.89%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`
const Button = styled.button`
    cursor: pointer;
    border-radius: 100px;
    background: rgba(255, 255, 255, 0.20);
    padding: 14px 32px;
    position: relative;
    overflow: hidden;
    
    span{
        font-size: 14px ;
        color: #fff;
        z-index: 3;
        position: relative;
        transition: all 0.4s ease-in-out;
    }
    
    &::before{
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
    &:hover{
        span{
            color: #111;
        }

        &::before{
            left: 0;
        }
    }
`