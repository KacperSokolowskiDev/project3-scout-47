import React from "react";
import SongRow from "./SongRow";
import Header from "../../components/layouts/Header";
import { useDataLayerValue } from "../../components/DataLayer";
import "./Player.css";

import "./PlayerDetailBody.css";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CriterionChart from "../../components/modules/charts/CriterionChart";
import CriterionDetailChart from "../../components/modules/charts/CriterionDetailChart";
import PdfUploader from "../../components/modules/pdf/PdfUploader";
import PdfViewer from "../../components/modules/pdf/PdfViewer";
// import PlayerDerailBody from './PlayerDetailBody'
// import "./PlayerDetailBody.css";

function PlayerDetail({ api, mediaPlayer }) {
  const [{ my_players }, dispatch] = useDataLayerValue();
  console.log("re", my_players && my_players);

  const playPlayer = (id) => {
    mediaPlayer
      .play({
        context_uri: `api:player:1`,
      })
      .then((res) => {
        mediaPlayer.getMyCurrentPlayingTrack().then((r) => {
          console.log("in play order", r);
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
    console.log("in play son, pas id ", id);
    mediaPlayer
      .play({
        uris: [`api:track:${id}`],
      })
      .then((res) => {
        mediaPlayer.getMyCurrentPlayingTrack(id).then((r) => {
          console.log("got it ?", r);

          dispatch({
            type: "SET_ITEM",
            item: r,
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
      <Header api={api} />
      {my_players && (
        <>
          <div className="body__info">
            <img src={my_players[0].picture} alt="" />
            <div className="body__infoText">
              <strong>PLAYER</strong>
              <h2>{`${my_players[0].firstname} ${my_players[0].lastname}`}</h2>
              <p>{`#${my_players[0].strongFoot} #${my_players[0].height} #${my_players[0].position}`}</p>
            </div>
          </div>

          <div className="body__songs">
            <div className="body__icons">
              <PlayCircleFilledIcon
                className="body__shuffle"
                onClick={playPlayer}
              />
              <FavoriteIcon fontSize="large" />
              <MoreHorizIcon />
            </div>

            <h2 className="body_player_title">Records</h2>
            <hr />
            {my_players[0].Criteria?.map((criterion) => {
              console.log("euuu vite", criterion);

              return (
                <SongRow
                  playSong={() => playSong(criterion.Evaluation.id)}
                  criterion={criterion}
                  picture={my_players[0].picture}
                />
              );
            })}

            <h2 className="body_player_title">Synthesis</h2>
            <hr />
            <CriterionChart />
            <CriterionChart />
            <CriterionChart />
            <CriterionChart />

            <h2 className="body_player_title">Metrics</h2>
            <hr />
            <div className="body__songs__CriterionDetailsChart">
              <CriterionDetailChart />
            </div>

            <h2 className="body_player_title">School Report</h2>
            <hr />
            <div>
              {!my_players[0].schoolReport ? (
                <PdfUploader api={api} />
              ) : (
                <PdfViewer api={api} path={my_players[0].schoolReport} />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PlayerDetail;
