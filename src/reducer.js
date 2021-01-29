export const initialState = {
  user: null,
  playlists: [],
  selected_playlist: null,
  featured_playlists: null,
  playing: false,
  item: null,
  spotify: null,
  top_artists: null,
  volume: 50,
  token: null
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

    case 'SET_SELECTED_PLAYLIST':
      return {
        ...state,
        selected_playlist: action.selected_playlist
      }

    case 'SET_FEATURED_PLAYLISTS':
      return {
        ...state,
        featured_playlists: action.featured_playlists
      }


      
    default:
      return state
  }
}

export default reducer