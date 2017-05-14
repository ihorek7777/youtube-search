import { addMovie, clearMovies } from './movieActions';
import { setSearchFilter } from './searchFilterActions';

export function fetchMovies(queryText) {
	return dispatch => {
		dispatch(setSearchFilter(queryText));
		dispatch(clearMovies());

		var url = 'https://www.googleapis.com/youtube/v3/search';
		var params = {
		    part: 'snippet',
		    key: 'AIzaSyAztbNsK3ikz9RGHbzyT6yr7uUClomZhAk',
		    q: queryText,
		    maxResults: 10,
		    order: 'relevance',
		    type: 'video'
		};


		var strOfParams = '?';

		for (let key in params) {
		    strOfParams += key + '=' + params[key] + '&';
		}

		var request = url + strOfParams;
		
		fetch(request)
			.then(response => response.json())
			.then(data => {
				data.items.forEach(item => {
					dispatch(addMovie(item));
				})
			})
	}
}