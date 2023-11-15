import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'


const Footer = () => {
    const socialIcons = [
        {
            icon: "/icons/social/instagram.svg",
            link: "https://instagram.com/ruppells__solutions?igshid=NzZlODBkYWE4Ng==",
        },
        {
            icon: "/icons/social/facebook.svg",
            link: "https://www.facebook.com/profile.php?id=100092528386984",
        },
        {
            icon: "/icons/social/threads.svg",
            link: "https://www.threads.net/@ruppells__solutions",
        },
        {
            icon: "/icons/social/linkedin.svg",
            link: "https://www.linkedin.com/company/ruppells-solutions/",
        },
        {
            icon: "/icons/social/youtube.svg",
            link: "https://youtube.com/@RuppellsSolutions",
        },
    ]

    const currentYear = new Date().getFullYear()

    return (
        <Container>
            <Wrapper className='wrapper'>
                <Middle className='small'>
                    <MiddleTop>
                        <img src="/icons/logo/colored-infinity.png" alt="infinty logo" />
                    </MiddleTop>
                    <MiddleBottom>
                        <Link spy smooth duration={4000} to='home'>
                            <img src="/icons/logo/solutions-dark.svg" alt="Ruppells Solutions" />
                        </Link>
                        <span>Powered By</span>
                        <a href="https://maps.app.goo.gl/cervkKhr8t2o2Q5e9" target="_blank">
                            <img src="/icons/logo/ruppells-group-dark.svg" alt="Ruppells Group " />
                        </a>
                    </MiddleBottom>
                </Middle>
                <Left>
                    <Socials>
                        {socialIcons.map((social, i) => (
                            <SocialIcon key={i}>
                                <a href={social.link} target='_blank'>
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
                        <Link spy smooth duration={4000} to='home'>
                            <img src="/icons/logo/solutions-dark.svg" alt="Ruppells Solutions" />
                        </Link>
                        <span>Powered By</span>
                        <a href="https://maps.app.goo.gl/cervkKhr8t2o2Q5e9" target="_blank">
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

    @media all and (max-width: 1080px){
        flex-wrap: wrap;
        gap: 20px;
    }

    @media all and (max-width:480px){
        /* padding:0 0; */
        flex-direction: column;
    }
`
const Left = styled.div`
    @media all and (max-width: 1080px){
        /* width: calc(50% - 10px); */
        width: max-content;
    }
    @media all and (max-width: 640px){
        width: 100%;
    }
`
const Middle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 32px;

    @media all and (max-width: 1080px) {
        display: none;
    }
    &.small{
        display: none;

        @media all and (max-width: 1080px){
            display: flex;
            width: 100%;
        }
    }
`
const Right = styled.div`

    @media all and (max-width: 1080px){
        width:  calc(60% - 10px);
    }
    @media all and (max-width: 640px){
        width: 100%;
    }
    @media all and (max-width:480px){
        margin-top: 20px;
    }
    p{
        text-align: right;
        font-size: 14px;
        color: #747474;

        @media all and (max-width: 640px){
            text-align: center;
        }
    }
`
const Socials = styled.ul`
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 24px 0;

    @media all and (max-width: 640px){
        justify-content: center;
    }
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

        @media all and (max-width: 768px){
            width: 70px;
        }
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

        @media all and (max-width: 768px){
            width: 60px;
        }
    }
`