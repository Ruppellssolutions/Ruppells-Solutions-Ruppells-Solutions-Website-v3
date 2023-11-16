import React from 'react'
import styled from 'styled-components'
import SectionHead from '../general/SectionHead'


const Clients = () => {
    const clients = [
        {
            id: 1,
            icon: "ruppells-overseas.svg",
        },
        {
            id: 2,
            icon: "arab-dreams.svg",
        },
        {
            id: 3,
            icon: "hermanos.png",
        },
        // {
        //     id: 4,
        //     icon: "middlesex-uni.svg",
        // },
        {
            id: 5,
            icon: "trinity-funds.svg",
        },
        {
            id: 6,
            icon: "reverse-gear.svg",
        },
    ]

    return (
        <Container>
            <Wrapper className='wrapper'>
                <Head>
                    <SectionHead
                        // colorTitle='OUR'
                        title='CLIENTS.'
                    />
                    <p>Meet the esteemed partners who've entrusted their success with us. Our diverse clientele is a testament to the trusted relationships we've built. Join our community of satisfied clients and embark on a journey of digital brilliance.</p>
                </Head>
                <ClientsList>
                    {clients.map((client, i) => (
                        <ClientItem
                            key={i}
                        >
                            <img src={`/icons/logo/${client.icon}`} alt={client.icon} />
                        </ClientItem>
                    ))}
                </ClientsList>
                <ButtonContainer>
                    <Button>
                        View all clients
                        <img src="/icons/main/right-arrow.svg" alt="right arrow" />
                    </Button>
                </ButtonContainer>
                {/* <BottomContainer /> */}
            </Wrapper>
        </Container>
    )
}

export default Clients

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 70px 0;
    @media all and (max-width:480px){
        padding: 70px 0 0 0;

    }
`
const Head = styled.div`
    margin-bottom: 68px;

    h4{
        margin-bottom: 26px;
    }

    p{
        color: #9E9E9E;
        font-size: 18px;
        max-width: 60%;

        @media all and (max-width:640px){
            max-width: fit-content;
            font-size: 16px;
        }
        @media all and (max-width:460px){
            font-size: 14px;
        }
    }
`
const ClientsList = styled.ul`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-wrap: wrap;
    /* gap: calc(20px / 6px); */
    margin-bottom: 38px;
`
const ClientItem = styled.li`
    width: 12%;

    @media all and (max-width:860px){
        width: 20%;
    }
    @media all and (max-width:640px){
        width: 26%;
    }
    @media all and (max-width:480px){
        width: 32%;
    }
    img{
        width: 80%;
        margin: 0 auto;
    }
`
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
    display: none;
    align-items: center;
    gap: 20px;
    padding: 8px 0;
    width: max-content;
    color: #F3F3F3;
    font-size: 17px;
    cursor: pointer;
    position: relative;

    &::before{
        content: "";
        width: 10%;
        height: 1px;
        border-radius: .5px;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: #f3f3f3;
        transition: width 0.4s ease-in-out;

    }
    &:hover{
        &::before{
            width: 100%;
        }
        img{
            rotate: -45deg;
        }
    }

    span{
        display: block;
        width: min-content;
    }
    img{
        transition: all 0.4s ease-in-out;
        width: 20px;
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