
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';

let MovieList = ({ items }) => {
	return (
		<ul className="movie-list">
			{
				items.map((elem, index) => 
					<Link to={`${window.location.pathname}movie/${elem.youTubeId}`} key={index} >
					<li className="movie-list__elem">
						<img src={elem.thumbnailsUrl} alt="thumbnail"/>
						<p>{elem.title}</p>
					</li>
					</Link>
				)
			}
		</ul>
	)
}


const mapStateToProps = (state) => {
	return {
		items: state.movies
	}
}



MovieList = connect(mapStateToProps)(MovieList);

export default MovieList;