import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'


const Header = () => {

    return (
        <Container>
            <Wrapper className='wrapper'>
                <h1>
                    <Link spy smooth duration={6000} to='home'>
                        <img src="/icons/logo/infinity.svg" alt="infinity" />
                    </Link>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link spy smooth duration={3000} to='home' activeClass='active'>Home</Link>
                        </li>
                        <li>
                            <Link spy smooth duration={3000} to='service' activeClass='active'>Services</Link>
                        </li>
                        <li>
                            <Link spy smooth duration={3000} to='clients' activeClass='active'>Our Clients</Link>
                        </li>
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

        a{
            cursor: pointer;
        }
    }

    nav>ul{
        display: flex;
        align-items: center;
        gap: 18px;

        li{
            a{
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
    }
`