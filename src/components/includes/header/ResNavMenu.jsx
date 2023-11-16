import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import Nav from './Nav'


const ResNavMenu = ({ type = "ROUTES", active = false, setActive = () => { } }) => {
    const onClose = ()=>{
        setActive(false)
    }
    return (
        <Container className={active ? "active" : ""}>
            <Wrapper className='wrapper'>
                <Head>
                    <span
                        className="icon"
                        onClick={onClose}
                    >
                        <img src="/icons/main/close.svg" alt="close" />
                    </span>
                </Head>
                <Content>
                    <Navs>
                        <Nav type={type} onClose={onClose} />
                    </Navs>
                </Content>
            </Wrapper>
        </Container>
    )
}

export default ResNavMenu

const Container = styled.div`
    position: fixed;
    z-index: 200;
    width: 100%;
    height: 100vh;
    top: 0;
    right: -100vw;
    background: url("/images/body-bg.png") 0 0 no-repeat;
    background-size: cover;
    background-color: #111;
    transition: right 0.3s ease-in-out;

    &.active{
        right: 0;
    }

    @media all and (min-width: 768px){
        display: none;
    }
`
const Wrapper = styled.div`
    
`
const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 32px 0;

    span.icon{
        cursor: pointer;
        width: 32px;
        height: 32px;
        padding: 6px;

        img{
            /* width: 24px; */
        }
    }
`
const Content = styled.div`
    padding: 32px 0;
`
const Navs = styled.ul`
    li{
        margin-bottom: 12px;

        a{
            cursor: pointer;
            font-size: 20px;
            color: #ffffff;
        }
    }
`