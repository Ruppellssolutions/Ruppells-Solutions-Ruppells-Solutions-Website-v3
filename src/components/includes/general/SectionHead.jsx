import React from 'react'
import styled from 'styled-components'

const SectionHead = ({ colorTitle = false, title = "" }) => {
    return (
        <Container>
            <h4>
                {colorTitle && <span>{colorTitle}&nbsp;</span>}
                {title}
            </h4>
        </Container>
    )
}

export default SectionHead

const Container = styled.div`
    h4{
        /* margin-bottom: 26px; */
        color: #fff;
        font-family: Satoshi-Medium;
        font-size: 48px;

        @media all and (max-width: 1180px){
            font-size: 38px;
        }
        @media all and (max-width: 768px){
            font-size: 30px;
        }
        @media all and (max-width: 640px){
            font-size: 26px;
        }
        @media all and (max-width: 460px){
            font-size: 22px;
        }

        span{
            font: inherit;
            background: linear-gradient(106deg, #CE4FE3 0%, #36B2EA 101.89%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`