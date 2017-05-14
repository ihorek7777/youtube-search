import React, { Component } from 'react';

import Search from '../Search';
import Movie from '../Movie';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './style.css';

class App extends Component {
  render() {
    return (
      <div className="app">
      	<Router>
      		<div>
      			<Route path="/" component={Search} />
      			<Route path="/movie/:movieId" component={Movie} />
      		</div>
      	</Router>
      </div>
    );
  }
}

export default App;
