import React from 'react';
import {WorkDesktop} from "./WorksDesktop";
import {EmailMe} from "../about/EmailMe";

import futwork1 from '../../../assets/work1.webp'
import futwork2 from '../../../assets/work2.webp'
import futwork3 from '../../../assets/work3.png'


export type WorkType = {
    id: number
    src_img: string
    alt: string
    title: string
    feature: string
    time?: string
    text: string
}


const worksContainer = [
    {
        id: 1,
        src_img: futwork1,
        alt: '',
        title: 'TodoList',
        feature: 'React RTK MaterialUI',
        text: 'TodoList written in React with TypeScript. The app allows you to add, delete, and mark tasks as completed. The app also has a filter options. Uses API for data storage.',
    },
    {
        id: 2,
        src_img: futwork2,
        alt: '',
        title: 'Designing Dashboards',
        feature: 'Dashboard',
        time: '2020',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
        id: 3,
        src_img: futwork3,
        alt: '',
        title: 'Designing Dashboards',
        feature: 'Dashboard',
        time: '2020',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
]




export const Works = () => {
    return (
        <>
            <WorkDesktop worksContainer={worksContainer}/>
        </>
    );
};
