const search = (state = [], action) => {
    switch (action.type) {
      case 'UPDATE_SEARCH':
        return action.text;
      default:
        return state
    }
  }
  
  export default search
  