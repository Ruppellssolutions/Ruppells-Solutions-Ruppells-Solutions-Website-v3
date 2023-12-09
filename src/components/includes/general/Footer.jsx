import React from 'react'
import styled from 'styled-components'
import bg from "/icons/main/footer-bg.svg"


const Footer = () => {
    return (
        <Container>
            <Wrapper className='wrapper'>
                <Left>
                    <h6>Get in touch</h6>
                    <p>SpaceZ castle rock Sahodaran Ayyappan Road, SH15, opp. Malayala Manorama, Kochi, Kerala 682016</p>
                </Left>
                <Right>
                    <ContactItem href='tel:+918848648147'>
                        <span className="icon">
                            <img src="/icons/inputs/phone-dark.svg" alt="phone" />
                        </span>
                        <span>+91 884 864 8147</span>
                    </ContactItem>
                    <ContactItem href='mailto:info@ruppellssolutions.com'>
                        <span className="icon">
                            <img src="/icons/inputs/email-dark.svg" alt="email" />
                        </span>
                        <span>info@ruppellssolutions.com</span>
                    </ContactItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    background: url(${bg}) center center no-repeat ;
    background-size: cover;
    background-color: #0a0a0a;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 38px 0;

    @media all and (max-width: 860px){
        flex-direction: column;
        gap: 26px;
    }
`
const Left = styled.div`
    width: 50%;

    @media all and (max-width: 860px){
        width: 100%;
    }

    h6{
        color: #FFF;
        font-size: 38px;
        margin-bottom: 24px;

        @media all and (max-width: 1080px){
            font-size: 22px;
        }
    }
    p{
        max-width: 70%;
        color: #E0E0E0;
        font-size: 15px;

        @media all and (max-width: 1080px){
            font-size: 14px;
        }
        @media all and (max-width: 860px){
            max-width: 90%;
        }
    }
`
const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;

    @media all and (max-width: 980px){
        flex-direction: column;
        align-items: start;
    }
    @media all and (max-width: 860px){
        flex-direction: row;
        width: 100%;
        justify-content: start;
        align-items: center;
    }
    @media all and (max-width: 420px){
        flex-direction: column;
        align-items: start;
    }
`
const ContactItem = styled.a`
    display: flex;
    align-items: center;
    gap: 6px;

    span.icon{
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-radius: 6px;

        img{
            width: 20px;
        }
    }
    span{
        color: #E0E0E0;
        font-size: 14px;
    }
`