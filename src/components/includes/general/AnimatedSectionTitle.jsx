import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


const TitleComp = ({ title = { title: "Title One" } }) => {
    return (
        <motion.span
            initial={{
                y: -1
            }}
            animate={{
                y: 0
            }}
            exit={{
                y: 1
            }}
            transition={{
                type: "spring",
            }}
        >
            {title.title}
        </motion.span>
    )
}


const AnimatedSectionTitle = ({
    activeIndex = 0,
    titles = [{ title: "Title One" }],
    infinity = false,
    // wrapper = ({ children }) => <span>{children}</span>
}) => {
    const [index, setIndex] = useState(activeIndex)

    const titlesComps = titles
        .map((title, i) =>
            <TitleComp
                title={title}
                key={i}
            />)

    useEffect(() => {
        let id;

        if (infinity) {
            id = setInterval(() => {
                setIndex((prevIndex) => {
                    return prevIndex + 1 === titles.length ? 0 : prevIndex + 1
                })
            }, 2000)
        }

        return () => {
            if (id) clearInterval(id)
        }
    }, [])

    const tempIndex = infinity ? index : activeIndex

    return (
        <Container>
            <AnimatePresence mode='wait'>
                {titlesComps[tempIndex]}
            </AnimatePresence>
        </Container>
    )
}

export default AnimatedSectionTitle

const Container = styled.div`
    display: inline-flex;
    align-items: center;
    /* height: max-content; */
    overflow: hidden;
`