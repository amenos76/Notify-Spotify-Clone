import React from 'react'
import './Footer.css'

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

export default function Footer() {
  return (
    <div className="footer">

      <div className='footer-left'>
        <img className="footer-albumLogo" src="https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/a3/82/9c/a3829cd4-2172-70c9-fabd-aeb379811378/source/200x200bb.jpg" alt="" />
        <div className="footer-songInfo">
          <h4>R.Y.F.F.</h4>
          <p>CITRA</p>
        </div>
      </div>

      <div className='footer-center'>
        <ShuffleIcon className="footer-green" />
        <SkipPreviousIcon className="footer-icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer-icon" />
        <SkipNextIcon className="footer-icon" />
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
            <Slider />
          </Grid>
        </Grid>
      </div>

    </div>
  )
}
