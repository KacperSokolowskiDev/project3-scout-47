import React from 'react'
import "./SongRow.css";

function SongRow({ criterion, playSong, picture }) {
 
  return (
    <div className="songRow" onClick={() => playSong(criterion.id)}>
      <img className="songRow__album" src={picture} alt="" />
      <div className="songRow__info">
        <h1>{criterion.name}</h1>
        <p>
          {/* {criterion.Evaluation.map((artist) => artist.name).join(", ")} -{" "} */}
          {criterion.Evaluation.name}
          {criterion.Evaluation.score}
        </p>
      </div>
    </div>
  );
}

export default SongRow
