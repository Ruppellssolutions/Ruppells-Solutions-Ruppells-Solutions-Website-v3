import React from "react";
import styled from "styled-components";

const Subheading = ({ firstPart, secondPart, underLineWd }) => {
    return (
        <Container underlinewd={underLineWd}>
            <span>
                <span className="light">{firstPart}</span>{" "}
                <span className="bold"> {secondPart}</span>
            </span>
        </Container>
    );
};

const Container = styled.div`
    span {
        font-size: 38px;
        position: relative;
        @media all and (max-width: 768px) {
            font-size: 34px;
        }
        @media all and (max-width: 480px) {
            font-size: 23px;
        }
        &.light {
            color: #bbb;
            &::before {
                position: absolute;
                content: "";
                width: ${({ underlinewd }) => underlinewd};
                height: 1px;
                border: 1px solid white;
                background-color: #f3f3f3;
                left: 0;
                bottom: -4px;
                @media all and (max-width: 480px) {
                    width: 100px;
                }
            }
        }
    }
    span.bold {
        font-weight: 500;
        color: #f3f3f3;
        font-family: "Satoshi-Medium";
    }
`;

export default Subheading;
