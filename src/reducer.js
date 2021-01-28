export const initialState = {
  user: null,
  playlists: [],
  selected_playlist: null,
  playing: false,
  item: null,
  spotify: null,
  top_artists: null,
  volume: 50,
  // remove string token before deployment
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

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
      
    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing
      }
      
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly
      }       

    case "SET_TOP_ARTISTS":
      console.log(action.top_artists)
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      }

    case 'SET_VOLUME':
      return {
        ...state,
        volume: action.volume
      }


      
    default:
      return state
  }
}

export default reducer