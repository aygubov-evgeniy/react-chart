const initialState = {
  chartData: []
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DATA':
      return {
        ...state,
        chartData: action.payload
      }
    
    default:
      return state;
  }
}

export default reducer;