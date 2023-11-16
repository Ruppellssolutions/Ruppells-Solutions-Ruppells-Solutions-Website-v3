import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../includes/landingPage/Header'
import Footer from '../includes/general/Footer'
import { useFormik } from 'formik'
import * as Yup from "yup"
import ruppellsConfig from '../../apis/ruppellsConfig'
import ButtonLoader from '../includes/loaders/ButtonLoader'


const Contact = () => {
    const [isLoading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("required"),
            email: Yup.string().email("Invalid email address").required("required"),
            phone: Yup.string()
                // .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, "Invalid phone number")
                .matches(/^[0-9]{7,15}$/, "Invalid phone number")
                .required("required"),
            massage: Yup.string(),
        }),
        validateOnChange: true,
        onSubmit: () => {
            formik.validateForm().then((data) => {
                sendEnquiryHandler();
            });
        },
    });

    function sendEnquiryHandler() {
        const { message, email, name, phone } = formik.values;
        const params = {
            name,
            phone,
            email,
            message,
        };

        if (formik.isValid) {
            setLoading(true);

            ruppellsConfig
                .post("/enquiries/contact-enquiry/", params)
                .then(({ data }) => {
                    const { statusCode } = data;

                    if (statusCode === 6000) {
                        formik.resetForm();
                    }
                    setLoading(false);
                })
                .catch((error) => {
                    setLoading(false);
                });
        }
    }

    return (
        <>
            <Header theme='DARK' />
            <Wrapper className='wrapper'>
                <Container>
                    <Left>
                        <h3>
                            <span>Explore</span> the realms of Digital <span>Evolution</span>
                        </h3>
                        <p>Our contact information is just a click away. Get in touch with us today and let's start a conversation that could change the game!</p>
                        <div className="response">
                            <img src="/icons/main/clock.svg" alt="clock" />
                            <span>Response within 60 minutes</span>
                        </div>
                    </Left>
                    <Right>
                        <Form
                            onSubmit={e => {
                                e.preventDefault()
                                formik.handleSubmit()
                            }}
                        >
                            <InputContainer>
                                <label htmlFor="name">
                                    <img src="/icons/inputs/name.svg" alt="name" />
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder='Name'
                                    required
                                    name="name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                {formik.touched.name && formik.errors.name && <p className="error">{formik.errors.name}</p>}
                            </InputContainer>
                            <InputContainer>
                                <label htmlFor="phone">
                                    <img src="/icons/inputs/phone.svg" alt="phone" />
                                </label>
                                <input
                                    type="number"
                                    id="phone"
                                    placeholder='Phone'
                                    required
                                    name="phone"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                />
                                {formik.touched.phone && formik.errors.phone && <p className="error">{formik.errors.phone}</p>}
                            </InputContainer>
                            <InputContainer>
                                <label htmlFor="email">
                                    <img src="/icons/inputs/email.svg" alt="email" />
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder='Email'
                                    required
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email && <p className="error">{formik.errors.email}</p>}
                            </InputContainer>
                            <InputContainer>
                                <textarea
                                    name="message"
                                    placeholder='Describe about project'
                                    rows={5}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.message}
                                >
                                </textarea>
                            </InputContainer>
                            <ButtonContainer>
                                <Button type='submit'>
                                    {isLoading ? (
                                        <>
                                            <ButtonLoader />
                                        </>
                                    ) : (
                                        <>
                                            <span>Send</span>
                                            <img src="/icons/main/right-arrow.svg" alt="right arrow" />
                                        </>
                                    )}
                                </Button>
                            </ButtonContainer>
                        </Form>
                    </Right>
                </Container>
            </Wrapper>
            <Footer />
        </>
    )
}

export default Contact

const Wrapper = styled.div`
    max-width: 75%;

    @media all and (max-width: 1080px){
        max-width: 85%;
    }
`

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    /* align-items: center; */
    gap: 20px;
    padding: 220px 0 68px;

    @media all and (max-width: 860px){
        flex-direction: column;
        gap: 46px;
        padding: 120px 0 60px;
    }
`
const Left = styled.div`
    width: calc(50% - 10px);

    @media all and (max-width: 860px){
        width: 100%;
    }

    h3{
        font-size: 56px;

        @media all and (max-width: 1440px){
            font-size: 48px;
        }
        @media all and (max-width: 1280px){
            font-size: 38px;
        }
        @media all and (max-width: 640px){
            font-size: 32px;
        }
        @media all and (max-width: 460px){
            font-size: 28px;
        }
        span{
            font: inherit;
            background: linear-gradient(106deg, #CE4FE3 0%, #36B2EA 101.89%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    p{
        max-width: 85%;
        margin: 34px 0 46px;
        color: #3B3B3B;
        font-size: 16px;

        @media all and (max-width: 1080px){
            font-size: 14px;
        }
        @media all and (max-width: 860px){
            max-width: 100%;
        }
    }
    .response{
        display: flex;
        align-items: center;
        gap: 10px;

        img{
            width: 20px;
        }
        span{
            font-size: 16px;
            color: #3B3B3B;

            @media all and (max-width: 1080px){
                font-size: 14px;
            }
        }
    }
`
const Right = styled.div`
    width: calc(50% - 10px);

    @media all and (max-width: 860px){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
`
const Form = styled.form`
    width: 100%;

    @media all and (max-width: 860px){
        width: 60%;
    }
    @media all and (max-width: 560px){
        width: 100%;
    }
`
const InputContainer = styled.div`
    width: 100%;
    border: 1px solid #a2a2a2;
    display: flex;
    align-items: center;
    border-radius: 12px;
    margin-bottom: 26px;
    position: relative;

    @media all and (max-width: 460px){
        border-radius: 8px;
    }

    label{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;

        img{
            width: 20px;

            @media all and (max-width: 1080px){
                width: 16px;
            }
        }
    }
    input,textarea{
        flex: 1;
        padding: 12px ;
        padding-left: 0;
        color: #575757;
        font-size: 16px;

        @media all and (max-width: 1280px){
            font-size: 15px;
            padding: 8px;
        }
        @media all and (max-width: 1080px){
            font-size: 14px;
        }

        &::placeholder{
            color: #BABABA;
        }
    }
    textarea{
        padding: 12px;
        resize: none;
    }
    p.error{
        color: red;
        font-size: 14px;
        position: absolute;
        right: 0;
        bottom: -20px;
        text-align: right;
    }
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 48px;
`
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: #0C0C0C;
    padding: 14px 28px;
    border-radius: 8px;
    cursor: pointer;
    width: 120px;
    height: 45px;

    @media all and (max-width: 1080px){
        padding: 12px 24px;
    }

    span{
        font-size: 16px;
        color: #fff;

        @media all and (max-width: 1080px){
            font-size: 14px;
        }
    }

    img{
        width: 20px;

        @media all and (max-width: 1080px){
            width: 16px;
        }
    }
`