import './Body.css'
import { useDataLayerValue } from '../DataLayer'
import Header from './Header'

import { PlayCircleFilled } from '@material-ui/icons/'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SongRow from './SongRow'
import BodyInfo from './BodyInfo'


export default function Body({ spotify }) {

 
  const [{ selected_playlist, selected_artist, artist_is_selected }, dispatch] = useDataLayerValue()

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

  let timeout 
  const playSong = (id) => {
    spotify.play({ uris: [`spotify:track:${id}`] })
      clearTimeout(timeout)
      timeout = setTimeout(() => {
          spotify.getMyCurrentPlayingTrack()
          .then((current_track) => {
            dispatch({
              type: "SET_ITEM",
              item: current_track.item,
            });
            dispatch({
              type: "SET_PLAYING",
              playing: true,
            });
          });
      }, 50)
  };
  
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
