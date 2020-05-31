const INITIAL_STATE = {
  currentUser: null
}

// NOTE: ES6 feature to set initial value to a variable which is undefined 
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state; 
  }
}

export default userReducer;