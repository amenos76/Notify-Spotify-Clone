export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove actual token and change to null after debugging
  token: null
  // token: "BQAhiBrrtb57n5-VEDRy9coIlYrGZ7mu9w0uM0tOv4yrC4bn3k_CckR-SlT7vBEYC2oGIVGY6QZdvhyjz4Vpr4LXjQPKEF6j4unDbQV42OB3zJ0yCgb3pl8CJldxMsETkW2D1ydKGGkXQNshd-8DHvrf5g"
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

      case 'SET_DISCOVER_WEEKLY':
        return {
          ...state,
          discover_weekly: action.discover_weekly
        }
      
    default:
      return state
  }
}

export default reducer