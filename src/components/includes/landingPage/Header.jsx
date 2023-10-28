import React from 'react'
import styled from 'styled-components'


const Header = () => {
    return (
        <Container>
            <Wrapper className='wrapper'>
                <h1>
                    <a href="#" onClick={e => e.preventDefault()}>
                        <img src="/icons/logo/infinity.svg" alt="infinity" />
                    </a>
                </h1>
                <nav>
                    <ul>
                        <li className='active'>Home</li>
                        <li>Services</li>
                        <li>Our Clients</li>
                    </ul>
                </nav>
            </Wrapper>
        </Container>
    )
}

export default Header

const Container = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 200;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 0;

    h1{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    nav>ul{
        display: flex;
        align-items: center;
        gap: 18px;

        li{
            color: #fff;
            cursor: pointer;
            font-size: 14px;
            position: relative;

            &::before{
                position: absolute;
                left: 0;
                bottom: -6px;
                content: "";
                width: 0%;
                background-color: #fff;
                height: 2px;
                border-radius: .5px;
                transition: width 0.3s ease-in-out;
            }

            &.active{
                &::before{
                    width: 50%;
                }
            }
        }
    }
`