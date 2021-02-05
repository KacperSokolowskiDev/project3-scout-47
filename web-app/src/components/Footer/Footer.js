import React, { useEffect } from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer";
import VideoPlayer from "../modules/video/VideoPlayer";

function Footer({ api, mediaPlayer }) {
  const [{ token, item, playing }, dispatch] = useDataLayerValue();

  useEffect(() => {
    mediaPlayer.getMyCurrentPlaybackState().then((r) => {
      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [mediaPlayer]);

  const handlePlayPause = () => {
    if (playing) {
      mediaPlayer.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      mediaPlayer.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    mediaPlayer.skipToNext();
    mediaPlayer.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    mediaPlayer.skipToPrevious();
    mediaPlayer.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  return (
    <>
      <div className="footer">
        <div className="footer__left">
          {/* <img src={item?.album.images[0].url} className="footer__albumLogo" alt={item?.name} /> */}

          {/* {item ? (
                    <div className="footer__songInfo">
                        <h4>{item.name}</h4>
                        <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
                    </div>
                ) : (
                        <div className="footer__songInfo">
                            <h4>No song is playing</h4>
                            <p>...</p>
                        </div>
                    )} */}
        </div>

        <div className="footer__center">
          <ShuffleIcon className="footer__green" />
          <SkipPreviousIcon onClick={skipNext} className="footer__icon" />
          {playing ? (
            <PauseCircleOutlineIcon
              onClick={handlePlayPause}
              fontSize="large"
              className="footer__icon"
            />
          ) : (
            <PlayCircleOutlineIcon
              onClick={handlePlayPause}
              fontSize="large"
              className="footer__icon"
            />
          )}
          <SkipNextIcon onClick={skipPrevious} className="footer__icon" />
          <RepeatIcon className="footer__green" />
        </div>

        <div className="footer__right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider aria-labelledby="continuous-slider" />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Footer;
