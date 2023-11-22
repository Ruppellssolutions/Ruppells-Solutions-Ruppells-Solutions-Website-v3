import React from "react";
import { styled } from "styled-components";

//import radiulBg from "/icons/service-head-bg.svg";

const GlassHeader = ({ miniTitle = "Our", title = "Services" }) => {
  return (
    <Container>
      <Head>
        <LightHead>{miniTitle} &nbsp;</LightHead>
        {title}
      </Head>
    </Container>
  );
};

export default GlassHeader;

const Container = styled.div`
  position: relative;
  width: 350px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: url("https://ruppells-solutions.s3.eu-central-1.amazonaws.com/images/ruppells-solutions/03-08-2023/icons/service-head-bg.svg")
    25% -10px no-repeat;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 60%;
    height: 80%;
    border-radius: 2px;
    backdrop-filter: blur(32px);
    border: 1px solid;
    border-image: linear-gradient(to right, #f8f8f80f, #2b2b2b10, #2b2b2b10);
    border-image-slice: 1;
  }

  @media all and (max-width: 960px) {
    width: 280px;
    height: 100px;
  }
  @media all and (max-width: 420px) {
    background-image: none;

    &::before {
      content: none;
    }
  }
`;
const Head = styled.h3`
  font-size: 43px;
  font-family: Satoshi-Medium;
  color: #f3f3f3;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 62%;
    height: 2px;
    background-color: #eee;
    border-radius: 1px;
  }

  @media all and (max-width: 960px) {
    font-size: 36px;
  }
`;
const LightHead = styled.span`
  color: #bbb;
  font-size: 38px;
  font-family: Satoshi-Medium;

  @media all and (max-width: 960px) {
    font-size: 32px;
  }
`;
