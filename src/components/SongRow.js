import React from 'react'
import './SongRow.css'

import { useDataLayerValue } from '../DataLayer'

export default function SongRow({ track, playSong }) {

  const [{ songRowClass, spotify}, dispatch] = useDataLayerValue()

  let timer

  const handleClick = () => {
    // console.log(track.artists[0].id)
    spotify.getArtist(track.artists[0].id)
      .then(artist => {
        console.log(artist)
        dispatch({
          type: "SET_SELECTED_ARTIST",
          selected_artist: artist
        })
        dispatch({
          type: "SET_ARTIST_IS_SELECTED",
          artist_is_selected: true
        })
        dispatch({
          type: "SET_BODY_INFO_CLASS",
          bodyInfoClass: "body-info animate__animated animate__fadeInLeft",
        })
        clearTimeout(timer)
      timer = setTimeout(() => { 
        dispatch({
          type: 'SET_BODY_INFO_CLASS',
          bodyInfoClass: 'body-info'
        })
        dispatch({
          type: 'SET_SONG_ROW_CLASS',
          songRowClass: 'songRowLeft-container'
        })
      }, 1100)


      })
  }

  return (
    <div className="songRow" >
      <div className={songRowClass} onClick={() => playSong(track.id)} >
        <img className="songRow-album" src={track.album.images[0].url} alt={track.artists.name} />
        <div className="songRow-info">
          <h1>{track.name}</h1>
          <p>
            {track.artists.map((artist) => artist.name).join(", ")}
          </p>
        </div>
      </div>
      <div className="songRowRight-container animate__animated animate__fadeInDown">
        <button onClick={handleClick} className="artistDetails-button">{track.artists[0].name}</button>
      </div>
    </div>
  )
}
