import React, { useEffect, useState } from "react";
import SongRow from "./SongRow";
import Header from "../../components/layouts/Header";
import { useDataLayerValue } from "../../components/DataLayer";
import { useParams } from "react-router-dom";
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
  const [{ player }, dispatch] = useDataLayerValue();
  console.log("re", player, player);
  let { id } = useParams();

  useEffect(async () => {
    let playerFocused = await api.getPlayer(id);
    dispatch({
      type: "SET_PLAYER",
      player: playerFocused,
    });
    return () => {
      // cleanup
    };
  }, [id]);

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
      {/* <Header api={api} /> */}
      {player && (
        <>
          <div className="body__info">
            <div className="body__picture">
              <img className="body__picture" src={player.picture} alt="" />
            </div>
            <div className="body__infoContainer">
              <div className="body_player_names">
                <h2>{`${player.firstname} ${player.lastname}`}</h2>
              </div>
              <div className="body_player_info">
                <p>Date de naissance : {player.birthdate} </p>
                <p>Hauteur : {player.height} cm </p>
                <p>Poids : {player.weight} kg</p>
                <p>Position : {player.position}</p>
                <p>Pied fort : {player.strongFoot}</p>
              </div>
            </div>
          </div>

          <div className="body__songs">
            <h2 className="body_player_title">Evaluations</h2>
            <hr />
            {player.Criteria?.map((criterion) => {
              console.log("euuu vite", criterion);

              return (
                <SongRow
                  playSong={() => playSong(criterion.Evaluation.id)}
                  criterion={criterion}
                  picture={player.picture}
                />
              );
            })}

            <h2 className="body_player_title">Synthèse</h2>
            <hr />
            <div className="body_charts">
              <CriterionChart />
              <CriterionChart />
              <CriterionChart />
              <CriterionChart />
            </div>
            <h2 className="body_player_title">Statistiques</h2>
            <hr />

            <div className="body__songs__CriterionDetailsChart">
              <CriterionDetailChart />
            </div>

            <h2 className="body_player_title">Rapport scolaire</h2>
            <hr />
            <div>
              {!player.schoolReport ? (
                <PdfUploader api={api} />
              ) : (
                <PdfViewer api={api} path={player.schoolReport} />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PlayerDetail;
