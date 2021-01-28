import React from 'react'
import './Login.css'
import { loginUrl } from '../helpers/spotify.js'

export default function Login() {
  return (
    <div className="login">
      <img 
        src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-png-RGB-White.png" 
        alt="spotify-logo" 
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}
