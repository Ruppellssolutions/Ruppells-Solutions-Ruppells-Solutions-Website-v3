import React from 'react'
import styled from 'styled-components'
import SectionHead from '../general/SectionHead'


const Clients = () => {
    const clients = [
        {
            id: 1,
            icon: "client-01.svg",
        },
        {
            id: 2,
            icon: "client-02.svg",
        },
        {
            id: 3,
            icon: "client-03.svg",
        },
        {
            id: 4,
            icon: "client-04.svg",
        },
        {
            id: 5,
            icon: "client-05.svg",
        },
        {
            id: 6,
            icon: "client-06.svg",
        },
        {
            id: 1,
            icon: "client-04.svg",
        },
        {
            id: 2,
            icon: "client-03.svg",
        },
        {
            id: 3,
            icon: "client-02.svg",
        },
        {
            id: 4,
            icon: "client-01.svg",
        },
        {
            id: 5,
            icon: "client-06.svg",
        },
        {
            id: 6,
            icon: "client-05.svg",
        },
        {
            id: 1,
            icon: "client-01.svg",
        },
        {
            id: 2,
            icon: "client-02.svg",
        },
        {
            id: 3,
            icon: "client-03.svg",
        },
        {
            id: 4,
            icon: "client-04.svg",
        },
        {
            id: 5,
            icon: "client-05.svg",
        },
        {
            id: 6,
            icon: "client-06.svg",
        },
    ]

    return (
        <Container>
            <Wrapper className='wrapper'>
                <Head>
                    <SectionHead
                        colorTitle='OUR'
                        title='CLIENTS.'
                    />
                    <p>Lorem ipsum dolor sit amet consectetur. Malesuada quis cursus feugiat placerat aliquet. Vitae maecenas ut pharetra sit sem .</p>
                </Head>
                <ClientsList>
                    {clients.map((client, i) => (
                        <ClientItem
                            key={i}
                        >
                            <img src={`/icons/clients/${client.icon}`} alt={client.icon} />
                        </ClientItem>
                    ))}
                </ClientsList>
                <ButtonContainer>
                    <Button>
                        View all clients
                        <img src="/icons/main/right-arrow.svg" alt="right arrow" />
                    </Button>
                </ButtonContainer>
                <BottomContainer></BottomContainer>
            </Wrapper>
        </Container>
    )
}

export default Clients

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 70px 0;
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
    }
`
const ClientsList = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: calc(10% / 6);
    margin-bottom: 38px;
`
const ClientItem = styled.li`
    width: 15%;

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
    display: flex;
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