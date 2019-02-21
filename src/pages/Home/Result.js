/**
 * Single search result
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Result extends Component {
    render() {
        const result = this.props.result;

        return (
            <div key={result.title}>
                <Link to={"/wiki/" + result.title} className="result overflow-hidden h-48 p-4 flex mb-12 no-underline color-inherit">
                        <div className="result-img-container">
                            <img className="result-img h-32 pr-12" src={result.image} alt="" />
                        </div>
                        <div className="result-text-container">
                            <h2>{result.title}</h2>
                            <p className="text-grey text-xs leading-loose">{result.text}</p>
                        </div>
                </Link>
            </div>
        )
    }
}