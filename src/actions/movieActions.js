export function addMovie(item) {
  return {
    type: 'ADD_MOVIE',
    title: item.snippet.title,
    thumbnailUrl: item.snippet.thumbnails.default.url,
    youTubeId: item.id.videoId
  }
}

export const clearMovies = () => {
	return {
		type: 'CLEAR_MOVIES'
	}
}