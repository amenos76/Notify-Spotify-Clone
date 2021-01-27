import React from 'react'
import './Body.css'
import Header from './Header'
import { useDataLayerValue } from '../DataLayer'
import { PlayCircleFilled } from '@material-ui/icons'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SongRow from './SongRow'

export default function Body({ spotify }) {

  const [{ discover_weekly, }, dispatch] = useDataLayerValue()
  console.log(discover_weekly)
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body-info">
        <img src={discover_weekly?.images[0].url} alt="discover-weekly" />
        <div className="body-infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleFilled className="body-shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((song) => 
          <SongRow track={song.track} />
        )}
      </div>
    </div>
  )
}
