import React from 'react'
import styled from 'styled-components'


const Footer = () => {
    const socialIcons = [
        {
            icon: "/icons/social/instagram.svg",
            link: "",
        },
        {
            icon: "/icons/social/facebook.svg",
            link: "",
        },
        {
            icon: "/icons/social/twitter.svg",
            link: "",
        },
        {
            icon: "/icons/social/linkedin.svg",
            link: "",
        },
        {
            icon: "/icons/social/youtube.svg",
            link: "",
        },
    ]

    const currentYear = new Date().getFullYear()

    return (
        <Container>
            <Wrapper className='wrapper'>
                <Left>
                    <Socials>
                        {socialIcons.map((social, i) => (
                            <SocialIcon key={i}>
                                <a href="#" target='_blank'>
                                    <img src={social.icon} alt={social.link} />
                                </a>
                            </SocialIcon>
                        ))}
                    </Socials>
                </Left>
                <Middle>
                    <MiddleTop>
                        <img src="/icons/logo/colored-infinity.png" alt="infinty logo" />
                    </MiddleTop>
                    <MiddleBottom>
                        <img src="/icons/logo/solutions-dark.svg" alt="Ruppells Solutions" />
                        <span>Powered By</span>
                        <a href="https://ruppellsgroup.com" target="_blank">
                            <img src="/icons/logo/ruppells-group-dark.svg" alt="Ruppells Group " />
                        </a>
                    </MiddleBottom>
                </Middle>
                <Right>
                    <p>
                        &copy; {currentYear} Ruppells Solutions. All Right Reserved
                    </p>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Footer

const Container = styled.footer`
    
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 42px 0;
`
const Left = styled.div`

`
const Middle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 32px;
`
const Right = styled.div`
    p{
        font-size: 14px;
        color: #747474;
    }
`
const Socials = styled.ul`
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 24px 0;
`
const SocialIcon = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;

    a {

        img{
            height: 24px;
        }
    }
`
const MiddleTop = styled.div`
    img{
        width: 100px;
    }
`
const MiddleBottom = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    span{
        font-size: 14px;
        color: #8F8C87;
        display: block;
        width: max-content;
    }

    img{
        width: 100px;
        cursor: pointer;
    }
`