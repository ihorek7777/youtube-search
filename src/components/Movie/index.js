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
					setTimeout(() => {window.location.assign(window.location.href);}, 100);
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