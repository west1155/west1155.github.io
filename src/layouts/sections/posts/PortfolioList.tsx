
import React from 'react';
import {PortfolioPropsType} from "./Posts";

const PortfolioList:React.FC<PortfolioPropsType> = ({ portfolios }) => {
    return (
        <div>
            <h1>Portfolio Websites</h1>
            <ul>
                {portfolios.map((portfolio, index) => (
                    <li key={index}>
                        <a href={portfolio.url} target="_blank" rel="noopener noreferrer">
                            {portfolio.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PortfolioList;
