import React from 'react'
import './Body.css'
import Header from './Header'
import { useDataLayerValue } from '../DataLayer'

import { PlayCircleFilled } from '@material-ui/icons/'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SongRow from './SongRow'
import BodyInfo from './BodyInfo'

export default function Body({ spotify }) {

  const [{ discover_weekly, selected_playlist }, dispatch] = useDataLayerValue()

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcI9MOD0N706T`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  
  return (
    <div className="body">
      <Header spotify={spotify} />

      <BodyInfo discover_weekly={discover_weekly} selected_playlist={selected_playlist} />

      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleFilled onClick={playPlaylist} className="body-shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((song, index) => 
          <SongRow playSong={playSong} track={song.track} key={index} />
        )}
      </div>
    </div>
  )
}
