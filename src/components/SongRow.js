import React from 'react'
import './SongRow.css'

export default function SongRow({ track, playSong }) {
  return (
    <div className="songRow" onClick={() => playSong(track.id)} >
      <img className="songRow-album" src={track.album.images[0].url} alt={track.artists.name} />
      <div className="songRow-info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
        </p>
      </div>
    </div>
  )
}
