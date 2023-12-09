import React from "react";
import styled, { css } from "styled-components";

const Poster = ({ imgPath, type, name, position }) => {
    return (
        <PosterContainer type={type}>
            <img src={imgPath} alt="Director" />
            <TittleBar type={type}>
                <div className="left">
                    <h3>{name}</h3>
                    <span>{position}</span>
                </div>
                <div className="right">
                    <img src="/images/linkedin icon.png" alt="Linked In" />
                </div>
            </TittleBar>
        </PosterContainer>
    );
};

export default Poster;

const posterContainerStylesForMedium = css`
    transition: all 0.8s ease;
    transform: scale(1);
`;

const PosterContainer = styled.div`
    width: 100%;
    position: relative;
    img {
        width: 100%;
        display: block;
    }

    ${({ type }) =>
        type !== "lg" &&
        css`
            ${posterContainerStylesForMedium}
            &:hover {
                transform: translateY(10px);
            }
        `}
`;

const TitleBarStylesForLarge = css`
    padding: 40px;
    transition: all 0.8s ease;
    bottom: -130px;
    border-top: 4px solid #fff;
    width: 100%;
    @media all and (max-width: 480px) {
        padding: 25px;
        bottom: -100px;
    }
    @media all and (max-width: 390px) {
        padding: 17px;
        bottom: -94px;
    }
    ${PosterContainer}:hover & {
        bottom: -160px;
    }

    div.left {
        width: 70%;
        h3 {
            font-size: 36px;
            @media all and (max-width: 480px) {
                font-size: 24px;
            }
            @media all and (max-width: 390px) {
                font-size: 22px;
            }
        }
        span {
            @media all and (max-width: 480px) {
                font-size: 18px;
            }
        }
    }
    div.right {
        width: 44px;
        @media all and (max-width: 480px) {
            width: 30px;
        }
    }
`;

const TittleBarStyleForMedium = css`
    padding: 24px;
    bottom: -60px;
    left: 35px;
    width: 80%;
    transition: all 0.8s ease; /* This is the key for the animation */
    /* Initial size */

    ${PosterContainer}:hover & {
        left: 0;
        bottom: -40px;
        width: 100%;
    }
    @media all and (max-width: 480px) {
        padding: 15px;
        width: 140%;
        left: -41px;
    }
    @media all and (max-width: 390px) {
        padding: 10px;
    }
    div.left {
        width: 85%;
        h3 {
            font-size: 24px;
            @media all and (max-width: 480px) {
                font-size: 20px;
            }
            @media all and (max-width: 390px) {
                font-size: 18px;
            }
        }
        span {
            color: #c09aff;
            font-size: 18px;
            @media all and (max-width: 480px) {
                font-size: 18px;
            }
            @media all and (max-width: 390px) {
                font-size: 16px;
            }
        }
    }
    div.right {
        width: 26px;
        @media all and (max-width: 480px) {
            width: 20px;
        }
    }
`;

const TittleBarStyleForSmall = css`
    padding: 24px;
    bottom: -75px;
    left: 20px;
    width: 90%;
    transition: all 0.8s ease;

    ${PosterContainer}:hover & {
        left: 0;
        bottom: -60px;
        width: 100%;
    }
    @media all and (max-width: 980px) {
        padding: 15px;
    }
    @media all and (max-width: 480px) {
        padding: 15px;
    }
    @media all and (max-width: 390px) {
        padding: 5px;
        width: 95%;
        bottom: -48px;
        left: 3px;
    }
    div.left {
        width: 85%;
        h3 {
            font-size: 24px;
            @media all and (max-width: 480px) {
                font-size: 18px;
            }
        }
        span {
            color: #fff;
            font-size: 18px;
            @media all and (max-width: 480px) {
                font-size: 16px;
            }
            @media all and (max-width: 390px) {
                font-size: 15px;
            }
        }
    }
    div.right {
        width: 26px;
        @media all and (max-width: 390px) {
            width: 20px;
        }
    }
`;

const TittleBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(25.5px);
    position: absolute;

    div.left {
        h3 {
            color: #fff;
        }
        span {
            color: #fff;
        }
    }
    div.right {
        img {
            width: 100%;
            display: block;
        }
    }

    ${({ type }) =>
        type === "lg" &&
        css`
            ${TitleBarStylesForLarge}
        `}

    ${({ type }) =>
        type === "md" &&
        css`
            ${TittleBarStyleForMedium}
        `}
    ${({ type }) =>
        type === "sm" &&
        css`
            ${TittleBarStyleForSmall}
        `}
`;
