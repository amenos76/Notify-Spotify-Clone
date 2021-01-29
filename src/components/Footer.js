import React from 'react'
import { useEffect, useState } from 'react'
import { useDataLayerValue } from '../DataLayer'
import './Footer.css'

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';


export default function Footer({ spotify }) {

  const [{ item, playing, volume}, dispatch] = useDataLayerValue()

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      // console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext()
    .then((r) => {
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
    })
  };

  const skipPrevious = () => {
    spotify.skipToPrevious()
    .then((r) => {
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
    })
  };

  const changeVolume = (event, value) => {
    // console.log('Setting volume to:', value)
    spotify.setVolume(value)
    dispatch({
      type: "SET_VOLUME",
      volume: value
    })
  };

  return (
    <div className="footer animate__animated animate__fadeInUp">

      <div className='footer-left'>
        <img className="footer-albumLogo" src={item?.album.images[0].url} alt={item?.name} />
        {item ? (
          <div className="footer-songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer-songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

      <div className='footer-center'>
        <ShuffleIcon className="footer-green" />
        <SkipPreviousIcon onClick={skipPrevious} className="footer-icon" />
        {playing ? (
          <PauseCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer-icon"
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer-icon"
          />
        )}
        <SkipNextIcon onClick={skipNext} className="footer-icon" />
        <RepeatIcon className="footer-green" />

      </div>

      <div className='footer-right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider onChange={changeVolume} value={volume} aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>

    </div>
  )
}
