import React from 'react';
import styled from "styled-components";

export const PostMobile = () => {
    return (
        <Section>
            <Container>
                <Posts_Top>
                    <Featured_posts>Recent posts</Featured_posts>
                    <VIEW_ALL href={''}>View all</VIEW_ALL>
                </Posts_Top>


                <POST_ITEMS>
                    <ARTICLE>
                        <h2>Making a design system from scratch</h2>
                        <ul>
                            <li>
                                <time>12 Feb 2020</time>
                            </li>
                            <li>
                                Design, Pattern
                            </li>
                        </ul>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat
                            duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </ARTICLE>
                    <ARTICLE>
                        <h2>Making a design system from scratch</h2>
                        <span>12 Feb 2020</span>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat
                            duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </ARTICLE>
                </POST_ITEMS>


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

  + h2 {
    font-weight: 700;
    font-size: 26px;
    line-height: 38px;
    color: #21243d;
  }
  
  + ul {
    font-size: 18px;
    line-height: 26px;
    color: #21243d;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 20px;
    list-style: none;
    +li {
      padding-right: 25px;
      border-right: 1px solid #000;
    }
  }

  + p {
    font-size: 18px;
    line-height: 26px;
    color: #21243d;
    display: flex;
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
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;

  &:hover {
    color: #21243d;
  }
`


const Section = styled.section`
  background: #EDF7FA;
  padding: 20px 0 30px;
`

const Container = styled.div`
  max-width: 860px;
  margin: 0 auto;
`
