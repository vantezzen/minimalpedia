/**
 * Single search result
 */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class NavResult extends Component {
    constructor(props) {
        super(props);

        this.openLink = this.openLink.bind(this)
    }

    openLink() {
        this.props.history.push('/wiki/' + encodeURIComponent(this.props.result.title) + '/' + this.props.language);
        this.props.setQuery('');
    }

    render() {
        const result = this.props.result;

        return (
            <div key={result.title}>
                <div className="result overflow-hidden h-48 p-4 flex mb-12 no-underline color-inherit cursor-pointer" onClick={this.openLink}>
                        <div className="result-img-container">
                            <img className="result-img h-32 pr-12" src={result.image} alt="" />
                        </div>
                        <div className="result-text-container">
                            <h4>{result.title}</h4>
                            <p className="text-grey text-xs leading-loose">{result.text}</p>
                        </div>
                </div>
            </div>
        )
    }
}

export default withRouter(NavResult);