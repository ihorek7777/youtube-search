export function movies(state = [], action) {
  switch(action.type) {
    case 'ADD_MOVIE': 
      return [
        ...state, {
        title: action.title,
        thumbnailsUrl: action.thumbnailUrl,
        youTubeId: action.youTubeId
      }];
    case 'CLEAR_MOVIES':
      return [];

    default: 
      return state;
  }
}

