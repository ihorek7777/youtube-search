import React, { Component } from 'react';
import './style.css';

import MovieList from '../MovieList';
import SearchBar from '../SearchBar';



class Search extends Component {
  render() {
    return (
      <div className="search">
        <SearchBar />
        <MovieList />
      </div>
    );
  }
}

export default Search;
