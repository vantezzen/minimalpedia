import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Footer from './components/Footer'

import Article from './pages/Article/Article';
import Home from './pages/Home/Home';

const Routes = (props) => (
  <Router {...props}>
    <div>
      <Switch>
        <Route path="/wiki/:article" component={Article} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  </Router>
);
export default Routes;