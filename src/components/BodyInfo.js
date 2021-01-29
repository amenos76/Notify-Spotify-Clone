import React from 'react'
import './BodyInfo.css'
import { useDataLayerValue } from '../DataLayer'


export default function BodyInfo( {selected} ) {

  const [{ selected_artist, artist_is_selected }, dispatch] = useDataLayerValue()
  
  return (
            <div className="body-info">
              <img src={selected?.images[0].url} alt={selected?.name} />
                <div className="body-infoText">
                  <strong>PLAYLIST</strong>
                  <h2>{selected?.name}</h2>
                  {artist_is_selected ? (
                    <p>{selected?.followers.total} Followers</p>
                  ) : ( 
                  <p>{selected?.description}</p>
                  )}
                </div>
              

              
            {/* <img src={selected_artist?.images[0].url} alt={selected_artist?.name} />
            <div className="body-infoText">
              <strong>ARTIST</strong>
              <h2>{selected_artist?.name}</h2>
              <p>{selected_artist?.followers} Followers</p>
            </div> */}

            </div>
  )
}

