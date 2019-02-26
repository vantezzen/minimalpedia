/**
 * Homepage/Search page
 */
import React, { Component } from 'react'

import SearchBox from './SearchBox'
import ResultList from './ResultList'

import search from '../../utils/search';

import './home.css'

export default class Home extends Component {
  state = {
    query: '', // Current search query
    language: 'en', // Current language
    results: {}, // Current search results
    totalResults: 10 // Number of results found
  }

  constructor(props) {
    super(props);

    this.handleSearchUpdate = this.handleSearchUpdate.bind(this);
    this.handleLanguageUpdate = this.handleLanguageUpdate.bind(this);
  }

  componentDidMount() {
    // Update title. This will reset any title set by the article pages
    document.title = 'minimalpedia';
  }

  // Handle update of search query
  handleSearchUpdate(query) {
    this.setState({
      query
    });
    search(query, state => {
      this.setState(state)
    }, () => {
      return this.state
    }, this.state.language);
  }


  // Handle update of language
  handleLanguageUpdate(language) {
    this.setState({
      language
    });
  }

 render() {
   return (
     <div>
       <SearchBox 
        expanded={ this.state.query === '' } 
        onChange={ this.handleSearchUpdate } 
        onLanguageChange={ this.handleLanguageUpdate } 
        language={ this.state.language } />
       { this.state.query !== '' && (<ResultList results={ this.state.results } totalResults={this.state.totalResults} language={ this.state.language } />) }
     </div>
   );
 }
}