/**
 * Individual article page
 */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Nav from '../../components/Nav'
import HoverPreview from './hoverPreview';

import wiki from 'wikijs'
import './article.css'

class Article extends Component {
  state = {
    image: '', // Main article image
    title: '', // Article title
    hover: {  // Information for the hover preview
      show: false,  // Show the hover preview?
      position: [ 0, 0 ], // Position of the hover preview
      article: '' // Article to show in the hover preview
    }
  }

  constructor(props) {
    super(props);

    this.sidebar = React.createRef();
    this.text = React.createRef();
  }

  // Load article data on mount
  componentDidMount() {
      let article = this.props.match.params.article;
      let language = this.props.match.params.language ? this.props.match.params.language : 'en';
      this.getData(article, language);
  }

  // Load article data on location update
  componentDidUpdate(prevProps) {
    const locationChanged = this.props.location !== prevProps.location;

    if (locationChanged) {
      // Reset page content
      this.sidebar.current.innerHTML = '';
      this.text.current.innerHTML = 'Getting your article from Wikipedia...';
      this.setState({
          image: '',
          hover: {
            show: false,
            position: [0, 0],
            article: ''
          }
      });

      // Scroll back to top
      window.scrollTo(0, 0);

      // Get new article data
      let article = this.props.match.params.article;
      let language = this.props.match.params.language ? this.props.match.params.language : 'en';
      this.getData(article, language);
    }
  }

  // Get article data from wikipedia API
  async getData(query, language) {
    query = decodeURIComponent(query);

    // Set article title to query
    this.setState({
        title: query
    });
    // Replace document title with article title
    document.title = query.replace(/_/g, ' ') + ' - minimalpedia';
    // Reset hover preview
    this.setState({
      hover: {
        show: false,
        position: [0, 0],
        article: ''
      }
    });

    // Set timeout to update loading message after 10 seconds if still loading
    let loadingTimeout = setTimeout(() => {
      this.text.current.innerHTML = 'Still loading the article from Wikipedia...';
    }, 10000);

    // Get information using wikipedia API
    wiki({ apiUrl: `https://${language}.wikipedia.org/w/api.php` }).page(query).then((page) => {
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
      // Link the link is pointing to
      let to = a.getAttribute('href');

      a.addEventListener('click', evt => {
        evt.preventDefault();

        // Is link to another article? Open link with react-router
        if (/^\/wiki\/((?!File:).)*$/.test(to)) {
          // Open Wiki article
          let article = encodeURIComponent(to.substr(6));
          let language = this.props.match.params.language ? this.props.match.params.language : 'en';
          this.props.history.push('/wiki/' + article + '/' + language);

        // Is link to Wikipedia file? Redirect to Wikipedia
        } else if (/^\/wiki\/File:.*$/.test(to)) {
          var wikipediaFile = window.open(`https://${this.props.match.params.language}.wikipedia.org${to}`, '_blank');
          wikipediaFile.focus();

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

      // HOVER PREVIEW
      // Is the link hovered on?
      let isOnHover = false;
      // Current article when the link was hovered on. 
      // This is to prevent opening the hover preview after article change
      let pageOnHoverStart = '';

      a.addEventListener('mouseover', evt => {
        // Only show hover previews on Wikipedia articles
        if (/^\/wiki\/((?!File:).)*$/.test(to)) {
          isOnHover = true;
          pageOnHoverStart = this.state.title.substr();

          // Update state to hover article
          let article = to.substr(6);
          this.setState((state) => {
            return {
              hover: {
                ...state.hover,
                article,
                position: [ evt.pageY, evt.pageX ]
              }
            }
          });
          
          // Wait 500ms before showing preview
          setTimeout(() => {
            // Test if still hovering element and still on same page
            if (isOnHover && pageOnHoverStart === this.state.title) {
              // Show preview
              this.setState((state) => {
                return {
                  hover: {
                    ...state.hover,
                    show: true
                  }
                }
              });
            }
          }, 500);
        }
      });

      a.addEventListener('mouseleave', evt => {
        isOnHover = false;

        // Hide hover preview
        this.setState((state) => {
          return {
            hover: {
              ...state.hover,
              show: false
            }
          }
        });
      })
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
      <Nav language={ this.props.match.params.language ? this.props.match.params.language : 'en' } />

      <div className="md:flex md:min-h-screen article">
        {/* Hover Preview shown when hovering over other Wikipedia articles */}
        <HoverPreview 
          language={ this.props.match.params.language ? this.props.match.params.language : 'en' }
          position={ this.state.hover.position } 
          show={ this.state.hover.show } 
          article={ this.state.hover.article } />

        {/* Sidebar */}
        <div className="w-screen md:min-h-screen md:w-1/3 pl-16 p-6 sidebar">
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