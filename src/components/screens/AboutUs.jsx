import React from "react";
import { styled } from "styled-components";

import Poster from "../includes/about-us/Poster";
import Subheading from "../includes/general/Subheading";
import GlassHeader from "../includes/general/GlassHeader";
import GeneralFooter from "../includes/about-us/GeneralFooter";


const AboutUs = () => {
    const cheifTeamImgPaths = [
        {
            name: "Jerrin Jabbar A",
            position: "Chief Operating Officer",
            imgUrl: "/images/cheif/jerrin.png",
        },
        // {
        //     name: "Muhammad Sulthan A",
        //     position: "Chief Technology Officer",
        //     imgUrl: "/images/cheif/sulthan.png",
        // },
        {
            name: "Salma Saifudeen",
            position: "Chief People Officer",
            imgUrl: "/images/cheif/salma.png",
        },
    ];
    const teamImgPath = [
        {
            name: "Swathi T S",
            position: "Senior Software Engineer",
            imgUrl: "/images/team/swathi.png",
        },
        {
            name: "Sreehari SM",
            position: "Senior Software Engineer",
            imgUrl: "/images/team/Sreehari.png",
        },
        {
            name: "Aromal Sajeevan",
            position: "UI/UX design Lead",
            imgUrl: "/images/team/Aromal.png",
        },
        {
            name: "Anjana S Nair",
            position: "Project Manager",
            imgUrl: "/images/team/Anjana.png",
        },
        {
            name: "Femina P C",
            position: "Project Manager",
            imgUrl: "/images/team/Femina.png",
        },
        {
            name: "Vijayakumar B",
            position: "UI/UX Designer",
            imgUrl: "/images/team/Vijay Kumar.png",
        },
        {
            name: "Abhilash B",
            position: "Full Stack Developer",
            imgUrl: "/images/team/Abilash.png",
        },
        {
            name: "Mohammed Ashiq Ali k",
            position: "Full Stack Developer",
            imgUrl: "/images/team/Ashique.png",
        },
        {
            name: "Libin V",
            position: "Mobile App Developer",
            imgUrl: "/images/team/Libin.png",
        },
        {
            name: "Safwan P",
            position: "Full Stack Developer",
            imgUrl: "/images/team/Safwan.png",
        },
        {
            name: "Aiswarya Haridas",
            position: "UI/UX Designer",
            imgUrl: "/images/team/Aiswarya.png",
        },
    ];
    return (
        <Wrapper>
            <Content className="wrapper">
                <AboutUsSection>
                    <div
                        style={{
                            margin: "0 auto",
                        }}
                    >
                        <GlassHeader miniTitle="About" title="Us" />
                    </div>
                    <SectionContents>
                        <Subheading
                            firstPart={"About"}
                            secondPart={"Ruppells Solutions"}
                            underLineWd={"190px"}
                        />

                        <p>
                            Ready to Elevate Your Business to New Heights? Choose Ruppells
                            Solutions, Your Digital Partner of Excellence. Our dedicated team of
                            experts specializes in delivering top-notch IT services and innovative
                            digital marketing solutions. With our strategic approach and
                            cutting-edge expertise, we are committed to unlocking the true potential
                            of your business. From creating stunning websites and Branding to
                            managing social media and driving online advertising, we possess the
                            tools and knowledge to propel your brand forward. Say goodbye to
                            mediocrity and soar to success with Ruppells Solutions. Take the first
                            step towards excellence today and witness the transformation of your
                            business.
                        </p>
                    </SectionContents>
                </AboutUsSection>
                <ManagingDirectors>
                    <div
                        style={{
                            maxWidth: "500px",
                            margin: "0 auto 147px",
                            marginLeft: "60px",
                            marginBottom: `${window.innerWidth < 480 && "80px"}`,
                        }}
                    >
                        <Subheading
                            firstPart={"Managing "}
                            secondPart={"Directors"}
                            underLineWd={"190px"}
                        />
                    </div>
                    <div className="container">
                        <div className="poster-container">
                            <Poster
                                imgPath={"/images/directors/sidiq saifudeen.png"}
                                type="lg"
                                name={"siddiq saifudeen"}
                                position={"managing director"}
                            />
                        </div>
                        <div className="poster-container">
                            <Poster
                                imgPath={"/images/directors/shajahan yahiya.png"}
                                type="lg"
                                name={"shajahan yahiya"}
                                position={"Managing director"}
                            />
                        </div>
                    </div>
                </ManagingDirectors>
                <OurTeam>
                    <div className="heading">
                        <div className="icon">
                            <img src="/images/ourteam icon.png" alt="our team" />
                        </div>
                        <Subheading firstPart={"Our "} secondPart={"Team"} underLineWd={"100px"} />
                        <div className="line"></div>
                    </div>
                    <div className="top">
                        {cheifTeamImgPaths.map((item) => (
                            <div className="poster-container" key={item.imgUrl}>
                                <Poster
                                    imgPath={item.imgUrl}
                                    name={item.name}
                                    position={item.position}
                                    type="md"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="bottom">
                        {teamImgPath.map((item) => (
                            <div className="poster-container" key={item.imgUrl}>
                                <Poster
                                    type="sm"
                                    imgPath={item.imgUrl}
                                    name={item.name}
                                    position={item.position}
                                />
                            </div>
                        ))}
                        <div
                            className="poster-container"
                            style={{
                                marginTop: "20px",
                                marginBottom: "0px",
                            }}
                        >
                            <img src="/images/team/20+employees.png" alt="20+" />
                        </div>
                    </div>
                </OurTeam>
                <GeneralFooter />
            </Content>
        </Wrapper>
    );
};

export default AboutUs;

const Wrapper = styled.section`
    background: #0b0c0d;
`;
const Content = styled.div`
    padding-top: 90px;
`;
const AboutUsSection = styled.div`
    display: flex;
    gap: 125px;
    padding: 80px;
    flex-direction: column;
    background: url("/images/Ellipse 4928.png") no-repeat;
    background-position: bottom left;
    background-size: cover;
    border: 1px solid rgba(255, 255, 255, 0.19);
    @media all and (max-width: 980px) {
        padding: 60px;
    }
    @media all and (max-width: 760px) {
        gap: 100px;
    }
    @media all and (max-width: 480px) {
        gap: 50px;
        font-size: 18px;
        padding: 33px;
    }
    @media all and (max-width: 390px) {
        padding: 15px;
    }
`;

const SectionContents = styled.div`
    p {
        margin-top: 40px;
        color: #9e9e9e;
        font-size: 22px;
        @media all and (max-width: 480px) {
            font-size: 18px;
        }
    }
`;

const ManagingDirectors = styled.div`
    padding: 90px 0 220px;
    position: relative;
    @media all and (max-width: 980px) {
        padding-bottom: 180px;
    }
    @media all and (max-width: 480px) {
        padding-bottom: 120px;
    }
    .bg {
        position: absolute;
        top: 60px;
        left: 0;
        img {
            display: block;
            width: 100%;
        }
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        @media all and (max-width: 980px) {
            justify-content: center;
            gap: 195px;
        }
        @media all and (max-width: 390px) {
            gap: 130px;
        }
        div.poster-container {
            width: 607px;
        }
    }
`;

const OurTeam = styled.div`
    padding: 80px 0 235px;

    @media all and (max-width: 760px) {
        padding-bottom: 100px;
    }

    div.heading {
        margin-bottom: 80px;
        display: flex;
        align-items: center;
        @media all and (max-width: 480px) {
            margin-bottom: 40px;
            justify-content: center;
        }
        div.icon {
            width: 130px;
            height: 130px;
            margin-right: 61px;
            @media all and (max-width: 480px) {
                display: none;
            }
        }
        div.line {
            border: 1px solid #3b3a40;
            width: 700px;
            margin-left: 30px;
            @media all and (max-width: 980px) {
                display: none;
            }
        }
    }
    div.top {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 100px;
        /* justify-content: space-between; */
        div.poster-container {
            width: 385px;
            /* width: 40%; */
            @media all and (max-width: 480px) {
                width: 200px;
            }
        }
        @media all and (max-width: 980px) {
            justify-content: center;
            gap: 40px;
        }
    }
    div.bottom {
        display: flex;
        padding: 60px;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        position: relative;
        border: 1px solid rgba(255, 255, 255, 0.19);
        margin-top: 190px;
        @media all and (max-width: 760px) {
            justify-content: center;
        }

        div.poster-container {
            width: 330px;
            margin-bottom: 100px;
            &:nth-child(10),
            :nth-child(11),
            :nth-child(12) {
                margin-bottom: 100px;
            }
            @media all and (max-width: 760px) {
                &:nth-child(10),
                :nth-child(11) {
                    margin-bottom: 100px;
                }
            }
        }
    }
`;
