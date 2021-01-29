import React from 'react'
import './SidebarOption.css'

import { useDataLayerValue } from '../DataLayer'


export default function SidebarOption({ title, Icon, playlist }) {

  const [{ spotify, selected_playlist }, dispatch] = useDataLayerValue()

  const selectPlaylist = () => {
    spotify.getPlaylist(playlist.id).then((r) => {
      dispatch({
        type: "SET_SELECTED_PLAYLIST",
        selected_playlist: r
      })
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
