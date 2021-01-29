import React from 'react'
import './SidebarOption.css'

import { useDataLayerValue } from '../DataLayer'


export default function SidebarOption({ title, Icon, playlist }) {

  const [{ spotify, animate, set_animate }, dispatch] = useDataLayerValue()

  let timer

  const selectPlaylist = () => {
    spotify.getPlaylist(playlist.id).then((playlist) => {
      dispatch({
        type: "SET_SELECTED_PLAYLIST",
        selected_playlist: playlist
      });
      dispatch({
        type: "SET_ARTIST_IS_SELECTED",
        artist_is_selected: false
      });
      dispatch({
        type: "SET_ANIMATE",
        animate: true,
      });
      dispatch({
        type: "SET_BODY_INFO_CLASS",
        bodyInfoClass: "body-info animate__animated animate__fadeInDown",
      });
      dispatch({
        type: "SET_SONG_ROW_CLASS",
        songRowClass: "songRowLeft-container animate__animated animate__fadeIn",
      });
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

    // dispatch({
    //   type: "SET_SELECTED_PLAYLIST",
    //   selected_playlist: playlist
    // });
  }

  return (
    <div className="sidebarOption">
    { Icon && <Icon className="sidebarOption-icon" /> }

    {Icon ? <h4>{title}</h4> : <p onClick={selectPlaylist} playlist={playlist}>{title}</p> }
    </div>
  )
}
