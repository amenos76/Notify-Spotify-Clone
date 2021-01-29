import React, { useEffect } from 'react'
import './BodyInfo.css'
import { useDataLayerValue } from '../DataLayer'
import { TransitionGroup, CSSTransition } from 'react-transition-group';


export default function BodyInfo( {selected} ) {

  const [{ artist_is_selected, bodyInfoClass, selected_playlist }, dispatch] = useDataLayerValue()

  // useEffect(() => {
  //   console.log("HIT")
  //   dispatch({
  //     type: 'SET_BODY_INFO_CLASS',
  //     bodyInfoClass: 'body-info'
  //   })
  // }, [selected_playlist]) 

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

