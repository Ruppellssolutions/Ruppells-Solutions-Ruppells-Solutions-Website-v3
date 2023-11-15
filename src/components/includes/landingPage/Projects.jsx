import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { motion, useScroll, useTransform } from 'framer-motion'
import ProjectItem from '../projects/ProjectItem'
import useDimension from '../../hooks/useDimension'


const Projects = ({ scrollYProgress }) => {
    const containerRef = useRef()

    const headY = useTransform(scrollYProgress, [0.3, 0.4], ["0", "-100vh"])
    const enlargeX = useTransform(scrollYProgress, [0.3, 0.4], ["7.5vw", "0vw"])
    const enlargeY = useTransform(scrollYProgress, [0.3, 0.4], [370, 0])
    const sliderX = useTransform(scrollYProgress, [0.4, 1], ["0vw", "-160vw"])
    const y = useTransform(scrollYProgress, [0.3, 0.4], [100, 0])

    const projects = [
        {
            id: 1,
            title: "Arab Dreams",
            bg: "/images/projects/project-01.png",
            description: "Elevating digital dreams with Arab Dreams, where their CRM software seamlessly aligns with our commitment to service excellence. Together, we navigate the digital landscape, shaping a future where innovation meets unparalleled customer satisfaction.",
            logo: "/icons/logo/arab-dreams.svg",
            tags: [
                {
                    id: 1,
                    title: "CRM Software",
                },
                {
                    id: 2,
                    title: "Mobile Application",
                },
                {
                    id: 3,
                    title: "Logo Creation",
                },
            ],
            siteLink: "",
            backgroundImage: "",
            backgroundColor: "#3178b5"
        },
        {
            id: 2,
            title: "Ruppells Overseas",
            bg: "/images/projects/project-02.png",
            description: "Proudly partnered with Ruppells Overseas, a beacon of excellence in study abroad consultancy based in Kochi, Kerala. Our digital strategies amplify success stories, guiding clients to academic triumphs in this tech-driven era.",
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
            bg: "/images/projects/project-03.png",
            description: "At Reverse Gear's Kollam car station, delighted clients reflect the unwavering commitment to service excellence and customer satisfaction, ensuring their journeys thrive with seamless digital experiences.",
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

    const { width } = useDimension()

    return (
        <Container
            ref={containerRef}
        >
            <Wrapper>
                <Content>
                    <Head className='wrapper'
                        style={{
                            y: width > 860 && headY
                        }}
                    >
                        <h4><span>OUR</span> PROJECTS.</h4>
                        <div className="details">
                            <span className="container">100+ <span className="child">completed projects</span></span>
                            <span className="container">80+ <span className="child">happy customers</span></span>
                        </div>
                    </Head>
                    <ProjectsContainer
                        style={{
                            x: width > 860 && enlargeX,
                            y: width > 860 && enlargeY,
                        }}
                    >
                        <motion.div
                            className="project-container"
                            style={{
                                x: width > 860 && sliderX
                            }}
                        >
                            {projects.map((pro, i) => (
                                <ProjectItemContainer
                                    key={pro.id}
                                >
                                    <ProjectItem
                                        project={pro}
                                    />
                                </ProjectItemContainer>
                            ))}
                        </motion.div>
                    </ProjectsContainer>
                    <ProjectsCountContainer
                        style={{ y: width > 860 && y }}
                    >
                        <div className="count-container">
                            <h5><span className="bold">+24</span> more projects</h5>
                        </div>
                    </ProjectsCountContainer>
                </Content>
            </Wrapper>
        </Container>
    )
}

export default Projects

const Container = styled.section`
    width: 100%;
    position: relative;
    z-index: 112;
    max-height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;

    @media all and (max-width: 860px) {
        max-height: calc(300vh + 320px);
        height: calc(300vh + 320px);
    }

    @media all and (max-width: 460px){
        max-height: calc(300vh + 280px);
        height: calc(300vh + 280px);
    }
`
const Wrapper = styled.div`
    /* height: 400vh; */
    position: relative;
`
const Content = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
    /* height: max-content; */

    @media all and (max-width: 860px) {
        /* height: max-content; */
        /* overflow: scroll; */
    }
`

const Head = styled(motion.div)`
    padding: 160px 0;

    @media all and (max-width: 860px){
        padding: 80px 0 60px 0;
    }

    @media all and (max-width: 460px){
        padding: 70px 0 40px 0;
    }

    h4{
        margin-bottom: 26px;
        color: #fff;
        font-family: Satoshi-Medium;
        font-size: 48px;

        @media all and (max-width: 1080px){
            font-size: 32px;
        }
        @media all and (max-width: 640px){
            font-size: 26px;
            margin-bottom: 20px;
        }
    
        span{
            font: inherit;
            background: linear-gradient(106deg, #CE4FE3 0%, #36B2EA 101.89%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    div.details{
        display:flex;
        /* flex-direction: column; */
    }
    span.container {
        color: #F9F9F9;
        font-size: 32px;
        font-family: Satoshi-Medium;
        display: inline-block;
        margin-right: 26px;

        @media all and (max-width: 1080px){
            font-size: 20px;
        }
        @media all and (max-width: 640px){
            font-size: 16px;
        }

        span.child{
            color: rgba(205, 205, 205, 0.90);
            font-size: 18px;

            @media all and (max-width: 1080px){
                font-size: 14px;
            }
            @media all and (max-width: 640px){
                font-size: 12px;
            }
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
    background-color: red;
    margin-bottom: 120px;
`

const ProjectsContainer = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1;
    border-top-left-radius: 20px;
    overflow: hidden;
    transform: translate(7.5%,370px);

    @media all and (max-width: 860px){
        height: 300vh;
        transform: translate(0,0) !important;
        border-radius: 0;
        position: relative;
        z-index: 100;
    }
    /* transition: all 1s ease-in-out; */

    /* @media all and (max-width: 860px){
        height: max-content;
        overflow: scroll;
        position: relative;
    } */

    &.enlarged{
        transform: translate(0,0);
        border-radius: 0;
    }

    .project-container{
        display: flex;
        flex-wrap: wrap;
        width: max-content;

        @media all and (max-width: 860px){
            width: 100vw;
            height: max-content;
        }
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
const ProjectsCountContainer = styled(motion.div)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 32px;
    transition: top 0.3s ease-in-out;
    user-select: none;
    pointer-events: none;

    @media all and (max-width: 860px){
        position: relative;
        height: max-content;
        justify-content: center;
        user-select: all;
        pointer-events: all;
    }

    &.active{
        top: 0;
    }

    .count-container{
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;

        @media all and (max-width: 860px){
            width: 100%;
        }
    }

    h5{
        color: rgba(205, 205, 205, 0.90);
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        @media all and (max-width: 860px){
            flex-direction:row;
            gap: 12px;    
        }

        span.bold{
            font-family: Satoshi-Medium;
            font-size: 46px;
            color: #fff;
        }
    }
`
const ProjectItemContainer = styled.div`
    width: 80vw;
    height: 100vh;
    @media all and (max-width:480px){
        width: 91vw;
    } 

    @media all and (max-width: 860px) {
        width: 100vw;
        max-height: max-content;
        min-height: 100vh;
    }
       /* position: absolute;
    left: 160%;
    top:0; */
    /* transition: all 1s ease-in-out; */
`