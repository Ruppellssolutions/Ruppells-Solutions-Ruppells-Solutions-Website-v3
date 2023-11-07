import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"


const ProjectItem = ({ project = {} }) => {

    return (
        <Container id={project.id}>
            <Top>
                <div className="logo-container">
                    <img src={project.logo} alt={project.title} />
                </div>
            </Top>
            <Bottom>
                <BottomHead>
                    <h5 className="title">
                        {project.title.split(" ")[0]} <span className="bold">{project.title.split(" ")[1]}</span>
                    </h5>
                    <ul className="tags">
                        {project.tags.map((tag, i) => (
                            <li key={tag.id}>{tag.title}</li>
                        ))}
                    </ul>
                </BottomHead>
                <BottomContent>
                    <p className="description">{project.description}</p>
                    <span className="icon">
                        <img src="/icons/main/right-arrow.svg" alt="right arrow" />
                    </span>
                </BottomContent>
            </Bottom>
        </Container>
    )
}

export default ProjectItem

const Container = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: #3178b5; */
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.40) -18.02%, rgba(0, 0, 0, 0.60) 87.68%),url('/images/services/web-app-dev.png') center center no-repeat;
    background-size: cover;
    padding: 100px;
    

    display: flex;
    align-items: start;
    justify-content: flex-end;
    flex-direction: column;
`

const Top = styled.div`
    margin-bottom: 42px;

    .logo-container{
        width: max-content;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.10);
        padding: 24px;

        img{
            width: 120px;
        }
    }
`
const Bottom = styled.div`
    width: 100%;
`
const BottomHead = styled.div`
    width: 100%;
    margin-bottom: 32px;
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 58px;
    flex-wrap: wrap;

    h5{
        color: #f3f3f3;
        font-size: 38px;
        font-weight: 400;
        letter-spacing: 1px;
        width: max-content;
        
        span.bold{
            color: inherit;
            font-size: inherit;
            font-weight: 600;
            /* font-family: Satoshi-Medium; */
        }
    }
    ul.tags{
        max-width: 60%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row-reverse;
        gap: 20px;
        flex-wrap: wrap;

        li{
            width: max-content;
            padding: 8px 16px;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.24);
            background: rgba(255, 255, 255, 0.10);
            color: #fff;
            font-size: 14px;
            cursor: pointer;
        }
    }
`
const BottomContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        max-width: 70%;
        color: #fff;
        font-size: 17px;
        letter-spacing: 0.8px;
    }
    span.icon{
        display: block;
        width: 36px;
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.20);

        img{
            width: 24px;
        }
    }
`