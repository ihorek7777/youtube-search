import React, { Component } from 'react';
import { fetchMovies } from '../../actions';
import { connect } from 'react-redux';
import './style.css';


class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.parseUrl = this.parseUrl.bind(this);
	}

	parseUrl() {
		let url = window.location.search;

		/*
		if (url === '' && window.location.pathname.slice(1) !== '') {
			let query = window.location.pathname.slice(1);

			window.location.assign(window.location.protocol + '//' + window.location.host + `/?q=${query}`);

			return query;
		}
		*/
		
		url = url.split('=');

		url.forEach((elem, index) => {
			if (elem === '?q' || elem === 'q') {
				url = url[index+1];
			}
		});

		return url;
	}

	componentWillMount() {
		this.props.dispatch(fetchMovies(this.parseUrl()));
	}

	render() {
		return (
			<div className="search-bar">
				<form className="search-bar__form" 
					onSubmit={e => {
						e.preventDefault();
						this.props.dispatch(fetchMovies(this.parseUrl()));	
					}}>
					<input 
						onChange={e => {
							window.history.pushState({}, '', `?q=${e.target.value}`);
						}}
						placeholder="Search..."
						name="search_query"
						className="search-bar__query" 
						type="text"	/>
					<input type="submit" value="Submit" className="search-bar__submit" />
				</form>
			</div>
		);
	}
}


SearchBar = connect()(SearchBar);

export default SearchBar;