import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from "./layouts/header/Header";
import { AboutMe } from "./layouts/sections/about/AboutMe";
import { Works } from "./layouts/sections/works/Works";
import { Footer } from "./layouts/footer/Footer";

const App: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showFullScreen, setShowFullScreen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        setIsVisible(false);
        setTimeout(() => setShowFullScreen(true), 500); // Wait for the fade-out transition to complete
    }

    return (
        <div className={`container ${showFullScreen ? 'full-screen' : ''}`}>
            {!showFullScreen && (
                <div className={`intro ${isVisible ? 'visible' : 'hidden'}`}>
                    <h1>Hi, I'm Alex Leimberg, a web developer</h1>
                    <button className={`button ${isVisible ? 'visible' : ''}`} onClick={handleClick}>
                        Know More
                    </button>
                </div>
            )}
            {showFullScreen && (
                <div className="container-main">
                    <Header />
                    <AboutMe />
                    <Works />
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default App;
