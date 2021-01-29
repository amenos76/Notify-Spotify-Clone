import React, { useEffect } from 'react'
import './Body.css'
import { useDataLayerValue } from '../DataLayer'
import Header from './Header'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { PlayCircleFilled } from '@material-ui/icons/'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SongRow from './SongRow'
import BodyInfo from './BodyInfo'


export default function Body({ spotify }) {

 
  const [{ selected, selected_playlist, selected_artist, artist_is_selected }, dispatch] = useDataLayerValue()

  // useEffect(() => {
  //   dispatch({
  //     type: 'SET_BODY_INFO_CLASS',
  //     bodyInfoClass: 'body-info'
  //   })
  // }, [selected_playlist])

  const playPlaylist = () => {
    spotify.play({context_uri: selected_playlist.uri,})
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

  // const renderSongs = () => {
  //   selected_playlist?.tracks.items.map((song, index) => 
  //     <SongRow playSong={playSong} track={song.track} key={index} />
  //   )
  // }
  
  return (
    <div className="body animate__animated animate__fadeInDown">
      <Header spotify={spotify} />

      {artist_is_selected ? (
      <BodyInfo selected={selected_artist} />
      ) : (
      <BodyInfo selected={selected_playlist} />
      )}

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
