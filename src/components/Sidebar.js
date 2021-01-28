import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../DataLayer'

export default function Sidebar() {

  const [{ featured_playlists }, dispatch] = useDataLayerValue()

  const selectPlaylist = (id) => {
    dispatch({
      type: "SET_SELECTED_PLAYLIST",
      selected_playlist: id
    });
  }

  return (
    <div className="sidebar">
      <img
        className="sidebar-logo" 
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
        alt="spotify-logo" 
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar-title">FEATURED PLAYLISTS</strong>
      <hr />

      {featured_playlists?.map(playlist => (
        <SidebarOption title={playlist.name} key={playlist.id} playlist={playlist} selectPlaylist={selectPlaylist} />
      ))}
    </div>
  )
}
