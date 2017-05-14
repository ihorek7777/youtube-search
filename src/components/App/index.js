import React, { Component } from 'react';

import Search from '../Search';
import Movie from '../Movie';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.getPathname = this.getPathname.bind(this);
  }

  getPathname() {
    let pathname = '';
    let path = window.location.pathname.split('/');
    path.forEach((elem, index) => {
      if (elem === 'movie' && typeof path[index+1] !== undefined) {
        pathname = path[index-1] !== '' ? '/' + path[index-1] + '/' : '/';
      }
    });

    return pathname === '' ? path.join('/') : pathname;
  }

  render() {
    return (
      <div className="app">
      	<Router>
      		<div>
      			<Route path="/" component={Search} />
      			<Route path={`${this.getPathname()}movie/:movieId`} component={Movie} />
      		</div>
      	</Router>
      </div>
    );
  }
}

export default App;
