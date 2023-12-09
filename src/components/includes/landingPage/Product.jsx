import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import SectionHead from '../general/SectionHead'


const Product = () => {
    return (
        <>
            <Container>
                <Wrapper className='wrapper'>
                    <Head>
                        <SectionHead
                            colorTitle='OUR'
                            title='PRODUCT.'
                        />
                        <p>Explore the forefront of innovation with Ruppells Solutions guiding the way. Discover iLM, the ultimate digital companion crafted for followers of the Muslim faith. Unlock a seamless blend of technology and spirituality.</p>
                    </Head>
                    <ILMContainer>
                        <ILMLeft>
                            <img src="https://d2chzhwk8f0zsl.cloudfront.net/ruppells-group-videos/Ilm+Phone.gif" alt="ilm mobile" />
                        </ILMLeft>
                        <ILMRight>
                            <LogoContainer>
                                <img src="/icons/logo/ilm.svg" alt="ilm" />
                            </LogoContainer>
                            <p>Unlock the Power of Digital Tools for Worship, Embrace Spiritual Enlightenment at Your Fingertips</p>
                            <DownloadsContainer>
                                <DownloadIcon>
                                    <img src="/icons/main/android.svg" alt="android icon" />
                                </DownloadIcon>
                                <DownloadIcon>
                                    <img src="/icons/main/ios.svg" alt="ios icon" />
                                </DownloadIcon>
                            </DownloadsContainer>
                        </ILMRight>
                    </ILMContainer>
                </Wrapper>
            </Container>
        </>
    )
}

export default Product

const Container = styled.section`
    width: 100%;
    /* min-height: 100vh; */
    padding: 132px 0 32px;
    z-index: 10;
    position: relative;

    @media all and (max-width: 768px){
        padding: 72px 0 24px;
    }
`
const Wrapper = styled.div`
    &.wrapper{
        max-width: 80%;

        @media all and (max-width: 680px){
            max-width: 90%;
        }
    }
`
const Head = styled.div`
    margin-bottom: 46px;
    display: flex;
    gap: 18px;
    align-items: center;
    justify-content: space-between;

    @media all and (max-width: 1080px){
        flex-direction: column;
        align-items: start;
    }
    @media all and (max-width: 720px){
        gap: 14px;
        margin-bottom: 32px;
    }

    p{
        color: #9E9E9E;
        font-size: 15px;
        max-width: 60%;

        @media all and (max-width: 1080px){
            max-width: 100%;
        }
        @media all and (max-width: 768px){
            font-size: 14px;
        }
        @media all and (max-width: 720px){
            font-size: 12px;
        }
    }
`
const ILMContainer = styled.div`
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.24);
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(7px);
    padding: 32px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;

    @media all and (max-width: 768px){
        padding: 20px;
    }
    @media all and (max-width: 680px){
        flex-direction: column;
        gap: 12px;
    }
`
const ILMLeft = styled.div`
    width: 35%;
    /* min-width: 250px; */
    aspect-ratio: 1;
    /* height: 400px; */
    /* background-color: red; */
    display: flex;
    /* align-items: center; */
    justify-content: center;
    overflow: hidden;
    
    img,video{
        width: 350%;
        /* max-width: 350%; */
        /* height: auto; */
        object-fit: contain;
    }

    @media all and (max-width: 680px){
        min-width: 220px;
    }
`
const GIFContainer = styled.div`
    width: 50%;
    height: 450px;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    overflow: hidden;

    img{
        width: 200%;
    }
`
const ILMRight = styled.div`
    width: 40%;

    @media all and (max-width: 680px){
        width: 100%;
    }

    p{
        color: #D8D8D8;
        font-size: 17px;
        margin: 24px 0;

        @media all and (max-width: 980px){
            font-size: 14px;
        }
        @media all and (max-width: 680px){
            margin: 12px 0;
            font-size: 12px;
        }
    }
`
const LogoContainer = styled.div`
    width: 70px;

    @media all and (max-width: 720px){
        width: 38px;
    }
`
const DownloadsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media all and (max-width: 720px){
        gap: 10px;
    }
`
const DownloadIcon = styled.div`
    border: 1px solid #BFBFBF;
    width: 40px;
    height: 40px;
    padding: 7px;
    border-radius: 5px;
    cursor: pointer;

    @media all and (max-width: 720px){
        width: 32px;
        height: 32px;
    }

    img{
        width: 100%;
        height: 100%;
    }
`
const IntersectionItem = styled.div`
    height: 20px;
    /* background-color: red; */
`