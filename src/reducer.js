export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove actual token and change to null after debugging
  // token: null
  token: "BQAUQLD4nZAuO1USTuvseyy4PaFYERe5FXy8NeP6VJj2yzPCHRFDK8KSyL9BEaZY4pTSYTgNvJ1t886XjuX2IWXPjLsnRlvg_Z1_-TaJVmxCwOPQgQn6hVpIU_YQ-KFlozN-8gOTqs4g6SyWrS5ATJGhFw"
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