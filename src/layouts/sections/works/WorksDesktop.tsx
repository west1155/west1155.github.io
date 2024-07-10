import React from 'react';
import styled from "styled-components";
import {WorkType} from "./Works";

type WorksDesktopPropsType = {
    worksContainer: WorkType[]
    onClick?: () => void
};

export const WorkDesktop: React.FC<WorksDesktopPropsType> = (props) => {
    return (
        <Featured>
            <H2>Featured works</H2>
            <WorksContainer>
                {props.worksContainer.map((work: WorkType) => (
                    <WorkItem key={work.id}>
                        {/* Example content inside WorkItem */}
                        <WorkPicture
                            src={work.src_img}
                            alt={work.title}
                        />
                        <Describtion>
                            <DescribtionTitle href={work.link} target="_blank" rel="noopener noreferrer">
                                    {work.title}
                            </DescribtionTitle>
                            <Desc_Feature>{work.feature}</Desc_Feature>
                            <Desc_Text>{work.text}</Desc_Text>
                        </Describtion>
                    </WorkItem>
                ))}
            </WorksContainer>
        </Featured>
    );
};

const Featured = styled.section`
    max-width: 960px;
    padding-top: 40px;
    padding-bottom: 20px;
    background-color: white;
`;

const H2 = styled.h2`
    font-size: 22px;
    line-height: 28px;
    color: #21243d;
    margin-bottom: 20px;
`;

const WorksContainer = styled.div`
    font-family: Heebo, sans-serif;
    line-height: 1;
    font-size: 14px;
    text-align: left;
`;

const WorkItem = styled.div`
    display: flex;
    margin-top: 25px;
    padding-bottom: 15px;
    border-bottom: 1px solid #e0e0e0;
`;

const WorkPicture = styled.img`
    width: 246px;
    height: 180px;
    margin-right: 18px;
    flex-shrink: 0;
    border-radius: 6px;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(2);
    }
    cursor: pointer;
`;

const DescribtionTitle = styled.a`
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    color: #21243d;
    padding-right: 500px; 
    
    &:hover {
        text-decoration: underline;
        color: #4a494c;
        cursor: pointer;
    }
`;

const Desc_Feature = styled.div`
    font-size: 20px;
    line-height: 27px;
    color: #8695a4;
`;

const Desc_Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 18px;
    line-height: 23px;
    color: #21243d;
    margin-top: 15px;
`;

const Describtion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    border: 1px solid #ccc;
`;