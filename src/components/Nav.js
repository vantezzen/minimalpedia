/**
 * Navbar used on article pages
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <nav className="header flex items-center justify-between flex-wrap p-6 w-full">
                <div />
                <Link to="/" className="no-underline">
                    <span className="font-light">minimal</span><span className="font-normal">pedia</span>
                </Link>
                <div />
            </nav>
        )
    }
}