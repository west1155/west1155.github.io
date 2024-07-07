import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../components/Themes';
import { EmailMe } from '../sections/about/EmailMe';

export const HeaderDesktop = () => {
    const [isEmailMeVisible, setIsEmailMeVisible] = useState(false);
    const [contactButtonPosition, setContactButtonPosition] = useState({ x: 0, y: 0 });
    /*const handleEmailMeOpen = (e: any) => {
        const rect = e.target.getBoundingClientRect();
        setContactButtonPosition({ x: rect.right, y: rect.bottom });
        setIsEmailMeVisible(true);
    }*/

    return (
        <StyledHeader>
           {/* <Nav>
                <NavMenu>
                    <NavLink href="#works">Works</NavLink>
                    <NavLink href="#">Contact</NavLink>
                </NavMenu>
            </Nav>
            {isEmailMeVisible && <EmailMe initialPosition={contactButtonPosition}/>}*/}
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: left;
    background-color: ${theme.colors.background_colour};
    width: 100%;

    @media ${theme.media.mobile} {
        display: none;
    }
`;

const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    transition: all 0.3s;
    box-sizing: border-box;
    width: 100%;
`;

const NavMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    transition: all 0.3s;
    box-sizing: border-box;
`;

const NavLink = styled.a`
    color: black;
    height: 73px;
    width: 100px;  // Adjust the width to fit the content better
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    line-height: 29px;
    position: relative;
    letter-spacing: 0;
    text-align: right;
    transition: all 0.3s ease 0s;

    &:hover {
        text-decoration: underline;
        color: #ff6464;
    }

    &:visited {
        text-decoration: none;
    }

    &:active {
        color: #ff6464;
    }
`;
