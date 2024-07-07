import React from 'react';
import styled from "styled-components";
import {GlobalSvgSelector} from "../../components/GlobalSvgSelector";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <GlobalSvgSelector id={'facebook_logo'}/>
                <GlobalSvgSelector id={'instagram_logo'}/>
                <GlobalSvgSelector id={'twitter_logo'}/>
                <GlobalSvgSelector id={'linkedIn_logo'}/>
                <GlobalSvgSelector id={'css_logo'}/>
            </Container>
            <Copyright>
                Only Copyleft {new Date().getFullYear()} All rights reserved
            </Copyright>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer `
  padding: 130px 0 50px;
  text-align: center;
`


const Container = styled.div `
  max-width: 960px;
  margin: 0 auto;
  & svg {
    margin-right: 35px;
  }
`
const Copyright = styled.div `
  margin-top: 25px;
  padding-right: 35px;
  font-size: 14px;
  line-height: 21px;
  color: #21243d;
`

