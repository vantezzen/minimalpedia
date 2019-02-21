import React, { Component } from 'react'
import Routes from './Routes'

// Fonts
import 'typeface-open-sans';
import 'typeface-merriweather';

// Styles
import './styles/tailwind.css'
import './styles/style.css'

export default class App extends Component {
  render() {
    return <Routes />
  }
}