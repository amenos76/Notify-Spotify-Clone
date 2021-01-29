import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../DataLayer'

export default function Sidebar() {

  const [{ discover_weekly, featured_playlists }, dispatch] = useDataLayerValue()

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

      {/* Discover weekly is <b>{discover_weekly ? 'indeed' : 'not' }</b> loaded */}
      <SidebarOption title={discover_weekly?.name} playlist={discover_weekly} />

      {featured_playlists?.map(playlist => (
        <SidebarOption title={playlist.name} key={playlist.id} playlist={playlist} />
      ))}

      {/* <strong className="sidebar-title">MY PLAYLISTS</strong>
      <hr /> */}
    </div>
  )
}
