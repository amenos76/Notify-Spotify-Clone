export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove actual token and change to null after debugging
  // token: null
  token: "BQCOJdrrlW58Txg1PuxCQhKzMmJvLQXAOwdG7fxptRLDWZcD7vaEZsRZMblI59ugw9-mHFsCOqixlr9XyXGm8cIbW1XFYpUY1SZgqIIjG_Lhv7YdFHobNrCTe2BfwY_7bCppkYQ5MLC8-I4TUgbcs4lMNA"
}

const reducer = (state, action) => {
  console.log(action)

  switch(action.type){
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }

      case 'SET_TOKEN':
        return{
          ...state,
          token: action.token
        }

    default:
      return state
  }
}

export default reducer