import React from 'react';
import styled from "styled-components";
import {HeaderDesktop} from "./HeaderDesktop";



export const Header = () => {
    return (
        <Section>
            <HeaderDesktop/>
        </Section>
    );
};


const Section = styled.section `
  position: relative;
    max-width: 960px;
    width: 100%;
    
    margin: 0 auto;
    padding-bottom: 0;
    margin-bottom: 0;
`

