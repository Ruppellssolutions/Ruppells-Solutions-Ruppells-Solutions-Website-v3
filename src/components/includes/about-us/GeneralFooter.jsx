import React from "react";
import styled from "styled-components";

const GeneralFooter = () => {
    return (
        <Container>
            <div className="top">
                <span className="icon">
                    <img
                        src="/images/ruppellssolutions.png"
                        alt="ruppellssolutions"
                    />
                </span>
                <span className="powered">Powered By</span>
                <span className="icon">
                    <img src="/images/ruppellsgroup.png" alt="ruppellsgroup" />
                </span>
            </div>
            <div className="middle">
                <div className="item">
                    <p>
                        Ruppells Group, Manorama Junction, Panampally Nagar,
                        Kochi, Kerala, India Pin: 682016
                    </p>
                </div>
                <div className="item">
                    <h4>Contact</h4>
                    <ul>
                        <li>+91 884 864 8147</li>
                        <li>+91 884 866 1943</li>
                        <li>info@ruppellssolutions.com</li>
                    </ul>
                </div>
                <div className="item">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>about</li>
                        <li>Privacy & Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className="item">
                    <h4>Services</h4>
                    <ul>
                        <li>Web & App Development</li>
                        <li>Digital Marketing</li>
                        <li>Brand Building</li>
                    </ul>
                </div>
                <div className="item">
                    <h4>Follow us</h4>
                    <div className="social">
                        <span className="icon">
                            <img src="/images/linkedin.png" alt="linkedin" />
                        </span>
                        <span className="icon">
                            <img src="/images/instagram.png" alt="instagram" />
                        </span>
                        <span className="icon">
                            <img src="/images/facebook.png" alt="facebook" />
                        </span>
                        <span className="icon">
                            <img src="/images/youtube.png" alt="youtube" />
                        </span>
                        <span className="icon">
                            <img src="/images/threds.png" alt="threds" />
                        </span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <p>© Copyright 2023. All Rights Reserved @ruppells solutions</p>
            </div>
        </Container>
    );
};

export default GeneralFooter;

const Container = styled.div`
    padding: 75px 0 0;
    border-top: 0.5px solid #3e3e3e;

    div.top {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        margin-bottom: 80px;
        span.icon {
            width: 145px;
            img {
                display: block;
                width: 100%;
            }
        }
    }
    div.middle {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 48px;
        div.item {
            width: 15%;
            @media all and (max-width: 980px) {
                width: 40%;
            }
            &:first-child {
                width: 28%;
                @media all and (max-width: 980px) {
                    width: 30%;
                }
                @media all and (max-width: 480px) {
                    width: 100%;
                    margin-bottom: 20px;
                }
            }
            p {
                font-size: 20px;
                @media all and (max-width: 980px) {
                    font-size: 18px;
                }
            }
            h4 {
                color: #f3f3f3;
                font-size: 20px;
                font-weight: 500;
                margin-bottom: 20px;
                font-family: Satoshi-Bold;
            }
            li {
                color: #949494;
                margin-bottom: 16px;
            }
            div.social {
                display: flex;
                gap: 16px;
                span.icon {
                    width: 24px;
                    height: 24px;
                }
            }
        }
    }
    div.bottom {
        padding: 48px 0;
        border-top: 0.5px solid #3e3e3e;
        p {
            text-align: center;
            @media all and (max-width: 480px) {
                font-size: 16px;
            }
        }
    }
`;
