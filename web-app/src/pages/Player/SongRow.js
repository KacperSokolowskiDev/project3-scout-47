import React from "react";
import "./SongRow.css";

function SongRow({ criterion, playSong, picture, description }) {
  return (
    <div className="songRow" onClick={() => playSong(criterion.id)}>
      <img className="songRow__album" src={picture} alt="" />
      <div className="songRow__info">
        <h1>{criterion.name}</h1>
        <p>
          {/* {criterion.Evaluation.map((artist) => artist.name).join(", ")} -{" "} */}
          {criterion.Evaluation.score}, {criterion.Evaluation.description}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
