export const initialState = {
  user: null,
  playlists: [],
  selected_playlist: null,
  playing: false,
  item: null,
  spotify: null,
  selected_artist: null,
  artist_is_selected: false,
  volume: 50,
  bodyInfoClass: "body-info",
  songRowClass: "songRowLeft-container",
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

    case 'SET_SELECTED_ARTIST':
      return {
        ...state,
        selected_artist: action.selected_artist
      }

    case 'SET_ARTIST_IS_SELECTED':
      return {
        ...state,
        artist_is_selected: action.artist_is_selected
      }

    case 'SET_BODY_INFO_CLASS':
      return {
        ...state,
        bodyInfoClass: action.bodyInfoClass
      }

    case 'SET_SONG_ROW_CLASS':
      return {
        ...state,
        songRowClass: action.songRowClass
      }

      
    default:
      return state
  }
}

export default reducer