import React from "react";
import styled from "styled-components";

const GridCard = ({ url }) => {
    return (
        <Wrapper url={url}>
            <div className="pop-up">
                <div>
                    <h6>Project name</h6>
                </div>
                <div>
                    <span>#Website desighning</span>
                </div>
                <div className="btn">
                    <button>View work</button>
                </div>
            </div>
        </Wrapper>
    );
};

export default GridCard;

const Wrapper = styled.div`
    background-color: #e0e0e0;
    text-align: center;
    aspect-ratio: 1/1;
    border-radius: 24px;
    background-size: 118%;
    background-position: center;
    transition: background-size 1s ease-in-out;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.url});
    position: relative;
    overflow: hidden;
    &:hover {
        background-size: 121%;
        .pop-up {
            bottom: 5%;
        }
    }
    .pop-up {
        position: absolute;
        bottom: -60%;
        left: 50%;
        transform: translateX(-50%);
        width: 95%;
        background-color: #000;
        opacity: 0.8;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 15px;
        transition: bottom 1s ease-in-out;
        div {
            width: max-content;
            h6 {
                color: #fff;
                font-size: 20px;
            }
            span {
                background: linear-gradient(
                    106deg,
                    #ce4fe3 0%,
                    #36b2ea 101.89%
                );

                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-size: 16px;
            }
        }
        .btn {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            button {
                background-color: #fff;
                padding: 10px 25px;
                border-radius: 25px;
                font-size: 16px;
                font-family: Satoshi-Medium;
                color: #000;
                cursor: pointer;
                @media all and (max-width: 980px) {
                    font-size: 14px;
                }
            }
        }
    }
`;
