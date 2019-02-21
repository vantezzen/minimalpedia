import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        query: '' // Current search query
    }

    constructor(props) {
        super(props);
  
        this.updateQuery = this.updateQuery.bind(this);
        this.searchbox = React.createRef();
    }

    // Update search query
    updateQuery(evt) {
        this.setState({
            query: evt.target.value
        });
        this.props.onChange(evt.target.value);
    }

    // Focus searchbox when component mounts
    componentDidMount() {
        this.searchbox.current.focus();
    }

    render() {
        return (
            <div>
                <div className={ "head px-16 " + (this.props.expanded ? 'pt-32' : 'pt-10') }>
                    {/* Heading */}
                    <div className="heading text-center text-2xl">
                        <span className="font-light">minimal</span><span className="font-normal">pedia</span>
                    </div>

                    {/* Searchbox */}
                    <div className={ "search " + (this.props.expanded ? 'pt-32' : '') }>
                        <input 
                            type="text" 
                            className="search-box h-48 w-100 text-5xl font-bold bg-transparent" 
                            placeholder="Search..." 
                            value={ this.state.query } 
                            onChange={ this.updateQuery } 
                            ref={ this.searchbox }
                            autoFocus />
                    </div>
                </div>
            </div>
        )
    }
}