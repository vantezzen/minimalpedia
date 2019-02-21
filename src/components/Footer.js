import React from 'react'
import { Moon } from 'react-feather'
import useDarkMode from 'use-dark-mode';

const Footer = () => {
    const darkMode = useDarkMode(false);

    return (
        <div className="footer fixed w-screen flex items-center justify-between flex-wrap p-6">
            {/* Darkmode toggle button */}
            <button onClick={darkMode.toggle}>
                <Moon className="whiteInDarkMode" />
            </button>
            <div />
        </div>
    )
}
export default Footer;