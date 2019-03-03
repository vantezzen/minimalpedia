import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import wiki from 'wikijs'
import './hoverPreview.css'

export default class HoverPreview extends Component {
    state = {
        image: '',
        title: '',
        text: ''
    }

    // Load article when component mounts
    componentDidMount() {
        this.getArticleInfo();
    }

    // Load article data on article change
    componentDidUpdate(prevProps) {
        const articleChanged = this.props.article !== this.state.title;

        if (articleChanged) {
            // Reset state
            this.setState({
                image: '',
                text: 'Loading article info...'
            })

            this.getArticleInfo();
        }
    }

    // Get information about current hover article from Wikipedia API
    getArticleInfo() {
        this.setState({
            title: this.props.article
        })

        wiki({ apiUrl: `https://${this.props.language}.wikipedia.org/w/api.php` }).page(decodeURIComponent(this.props.article)).then((page) => {
            // Get image and summary
            page.mainImage().then(image => {
                this.setState({image})
            })
            page.summary().then(text => {
                this.setState({text})
            })
        });
    }

    render() {
        const props = this.props;
        const state = this.state;

        return (
            <Link 
                to={"/wiki/" + encodeURIComponent(props.article) + '/' + props.language} 
                className="hover-preview max-w-xs absolute overflow-hidden shadow-lg bg-secondary z-10"
                style={{
                    top: props.position[0] + 15 + 'px',
                    // Only move to right if screen is wider than 500px
                    left: window.innerWidth > 500 ? props.position[1] + 'px' : '1rem',
                    display: props.show ? '' : 'none'
                }}>

                {/* Head image */}
                <img className="preview-image w-full h-32" src={state.image} alt="" />

                <div className="px-6 py-4">
                    {/* Heading */}
                    <div className="font-bold text-xl mb-2">{decodeURIComponent(props.article).replace(/_/g, ' ')}</div>

                    {/* Text preview */}
                    <p className="text-grey-darker text-2xs">
                        { state.text.substr(0, 200) }...
                    </p>
                </div>
            </Link>
        )
    }
}