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
  const [{user, token}, dispatch] = useDataLayerValue()

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
    }

    // console.log('I HAVE A TOKEN:', _token)
  }, [])

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
