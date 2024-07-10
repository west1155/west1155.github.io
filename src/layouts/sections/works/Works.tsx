import React from 'react';
import {WorkDesktop} from "./WorksDesktop";

import futwork1 from '../../../assets/work1.webp'
import futwork2 from '../../../assets/work2.webp'
import futwork3 from '../../../assets/work3.webp'


export type WorkType = {
    id: number
    src_img: string
    alt: string
    title: string
    feature: string
    time?: string
    text: string
    link?: string
}


const worksContainer = [
    {
        id: 1,
        src_img: futwork1,
        alt: '',
        title: 'TodoList',
        feature: 'React RTK MaterialUI',
        text: 'TodoList written in React with TypeScript. The app allows you to add, delete, and mark tasks as completed. The app also has a filter options. Uses API for data storage.',
        link: 'https://west1155.github.io/todolist/'

    },
    {
        id: 2,
        src_img: futwork2,
        alt: '',
        title: 'Weather App',
        feature: 'REST API Axios React Redux Toolkit MaterialUI',
        text: 'Weather App written in React with TypeScript. The app allows you to see the weather in your city. The app uses Redux for state management. Uses API for data storage. Few features still in progress...',
        link: 'https://west1155.github.io/weather_app/'
    },
    {
        id: 3,
        src_img: futwork3,
        alt: '',
        title: 'Social network',
        feature: 'React Redux API LocalStorage RTK MaterialUI still in progress...',
        text: 'A simple social network with the ability to see the list of Users, crete new users. The app uses Redux for state management. Uses API for data storage and local storage content.',
    },
]




export const Works = () => {
    return (
        <>
            <WorkDesktop worksContainer={worksContainer}/>
        </>
    );
};
