import React from 'react'
import './BodyInfo.css'
import { useDataLayerValue } from '../DataLayer'



export default function BodyInfo( {selected} ) {

  const [{ artist_is_selected, bodyInfoClass }] = useDataLayerValue()

  return (
    <div className={bodyInfoClass}>
        <img src={selected?.images[0].url} alt={selected?.name} />
        
          <div className="body-infoText">
            {artist_is_selected ? (
              <strong>ARTIST</strong>
            ) : (
              <strong>PLAYLIST</strong>
            )}

            <h2>{selected?.name}</h2>

            {artist_is_selected ? (
              <p>{selected?.followers.total} Followers</p>
            ) : ( 
              <p>{selected?.description}</p>
            )}
          </div>
        </div>
  )
}

