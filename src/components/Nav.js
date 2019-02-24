/**
 * Navbar used on article pages
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavResultList from './NavResultList';
import search from '../utils/search'

export default class Nav extends Component {
    state = {
        query: '', // Current search query
        results: {}, // Current search results
        totalResults: 10 // Number of results found
    }

    constructor(props) {
        super(props);

        this.handleSearchUpdate = this.handleSearchUpdate.bind(this);
        this.setQuery = this.setQuery.bind(this);
    }

    // Handle update of search query input
    handleSearchUpdate(evt) {
        let query = evt.target.value;

        this.setQuery(query);
    }

    // Handle update of search query
    setQuery(query) {
        this.setState({
            query
        });
        search(query, state => {
            this.setState(state)
        }, () => {
            return this.state
        });
    }

    render() {
        return (
            <nav className="header flex items-center justify-between flex-wrap p-6 w-full">
                <div className="md:w-1/3" />
                {/* Center: "minimalpedia" as link to home */}
                <Link to="/" className="w-1/4 md:w-1/3 no-underline flex justify-left md:justify-center">
                    <span className="font-light">minimal</span><span className="font-normal">pedia</span>
                </Link>
                {/* Right: Searchbox */}
                <div className="w-1/2 md:w-1/3">
                    <input type="text" className="w-full md:w-3/4 outline-none bg-transparent float-right" placeholder="Search..." onChange={ this.handleSearchUpdate } value={this.state.query} />
                    { this.state.query !== '' && (<NavResultList results={ this.state.results } totalResults={this.state.totalResults} setQuery={this.setQuery} />) }
                </div>
            </nav>
        )
    }
}