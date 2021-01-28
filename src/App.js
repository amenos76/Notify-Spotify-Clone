import Login from './components/Login'
import Player from './components/Player'

import { useEffect, useState } from 'react'
import { getTokenFromUrl } from './helpers/spotify';
import { useDataLayerValue } from './DataLayer'
import SpotifyWebApi from 'spotify-web-api-js'

import './App.css';

const spotify = new SpotifyWebApi()

function App() {
  // const [token, setToken] = useState(null)
  const [{token}, dispatch] = useDataLayerValue()

  useEffect(() => {
    const tokenHash = getTokenFromUrl()
    window.location.hash = ''

    const _token = tokenHash.access_token

    if(_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      
      spotify.setAccessToken(_token)
      
      spotify.getMe().then(user => {
        // console.log('person', user)
        dispatch({
          type: "SET_USER",
          user: user
        })
      })

      spotify.getPlaylist("37i9dQZEVXcI9MOD0N706T").then((discover_weekly) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: discover_weekly
        })

        // dispatch({
        //   type: "SET_SELECTED_PLAYLIST",
        //   selected_playlist: discover_weekly
        // })
      })

      spotify.getFeaturedPlaylists().then((featured_playlists) => {
        dispatch({
          type: "SET_FEATURED_PLAYLISTS",
          featured_playlists: featured_playlists.playlists.items
        })
      })

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        });
      });

      spotify.getMyCurrentPlayingTrack().then((r) => {
        dispatch({
          type: "SET_ITEM",
          item: r.item
        })
      })

    }
    console.log('I HAVE A TOKEN:', _token)
  }, [token, dispatch])

  // console.log("Checkout this user:", user)
  // console.log("Checkout this token:", token)

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }

    </div>
  );
}

export default App;
