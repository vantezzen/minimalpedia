/**
 * List of search results
 */
import React, { Component } from 'react'
import Result from './Result'

export default class ResultList extends Component {
    render() {
        const results = this.props.results;

        // Set message returned if there are no results (yet)
        let message = 'Let me ask Wikipedia for that...'
        if (this.props.totalResults === 0) {
            message = 'I could not find any results';
        }

        return (
            <div className="results px-16 mt-3 display-none" id="results">
                {
                    // Show results if found, otherwise display message
                    Object.keys(results).length > 0 ? Object.keys(results).map(result => (
                        <Result result={results[result]} />
                    )) : (
                        <div className="result overflow-hidden h-48 p-4 flex mb-12 no-underline color-inherit">
                            <div className="w-100">
                                <h2 className="font-light">
                                    {message}
                                </h2>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}