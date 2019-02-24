import React from 'react'
import { Moon, ArrowUp } from 'react-feather'
import useDarkMode from 'use-dark-mode';

const Footer = () => {
    const darkMode = useDarkMode(false);

    const scrollToTop = () => {
        document.querySelector('nav').scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <div className="footer fixed w-screen flex items-center justify-between flex-wrap p-6">
            
            <div>
                {/* Darkmode toggle button */}
                <button onClick={scrollToTop} className="outline-none pb-5">
                    <ArrowUp className="whiteInDarkMode" />
                </button><br />
                {/* Darkmode toggle button */}
                <button onClick={darkMode.toggle} className="outline-none">
                    <Moon className="whiteInDarkMode" />
                </button>
            </div>
            <div />
        </div>
    )
}
export default Footer;