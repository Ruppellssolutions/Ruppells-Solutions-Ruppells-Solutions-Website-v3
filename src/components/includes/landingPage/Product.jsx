import React from 'react'
import styled from 'styled-components'
import SectionHead from '../general/SectionHead'


const Product = () => {
    return (
        <Container>
            <Wrapper className='wrapper'>
                <Head>
                    <SectionHead
                        colorTitle='OUR'
                        title='PRODUCT.'
                    />
                    <p>Lorem ipsum dolor sit amet consectetur. Malesuada quis cursus feugiat placerat aliquet. Vitae maecenas ut pharetra sit sem .</p>
                </Head>
                <ILMContainer>
                    <ILMLeft>
                        <img src="/GIF/ilm-mobile.png" alt="ilm mobile" />
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
    )
}

export default Product

const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 68px 0;
    z-index: 10;
    position: relative;
`
const Wrapper = styled.div`
    
`
const Head = styled.div`
    margin-bottom: 46px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        color: #9E9E9E;
        font-size: 18px;
        max-width: 60%;
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
`
const ILMLeft = styled.div`
    width: 50%;
    height: 450px;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    overflow: hidden;

    img{
        width: 100%;
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

    p{
        color: #D8D8D8;
        font-size: 17px;
        margin: 24px 0;
    }
`
const LogoContainer = styled.div`
    width: 70px;
`
const DownloadsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
const DownloadIcon = styled.div`
    border: 1px solid #BFBFBF;
    width: 40px;
    aspect-ratio: 1;
    padding: 7px;
    border-radius: 5px;
    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
    }
`