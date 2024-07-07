import React from 'react';
import {PostDesktop} from "./PostsDesktop";
import {PostMobile} from "./PostsMobile";
import PortfolioList from "./PortfolioList";
import portfolioList from "./PortfolioList";


export type PortfolioType = {
    name: string;
    url: string;
}

export type PortfolioPropsType = {
    portfolios: PortfolioType[];
}

export const Posts = () => {
    const portfolios = [
        { name: 'John Doe', url: 'https://johndoe.com' },
        { name: 'Jane Smith', url: 'https://janesmith.com' },
        { name: 'Mike Johnson', url: 'https://mikejohnson.com' },
        { name: 'Emily Davis', url: 'https://emilydavis.com' }
    ];
    return (
        <>
            <PortfolioList portfolios={portfolios}/>
        </>

    );
};
