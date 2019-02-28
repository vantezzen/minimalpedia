/**
 * Homepage/Search page
 */
import React, { Component } from 'react'

import SearchBox from './SearchBox'
import ResultList from './ResultList'

import search from '../../utils/search';
import languages from './languages';

import './home.css'

export default class Home extends Component {
  state = {
    query: '', // Current search query
    languages: [], // List of availible languages
    language: 'en', // Current language
    results: {}, // Current search results
    totalResults: 10 // Number of results found
  }

  constructor(props) {
    super(props);

    // Set availible languages
    this.state.languages = languages;

    // Set language to navigator language
    let browserLanguage = navigator.language.substr(0, 2);
    let language = this.state.languages.find(language => language.value === browserLanguage)
    if (language) {
      this.state.language = browserLanguage;
    }

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
        language={ this.state.language }
        availibleLanguages={ this.state.languages } />
       { this.state.query !== '' && (<ResultList results={ this.state.results } totalResults={this.state.totalResults} language={ this.state.language } />) }
     </div>
   );
 }
}