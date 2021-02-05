import React, { useEffect } from 'react';
import { Player, Video } from 'video-react';
import { useDataLayerValue } from './../../DataLayer';

const VideoPlayer = ({api, mediaPlayer}) => {
  const [{ item }, dispatch] = useDataLayerValue();
  console.log("though", item)

  console.log(item)
  useEffect(() => {
    mediaPlayer.getMyCurrentPlaybackState().then((r) => {
        console.log(r);

        dispatch({
            type: "SET_PLAYING",
            playing: r.is_playing,
        });

        dispatch({
            type: "SET_ITEM",
            item: item,
        });
    });
  }, [item]);

  return (

     <Player>
       {item && item.video && (<source src={`http://localhost:5000/${item.video}`} />)}
      </Player>

  );
};

export default VideoPlayer;