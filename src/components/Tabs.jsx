import React, { useState } from "react";
import styled, { StyleSheetManager } from "styled-components";
import Tab from "./Tab";

const Tabs = ({ onChange = () => {}, data, value }) => {
    const [active, setActive] = useState(value || data[0]);

    const handleClick = (item) => {
        setActive(item);
        // onChange(item);
    };

    return (
        <Wrapper className="tabs">
            {data?.map((item, i) => (
                <Tab
                    key={i}
                    active={active === item}
                    onClick={() => handleClick(item)}
                >
                    {item}
                </Tab>
            ))}
        </Wrapper>
    );
};

export default Tabs;

const Wrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
    width: max-content;
    padding: 30px 0;
`;
