import React from 'react';
import styled from "styled-components";
import {GlobalSvgSelector} from "../../components/GlobalSvgSelector";

export const Footer = () => {

    const skills_svg = ['html_logo', 'css_logo', 'js_logo', 'react_logo', 'java_logo', 'css_logo', 'git_logo',
        'nextjs_logo', 'storybook_logo', 'sass_logo', 'ts_logo'];
    return (
        <StyledFooter>
            <Container>
                {skills_svg.map((svg, index) => (
                    <GlobalSvgSelector key={index} svg={svg} />
                ))}
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

