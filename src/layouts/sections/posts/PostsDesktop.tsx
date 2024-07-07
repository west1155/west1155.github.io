import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const PostDesktop = () => {
    return (
        <Section>
            <Container>
                <Posts_Top>
                    <Featured_posts>Recent posts</Featured_posts>
                    <VIEW_ALL href={''}>View all</VIEW_ALL>
                </Posts_Top>
                <FlexWrapper>
                    <ARTICLE>
                        <h2>Making a design system from scratch</h2>
                        <ul>
                            <LI1>12 Feb 2020</LI1>
                            <LI2>Design, Pattern</LI2>
                        </ul>

                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>

                    </ARTICLE>
                    <ARTICLE>
                        <h2>Creating pixel perfect icons in Figma</h2>
                        <ul>
                            <LI1>12 Feb 2020</LI1>
                            <LI2>Design, Pattern</LI2>
                        </ul>

                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>

                    </ARTICLE>
                </FlexWrapper>





            </Container>
        </Section>


    );
};

const Posts_Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const POST_ITEMS = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ARTICLE = styled.article`
  flex: 0 1 48%;
  padding: 20px;
  background-color: #fff;
  margin-right: 10px;

  > h2 {
    font-weight: 700;
    font-size: 26px;
    line-height: 38px;
    color: #21243d;
  }

  > ul {
    font-size: 18px;
    line-height: 26px;
    display: flex;
    margin-top: 20px;
    list-style: none;

  }

  > p {
    font-size: 18px;
    line-height: 24px;
    color: #21243d;
    margin-top: 20px;
  }
`

const Featured_posts = styled.div`
  font-size: 22px;
  line-height: 30px;
  color: #21243d;
`
const VIEW_ALL = styled.a`
  font-size: 16px;
  line-height: 23px;
  color: #00a8cc;
  transition: all 0.3s ease 0s;

  &:hover {
    color: #21243d;
  }
`

const LI1 = styled.li `
  font-size: 18px;
  line-height: 26px;
  color: #21243d;
  padding-right: 25px;
  border-right: 1px solid #000;
`
const LI2 = styled.li `
  font-size: 18px;
  line-height: 26px;
  color: #21243d;
  border: 0;
  padding-left: 25px;
  padding-right: 0;
`

const Section = styled.section`
  min-width: 100%;
  background: #EDF7FA;
  padding: 20px 0 30px;
  @media (max-width: 1400px) {
    min-width: 1400px;
  }
  @media (max-width: 1600px) {
    min-width: 1540px;
  }
`

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`
