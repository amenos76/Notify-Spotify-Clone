export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove actual token and change to null after debugging
  // token: null
  token: "BQDi07koNM2gTjpiYZ8wqQSyoCYFlSR9RhfzbRJvyzTmQqRzAIp5bB5in5AeM6BQcibCqEyB0YIZ_HlH9ronVhquxV_0nXMjAyNy7lL8W4uIqNVGa6kK9pkXjc5btBGU0OseQuzvnYY-wrbPjpRTkI4eWg"
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
        return {
          ...state,
          token: action.token
        }

      case 'SET_PLAYLISTS':
        return {
          ...state,
          playlists: action.playlists
        }
      
    default:
      return state
  }
}

export default reducer