import React from 'react'
import styled from 'styled-components'

const SectionHead = ({ colorTitle = "", title = "" }) => {
    return (
        <Container>
            <h4><span>{colorTitle}</span> {title}</h4>
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

        span{
            font: inherit;
            background: linear-gradient(106deg, #CE4FE3 0%, #36B2EA 101.89%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`