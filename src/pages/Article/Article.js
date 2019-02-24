/**
 * Individual article page
 */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Nav from '../../components/Nav'

import wiki from 'wikijs'
import './article.css'

class Article extends Component {
  state = {
    image: '', // Main article image
    title: '' // Article title
  }

  constructor(props) {
    super(props);

    this.sidebar = React.createRef();
    this.text = React.createRef();
  }

  // Load article data on mount
  componentDidMount() {
      let article = this.props.match.params.article;
      this.getData(article);
  }

  // Load article data on location update
  componentDidUpdate(prevProps) {
    const locationChanged = this.props.location !== prevProps.location;

    if (locationChanged) {
      // Reset page content
      this.sidebar.current.innerHTML = '';
      this.text.current.innerHTML = 'Getting your article from Wikipedia...';
      this.setState({
          image: ''
      });

      let article = this.props.match.params.article;
      this.getData(article);
    }
  }

  // Get article data from wikipedia API
  async getData(query) {
    // Set article title to query
    this.setState({
        title: query
    });
    // Replace document title with article title
    document.title = query.replace(/_/g, ' ') + ' - minimalpedia';

    // Set timeout to update loading message after 10 seconds if still loading
    let loadingTimeout = setTimeout(() => {
      this.text.current.innerHTML = 'Still loading the article from Wikipedia...';
    }, 10000);

    // Get information using wikipedia API
    wiki({ apiUrl: 'https://en.wikipedia.org/w/api.php' }).page(query).then((page) => {
      console.log(page)
        // Get image
        page.mainImage().then(image => {
          this.setState({
            image
          });
        })

        // Get and process HTML
        page.html().then(html => {
          clearTimeout(loadingTimeout);
          this.processHtml(html);
        })
    }).catch(err => {
      clearTimeout(loadingTimeout);

      // Replace common errors with custom error messages
      if (String(err) === "Error: No article found") {
        err = 'Sorry, but we couldn\'t find this article on Wikipedia'
      }

      // Display error
      this.text.current.innerHTML = err;
    });
  }

  // Process HTML from wikipedia for use on the page
  processHtml(html) {
    // Parse HTML
    let parser = new DOMParser();
    let el = parser.parseFromString('<div>' + html + '</div>', 'text/html');

    // Replace links
    el.querySelectorAll('a').forEach(a => {
      let to = a.getAttribute('href');

      a.addEventListener('click', evt => {
        evt.preventDefault();

        // Is link to another article? Open link with react-router
        if (/^\/wiki\/.*/.test(to)) {
          // Open Wiki article
          this.props.history.push(to);

        // Is link to anchor? Scroll to anchor smoothly
        } else if (to.charAt(0) === '#') {
          document.querySelector(to).scrollIntoView({
            behavior: 'smooth'
          });

        // Else it is an external link - open the link in a new tab
        } else {
          var newTab = window.open(to, '_blank');
          newTab.focus();
        }
      });
    });

    // Remove specific style attributes
    let elementsWithStyle = el.querySelectorAll('[style]:not([style=""]');
    if (elementsWithStyle) {
      // This regex will be selecting the following CSS styles and their values:
      // - background
      // - background-color
      // - border
      // - border-*
      // - color
      let styleRegex = /(background(-color)?|border(-[^:]*)?|color):.*?(;|$)/gi;
      elementsWithStyle.forEach(element => {
        let style = element.getAttribute('style');

        // Remove attributes stated above from the element style
        style = style.replace(styleRegex, '');

        element.setAttribute('style', style);
      });
    }

    /////// PROCESS SIDEBAR ///////
    // Extract sidebar
    let sidebar = el.querySelectorAll('table.infobox')[0];

    // Only process sidebar if a sidebar exists
    if (sidebar) {
      // Remove images from sidebar
      let images = sidebar.querySelectorAll('.image');
      if (images) {
        images.forEach(element => {
          element.remove()
        });
      }


      // Remove wikipedia styles from sidebar table
      sidebar.removeAttribute('style');
      let elementsWithStyle = sidebar.querySelectorAll('[style]:not([style=""]');
      if (elementsWithStyle) {
        elementsWithStyle.forEach(element => {
          element.removeAttribute('style')
        });
      }

      // Remove first two lines of table as they are simply the article title
      let amountRemoved = 0;
      sidebar.querySelectorAll('tr').forEach(element => {
        if (amountRemoved < 2) {
          element.remove();
        } else {
          return false;
        }
        amountRemoved++;
      });

      // Insert sidebar into page
      this.sidebar.current.innerHTML = '';
      this.sidebar.current.appendChild(sidebar);
    }

    /////// PROCESS MAIN CONTENT ///////
    let content = el.querySelectorAll('div')[0];

    // Remove sidebar
    // content.querySelectorAll('table.infobox')[0].remove();

    // Remove edit links
    content.querySelectorAll('.mw-editsection').forEach(el => {
      el.remove()
    });

    // Insert main content into page
    this.text.current.innerHTML = '';
    this.text.current.appendChild(content);
  }

 render() {
   return (
     <div>
      <Nav />

      <div className="md:flex md:min-h-screen article">
        {/* Sidebar */}
        <div className="w-screen md:w-1/3 pl-16 p-6 sidebar">
          <img className="w-100" src={this.state.image} alt="" />
          <div className="sidebar-table" ref={ this.sidebar } />
        </div>

        {/* Main content */}
        <div className="w-screen md:w-2/3 pl-16 md:pl-6 p-6 info">
          <h2>{ this.state.title.replace(/_/g, ' ') }</h2>
          <div ref={ this.text }>Getting your article from Wikipedia...</div>
        </div>
        
      </div>
     </div>
   );
 }
}
export default withRouter(Article);