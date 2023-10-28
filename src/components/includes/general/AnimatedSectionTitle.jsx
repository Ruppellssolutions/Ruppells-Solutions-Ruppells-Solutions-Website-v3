import React from 'react'
import styled from 'styled-components'


const AnimatedSectionTitle = ({
    activeIndex = 0,
    titles = [{ title: "Title One", color: "#fff", fontSize: "16px" }],
    infinity = true,
    animate = true,
}) => {
    return (
        <Container>
            {titles.map((title, i) => (
                <span key={i}>
                    {title.title}
                </span>
            ))}
        </Container>
    )
}

export default AnimatedSectionTitle

const Container = styled.div`
    
`