import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { useInView } from 'framer-motion'
import useSections from '../../context/useSections'
import ProjectItem from '../projects/ProjectItem'


const Projects = () => {
    const { isProjectSectionActive, toggleProjectActive, isProductSectionActive, toggleProductActive } = useSections()
    const scrollRef = useRef()
    const productObserver = useRef()
    const projectsEnlargerRef = useRef()
    const serviceSectionTriggerRef = useRef()
    const projectReverseTriggerRef = useRef()

    const [isEnlarged, setEnlarged] = useState(false)
    const [isScrollTopSet, setScrollTop] = useState(false)
    const [viewedCards, setViewedCards] = useState([1])

    useEffect(() => {

        if (isProjectSectionActive) {
            scrollRef.current.scrollTop = 100
            setScrollTop(true)
            setEnlarged(false)
        }
    }, [isProjectSectionActive])

    const isProductObserverInView = useInView(productObserver)
    const isProjectEnlargerInView = useInView(projectsEnlargerRef)
    const isServiceSectionTriggerRefInView = useInView(serviceSectionTriggerRef)

    useEffect(() => {
        // trigger to go backward - Service section
        isScrollTopSet && isServiceSectionTriggerRefInView && toggleProjectActive() && setEnlarged(false)
    }, [isServiceSectionTriggerRefInView])

    useEffect(() => {
        // trigger to go forward - Product section
        isProductObserverInView && toggleProductActive()
    }, [isProductObserverInView])

    useEffect(() => {
        if (isProjectEnlargerInView) {
            setEnlarged(true)
        } else {
            setEnlarged(false)
            setViewedCards([1])
        }
    }, [isProjectEnlargerInView])

    const projects = [
        {
            id: 1,
            title: "Trinity Funds",
            description: "Lorem ipsum dolor sit amet consectetur. Scelerisque bibendum vel nulla id sit. Tincidunt ullamcorper lobortis fermentum adipiscing urna et vitae duis eu.",
            logo: "/icons/logo/trinity-funds.svg",
            tags: [
                {
                    id: 1,
                    title: "Web Development",
                },
                {
                    id: 2,
                    title: "Digital Marketing",
                },
                {
                    id: 3,
                    title: "Branding",
                },
            ],
            siteLink: "",
            backgroundImage: "",
            backgroundColor: "#3178b5"
        },
        {
            id: 2,
            title: "Ruppells Overseas",
            description: "Lorem ipsum dolor sit amet consectetur. Scelerisque bibendum vel nulla id sit. Tincidunt ullamcorper lobortis fermentum adipiscing urna et vitae duis eu.",
            logo: "/icons/logo/ruppells-overseas.svg",
            tags: [
                {
                    id: 1,
                    title: "Web Development",
                },
                {
                    id: 2,
                    title: "Digital Marketing",
                },
                {
                    id: 3,
                    title: "Branding",
                },
                {
                    id: 4,
                    title: "Social Media Marketing",
                },
                {
                    id: 5,
                    title: "Content Marketing",
                },
            ],
            siteLink: "",
            backgroundImage: "",
            backgroundColor: "#31b556"
        },
        {
            id: 3,
            title: "Reverse Gear",
            description: "Lorem ipsum dolor sit amet consectetur. Scelerisque bibendum vel nulla id sit. Tincidunt ullamcorper lobortis fermentum adipiscing urna et vitae duis eu.",
            logo: "/icons/logo/reverse-gear.svg",
            tags: [
                {
                    id: 1,
                    title: "Web Development",
                },
                {
                    id: 2,
                    title: "Digital Marketing",
                },
                {
                    id: 3,
                    title: "Branding",
                },
                {
                    id: 4,
                    title: "Social Media Marketing",
                },
                {
                    id: 5,
                    title: "Content Marketing",
                },
            ],
            siteLink: "",
            backgroundImage: "",
            backgroundColor: "#89b531"
        },
    ]

    const left = useMemo(() => (
        (pro = {}) => {

            if (!isProductSectionActive) {

                if (viewedCards.includes(pro.id)) {
                    return 0
                } else if (Math.max(...viewedCards) + 1 === pro.id) {
                    return "80%"
                } else {
                    return "160%"
                }
            }

        }
    ), [viewedCards, isProductSectionActive])

    return (
        <Container className={`${isProjectSectionActive ? "active" : ""} ${isProductSectionActive ? "product" : ""}`}>
            <div className={`wrapper ${isEnlarged ? "enlarged" : ""}`}>
                <Head>
                    <h4><span>OUR</span> PROJECTS.</h4>
                    <div className="details">
                        <span className="container">100+ <span className="child">completed projects</span></span>
                        <span className="container">80+ <span className="child">happy customers</span></span>
                    </div>
                </Head>
            </div>
            <ProjectsCountContainer className={isEnlarged ? "active" : ""}>
                <div className="count-container">
                    <h5><span className="bold">+24</span> more projects</h5>
                </div>
            </ProjectsCountContainer>
            <ProjectsContainer className={isEnlarged ? "enlarged" : ""}>
                {projects.map((pro, i) => (
                    <ProjectItem
                        project={pro}
                        key={pro.id}
                        style={{
                            left: left(pro)
                        }}
                    />
                ))}
            </ProjectsContainer>
            <ScrollWrapper ref={scrollRef} >
                <ScrollContainer>
                    <IntersectionItem ref={serviceSectionTriggerRef} style={{ marginBottom: "115vh" }} />
                    {/* <IntersectionItem ref={projectReverseTriggerRef} style={{ backgroundColor: "#808080" }} /> */}
                    <IntersectionItem ref={projectsEnlargerRef} />

                    {projects.map((pro, i) => {
                        const ref = useRef()
                        const isInView = useInView(ref)

                        useEffect(() => {

                            if (!isProductSectionActive) {

                                if (isInView) {
                                    setViewedCards([...new Set([...viewedCards, pro.id])])
                                } else {
                                    if (pro.id !== 1) {
                                        setViewedCards(viewedCards.filter(item => item !== pro.id))
                                    }
                                }
                            }
                        }, [isInView])

                        return (
                            <IntersectionItem
                                key={i}
                                ref={ref}
                            />
                        )
                    })}
                    {/* <IntersectionItem ref={productObserver} style={{ backgroundColor: "#152bd1" }} /> */}
                </ScrollContainer>
            </ScrollWrapper>
        </Container>
    )
}

export default Projects

const Container = styled.section`
    width: 100%;
    height: 100vh;
    /* background-color: #ff9595; */
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    transform: translateX(100vw);
    transition: transform 1s ease-in-out;

    &.active{
        transform: translateX(0);
    }

    .wrapper{
        transition: transform 1s ease-in-out;

        &.enlarged{
            transform: translateY(-100vh);
        }
    }

    &.product{
        transform: translateY(-200vh);
    }
`

const Head = styled.div`
    padding: 160px 0;

    h4{
        margin-bottom: 26px;
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

    span.container {
        color: #F9F9F9;
        font-size: 32px;
        font-family: Satoshi-Medium;
        display: inline-block;
        margin-right: 26px;

        span.child{
            color: rgba(205, 205, 205, 0.90);
            font-size: 18px;
        }
    }
`
const ScrollWrapper = styled.div`
    overflow-y: scroll;
    max-height: 100vh;
    position: fixed;
    top: 0px;
    left: 0;
    z-index: 100;
    width: 100%;
`
const ScrollContainer = styled.div`
    width: 100%;
    height: 140vh;
    z-index: 100;
    transform: translateX(0);
    transition: transform 3s ease-in-out;

    &.product{
        transform: translateX(300%);
    }
    &{
        user-select: none;
        /* pointer-events: auto; */
    }
`
const IntersectionItem = styled.div`
    height: 20px;
    /* background-color: red; */
    margin-bottom: 120px;
`

const ProjectsContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    border-top-left-radius: 20px;
    overflow: hidden;
    transform: translate(7.5%,370px);
    transition: all 1s ease-in-out;

    &.enlarged{
        transform: translate(0,0);
        border-radius: 0;
    }
`
// const ProjectItem = styled.div`
//     width: 80%;
//     height: 100%;
//     background-color: #3178b5;
//     padding: 100px;
//     position: absolute;
//     left: 160%;
//     top:0;
//     transition: all 1s ease-in-out;
// `
const ProjectsCountContainer = styled.div`
    position: absolute;
    left: 0;
    top: 300px;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 32px;
    transition: top 0.3s ease-in-out;

    &.active{
        top: 0;
    }

    .count-container{
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    h5{
        color: rgba(205, 205, 205, 0.90);
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        span.bold{
            font-family: Satoshi-Medium;
            font-size: 46px;
            color: #fff;
        }
    }
`