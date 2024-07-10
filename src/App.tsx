import React, { useEffect, useState } from 'react';
import './App.css';
import { AboutMe } from "./layouts/sections/about/AboutMe";
import { Works } from "./layouts/sections/works/Works";
import { Footer } from "./layouts/footer/Footer";

const App: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showFullScreen, setShowFullScreen] = useState(false);
    //
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
        <div className="app-container">
            <div className={`intro-container ${showFullScreen ? 'hidden' : ''}`}>
                <div className={`intro ${isVisible ? 'visible' : 'hidden'}`}>
                    <h1>Hi, I'm Alex Leimberg, a web developer</h1>
                    <button className={`button ${isVisible ? 'visible' : ''}`} onClick={handleClick}>
                        Know More
                    </button>
                </div>
            </div>
            {showFullScreen && (
                <div className={`container-main ${showFullScreen ? 'fullscreen' : ''}`}>
                    {/*<Header />*/}
                    <AboutMe/>
                    <Works/>
                    <Footer/>
                </div>
            )}
        </div>
    );
};

export default App;
