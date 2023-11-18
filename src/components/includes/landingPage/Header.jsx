import React, { useState } from 'react'
import { Link as BrowserLink } from "react-router-dom"
import styled, { css } from 'styled-components'
import ResNavMenu from '../header/ResNavMenu'
import Nav from '../header/Nav'


const Header = ({ theme = "LIGHT", type = "ROUTES" }) => {   // ROUTES || SECTIONS
    const logo = theme === "LIGHT" ? "/icons/logo/infinity.svg" : "/icons/logo/infinity-dark.svg"
    const hamburger = theme === "LIGHT" ? "/icons/main/hamburger.svg" : "/icons/main/hamburger-dark.svg"

    const [isActive, setActive] = useState(false)

    return (
        <Container>
            <ResNavMenu
                type={type}
                active={isActive}
                setActive={setActive}
            />
            <Wrapper className='wrapper' theme={theme}>
                <h1>
                    <BrowserLink to="/">
                        <img src={logo} alt="infinity" />
                    </BrowserLink>
                </h1>
                <nav>
                    <ul>
                        <Nav type={type} />
                    </ul>
                    <Hamburger onClick={e => setActive(true)}>
                        <img src={hamburger} alt="hamburger" />
                    </Hamburger>
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

            img{
                width: 80px;
                ${({ theme }) => theme === "LIGHT" && css`
                    filter: drop-shadow(5px 5px 10px #000000);   
                `}

                @media all and (max-width: 768px){
                    width: 56px;
                }
            }
        }
    }

    nav>ul{
        display: flex;
        align-items: center;
        gap: 18px;

        @media all and (max-width: 768px){
            display: none;
        }

        li{
            a{
                color: ${({ theme }) => theme === "LIGHT" ? "#f3f3f3" : "#292929"};
                cursor: pointer;
                font-size: 14px;
                position: relative;
                ${({ theme }) => theme === "LIGHT" && css`
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.6);
                `}

                &::before{
                    position: absolute;
                    left: 0;
                    bottom: -6px;
                    content: "";
                    width: 0%;
                    background-color: ${({ theme }) => theme === "LIGHT" ? "#f3f3f3" : "#292929"};
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
const Hamburger = styled.div`
    display: none;
    
    img{
        width: 32px;
        filter: drop-shadow(5px 5px 10px #000000);
    }

    @media all and (max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`