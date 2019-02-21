/**
 * Homepage/Search page
 */
import React, { Component } from 'react'

import SearchBox from './SearchBox'
import ResultList from './ResultList'
import wiki from 'wikijs'

import './home.css'

export default class Home extends Component {
  state = {
    query: '', // Current search query
    results: {}, // Current search results
    totalResults: 10 // Number of results found
  }

  constructor(props) {
    super(props);

    this.handleSearchUpdate = this.handleSearchUpdate.bind(this);
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
    this.doQuery(query)
  }

  // Query Wikipedia for search query
  async doQuery(query) {
    // Reset number of results
    this.setState({
      totalResults: 10
    })

    // Get query results
    let results = (await wiki({ apiUrl: 'https://en.wikipedia.org/w/api.php' }).search(query)).results;

    // Show general information
    if (query === this.state.query) {
      this.setState({
        results: {},
        totalResults: results.length
      })

      // Add first 10 results to results list
      for (let key = 0; key < 10 && key < results.length; key++) {
        let res = this.state.results;
        res[key] = {
          title: results[key],
          image: '',
          text: 'Loading details...'
        };

        this.setState({
          results: res
        })
      }
    } else {
      // We are not the current search query anymore: Abort
      return;
    }

    // Query for details on the first 10 results
    for (let key = 0; key < 10 && key < results.length; key++) {
      wiki({ apiUrl: 'https://en.wikipedia.org/w/api.php' }).page(results[key]).then(async (page) => {
        // Get image and summary
        let image = await page.mainImage()
        let text = await page.summary()

        let result = {
          title: results[key],
          image,
          text
        }

        // Check if we are still the active query, otherwise don't update details
        if (query === this.state.query) {
          let results = this.state.results;
          results[key] = result;

          this.setState({
            results
          })
        }
      });
    }
  }

 render() {
   return (
     <div>
       <SearchBox expanded={ this.state.query === '' } onChange={ this.handleSearchUpdate } />
       { this.state.query !== '' && (<ResultList results={ this.state.results } totalResults={this.state.totalResults} />) }
     </div>
   );
 }
}