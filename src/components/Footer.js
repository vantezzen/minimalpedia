import React from 'react'
import { withRouter } from 'react-router-dom'
import { Moon, ArrowUp } from 'react-feather'
import useDarkMode from 'use-dark-mode';

const Footer = (router) => {
    const darkMode = useDarkMode(false);

    const scrollToTop = () => {
        // Element to scroll to, .head by default
        let scrollToElement = document.querySelector('.head');

        if (/\/wiki\/.*/.test(router.location.pathname)) {
            scrollToElement = document.querySelector('nav')
        }

        // Scroll to element smoothly
        scrollToElement.scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <div className="footer fixed w-screen flex items-center justify-between flex-wrap p-6">
            
            <div>
                {/* Scroll to top button */}
                <button onClick={scrollToTop} className="outline-none pb-5">
                    <ArrowUp className="whiteInDarkMode" />
                </button><br />
                {/* Darkmode toggle button */}
                <button onClick={darkMode.toggle} className="outline-none">
                    <Moon className="whiteInDarkMode" />
                </button>
            </div>

            {/* Empty <div> to get the footer icons to force footer icons to the left */}
            <div />
        </div>
    )
}
export default withRouter(Footer);