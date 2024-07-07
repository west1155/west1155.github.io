import React from 'react';
import styled from "styled-components";
import {theme} from "../../../components/Themes"
import Typewriter from 'typewriter-effect';
import me_ai from '../../../assets/me_ai.webp'

export const AboutMeDesktop = () => {

    return (
        <StyledMain>

            <Container>
                <Promo_Row>
                    <Promo_Column>

                        <H1 onClick={() => alert('contact me by email: westsupport@gmail.com')}>Hire me as
                            <Typewriter
                                options={{
                                    strings: ['Creative person', 'Web developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></H1>

                        <StyleText>
                            Doncaster, UK-based junior web developer. I create digital products that are both functional
                            and beautiful.
                        </StyleText>


                        <Button>Download Resume</Button>
                    </Promo_Column>
                    <Promo_Column>
                        <Photo/>
                    </Promo_Column>
                </Promo_Row>
            </Container>


        </StyledMain>
    );
};


const H1 = styled.h1`
    font-family: Heebo, sans-serif;
    font-size: 44px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0;
    text-align: left;
    padding-bottom: 40px;
    cursor: pointer;

`

const Button = styled.button`
    margin-top: 38px;
    width: 210px;
    height: 45px;
    background: #438826;
    border-radius: 2px;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    color: #ffffff;
    -webkit-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;

    &:hover {
        box-shadow: 3px 0 10px 2px rgba(0, 0, 0, 0.5);
        cursor: pointer;
    }
`

const Photo = styled.div`
    width: 243px;
    height: 243px;
    border-radius: 50%;
    background: url(${me_ai}) center/cover no-repeat;

`

const Promo_Row = styled.div`
    display: flex;

    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
`

const Promo_Column = styled.div`
`

const Container = styled.div`
    background-color: #ffffff;
    margin: 0 auto;
`

const StyleText = styled.p`
    font-family: Heebo, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0;
    text-align: left;
    margin-bottom: 40px;
`
const StyledMain = styled.section`

    @media ${theme.media.mobile} {
        display: none;
    }
`

