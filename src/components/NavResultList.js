/**
 * List of search results
 */
import React, { Component } from 'react'
import NavResult from './NavResult'

export default class NavResultList extends Component {
    render() {
        const results = this.props.results;

        // Set message returned if there are no results (yet)
        let message = 'Let me ask Wikipedia for that...'
        if (this.props.totalResults === 0) {
            message = 'I could not find any results';
        }

        return (
            <div className="absolute results mt-10 bg-main w-1/2 md:w-1/3">
                {
                    // Show results if found, otherwise display message
                    Object.keys(results).length > 0 ? Object.keys(results).map(result => (
                        <NavResult key={results[result].title} result={results[result]} setQuery={this.props.setQuery} language={this.props.language} />
                    )) : (
                        <div className="result overflow-hidden h-48 p-4 flex mb-12 no-underline color-inherit">
                            <div className="w-100">
                                <p className="font-light">
                                    {message}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}