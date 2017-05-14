import React, { Component } from 'react';
import YouTube from 'react-youtube';

import './style.css';

class Movie extends Component {
	render() {
		const opts = {
			height: '80%',
			width: '70%',
			playerVars: {
				autoplay: 1
			}
		}

		return (
			<div className="movie"
				onClick={() => {
					window.history.back();
					// it need for restart previous search-query after reload page when movie opened
					// but on github pages does not need, because after reload page with movies opened will be 404
					//setTimeout(() => {window.location.assign(window.location.href);}, 100); 
				}}>
				<div className="background" />
				<YouTube 
					className="player"
					videoId={this.props.match.params.movieId}
					opts={opts}
				/>
			</div>
		);
			

	}
}


export default Movie;