import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../DataLayer'

export default function Sidebar() {

  const [{ discover_weekly, featured_playlists, playlists }] = useDataLayerValue()

  return (
    <div className="sidebar animate__animated animate__fadeInLeft">
      <img
        className="sidebar-logo" 
        src="https://i.imgur.com/XOYup9u.png" 
        alt="spotify-logo" 
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <hr />
      <strong className="sidebar-title">FEATURED PLAYLISTS</strong>

      <SidebarOption title={discover_weekly?.name} playlist={discover_weekly} />

      {featured_playlists?.map(playlist => (
        <SidebarOption title={playlist.name} key={playlist.id} playlist={playlist} />
      ))}

      <hr />
      <strong className="sidebar-title">MY PLAYLISTS</strong>
      
      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name} key={playlist.id} playlist={playlist} />
      ))}
    </div>
  )
}
