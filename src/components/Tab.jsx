import React, { useState } from "react";
import styled, { css } from "styled-components";

const Tab = ({ children, onClick, active }) => {
    return (
        <Wrapper onClick={onClick} $active={active.toString()}>
            {children}
        </Wrapper>
    );
};

export default Tab;

const Wrapper = styled.div`
    display: inline-block;
    padding: 10px 16px;
    color: #7b7b7b;
    font-size: 18px;
    cursor: pointer;
    ${({ $active }) =>
        $active === "true"
            ? css`
                  color: #fff;
                  font-family: satoshi-medium;
                  border-bottom: 2px solid #fff;
              `
            : null}
`;
