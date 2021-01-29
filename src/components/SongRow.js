import React from 'react'
import './SongRow.css'

import { useDataLayerValue } from '../DataLayer'

export default function SongRow({ track, playSong }) {

  const [{ selected_artist, artist_is_selected, spotify}, dispatch] = useDataLayerValue()

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
      })
  }

  return (
    <div className="songRow" >
      <div className="songRowLeft-container" onClick={() => playSong(track.id)} >
        <img className="songRow-album" src={track.album.images[0].url} alt={track.artists.name} />

        <div className="songRow-info">
          <h1>{track.name}</h1>
          <p>
            {track.artists.map((artist) => artist.name).join(", ")}
          </p>
        </div>

      </div>


      <div className="songRowRight-container">
        <button onClick={handleClick} className="artistDetails-button">{track.artists[0].name}</button>
      </div>
    </div>
  )
}
