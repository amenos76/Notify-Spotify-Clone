import React from 'react'
import './BodyInfo.css'

export default function BodyInfo( {selected_playlist} ) {
  return (
      <div className="body-info">

        <img src={selected_playlist?.images[0].url} alt={selected_playlist?.name} />
        <div className="body-infoText">
          <strong>PLAYLIST</strong>
          <h2>{selected_playlist?.name}</h2>
          <p>{selected_playlist?.description}</p>
        </div>

      </div>
  )
}
