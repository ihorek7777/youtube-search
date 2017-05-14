import { combineReducers } from 'redux';

import { searchFilter } from './searchFilter';
import { movies } from './movies'; 


const searchApp = combineReducers({
	searchFilter,
	movies,
});

export default searchApp;