import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        query: '' // Current search query
    }

    constructor(props) {
        super(props);
  
        this.updateQuery = this.updateQuery.bind(this);
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
        this.searchbox = React.createRef();
        this.language = React.createRef();
    }

    // Update search query
    updateQuery(evt) {
        this.setState({
            query: evt.target.value
        });
        this.props.onChange(evt.target.value);
    }

    // Handle language change update
    handleLanguageChange(evt) {
        this.props.onLanguageChange(evt.target.value);
        this.language.current.blur();
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

                    {/* Searchbox and language selector */}
                    <div className={ "search " + (this.props.expanded ? 'pt-32' : 'pt-4') }>
                        <select 
                            className={"w-full outline-none bg-transparent whiteInDarkMode language-select " + (this.props.expanded ? '' : 'hidden') }
                            onChange={this.handleLanguageChange}
                            ref={ this.language }
                            value={ this.props.language }>

                            {
                                this.props.availibleLanguages.map(lang => (
                                    <option key={ lang.value } value={ lang.value }>{ lang.name }</option>
                                ))
                            }
                        </select>
                        <input 
                            type="text" 
                            className="search-box h-24 w-full outline-none text-5xl font-bold bg-transparent" 
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