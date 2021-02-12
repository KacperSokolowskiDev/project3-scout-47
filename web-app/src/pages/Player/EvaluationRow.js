import React from "react";
import "./EvaluationRow.css";

function EvaluationRow({ criterion, playVideo, picture, description }) {
  return (
    <div className="evaluationRow" onClick={() => playVideo(criterion.id)}>
      <img className="evaluationRow__album" src={picture} alt="" />
      <div className="evaluationRow__info">
        <h1>{criterion.name}</h1>
        <p>
          {criterion.Evaluation.score}, {criterion.Evaluation.description}
        </p>
      </div>
    </div>
  );
}

export default EvaluationRow;
