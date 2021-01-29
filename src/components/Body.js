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

  const playPlaylist = () => {
    spotify
      .play({
        context_uri: selected_playlist.uri,
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
    let timeout 
    
    spotify.play({ uris: [`spotify:track:${id}`] })
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        // .then((res) => {
          spotify.getMyCurrentPlayingTrack()
          .then((r) => {
            console.log("HERE DUMMY", r)
            dispatch({
              type: "SET_ITEM",
              item: r.item,
            });
            dispatch({
              type: "SET_PLAYING",
              playing: true,
            });
          });
        // });

      }, 150)
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
        {selected_playlist?.tracks.items.map((song, index) => 
          <SongRow playSong={playSong} track={song.track} key={index} />
        )}
      </div>
    </div>
  )
}
