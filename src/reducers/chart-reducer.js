const initialState = {
  chartData: [],
  addedTags: [],
  isBtnAddDisabled: true
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DATA':
      return {
        ...state,
        chartData: action.payload
      }

    case 'ADD_TAG':
      return {
        ...state,
        addedTags: [...state.addedTags, action.payload]
      }

    case 'REMOVE_TAG':
      return {
        ...state,
        addedTags: state.filter( (item, index) => index !== action.index )
      }
    
    default:
      return state;
  }
}

export default reducer;