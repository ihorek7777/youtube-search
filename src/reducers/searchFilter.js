

export function searchFilter(state = '', action) {
  switch (action.type) {
    case 'SET_SEARCH_FILTER':
      return action.filter
    default:
      return state
  }
}

