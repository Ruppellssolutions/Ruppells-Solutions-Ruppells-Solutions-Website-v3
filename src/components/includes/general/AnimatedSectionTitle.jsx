import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'


const TitleComp = ({ title = { title: "Title One" }, id = "01", className = "" }) => {
    return (
        <span
            id={id}
            data-scroll-height-multiple={'wh'}
            className={className}
        >
            {title.title}
        </span>
    )
}


const AnimatedSectionTitle = ({
    activeIndex = 0,
    titles = [{ title: "Title One" }],
    infinity = false,
    // wrapper = ({ children }) => <span>{children}</span>
}) => {
    const [index, setIndex] = useState(activeIndex)

    const tempTitles = titles.map((title, i) => ({ ...title, id: i + 1 }))

    const containerRef = useRef()

    useEffect(() => {
        let id;

        if (infinity) {
            id = setInterval(() => {
                setIndex((prevIndex) => {
                    return prevIndex === titles.length ? 0 : prevIndex + 1
                })
            }, 2000)
        }

        return () => {
            if (id) clearInterval(id)
        }
    }, [])

    useEffect(() => {
        if (infinity) {
            const currentEl = document.getElementById(`0${index}`)

            containerRef?.current.scrollTo({
                behavior: "smooth",
                left: 0,
                top: index * currentEl?.clientHeight,
            })
        }
    }, [index])

    useEffect(() => {
        if (!infinity) {
            const currentEl = document.getElementById(`00${activeIndex + 1}`)

            containerRef.current.scrollTo({
                behavior: "smooth",
                left: 0,
                top: activeIndex * currentEl.clientHeight,
            })
        }
    }, [activeIndex])

    return (
        <Container
            className={`titles-container ${infinity ? "infinity" : ""}`}
            ref={containerRef}
        >
            {tempTitles.map((title, i) => (
                <TitleComp
                    id={infinity ? `0${title.id}` : `00${title.id}`}
                    className={title?.className}
                    title={title}
                    key={i}
                />
            ))}
        </Container>
    )
}

export default AnimatedSectionTitle

const Container = styled.div`
    overflow: hidden;
    height: 78px;
    
    &.infinity{
        display: inline-flex;
        flex-direction: column;
    }

    @media all and (max-width: 980px){
        height: 56px;
    }
    @media all and (max-width: 768px){
        height: 45px;
    }
    @media all and (max-width: 460px){
        height: 35px;
    }

    span{
        display: block;
        /* height: 78px; */
        font: inherit;
        /* font-family: Satoshi-Medium;
        background:linear-gradient(106deg, #CE4FE3 0%, #36B2EA 101.89%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; */

        @media all and (max-width: 980px){
            height: 56px;
        }
        @media all and (max-width: 768px){
            height: 45px;
        }
        @media all and (max-width: 460px){
            height: 35px;
        }
    }
`