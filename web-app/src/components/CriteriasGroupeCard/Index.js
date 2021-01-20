import { Children } from "react";
import "./styles.css";

const Index = ({ download, listCriterias, groupe }) => {
  console.log("tout", listCriterias);
  console.log("groupe", groupe);
  console.log("downlaod", download);
  return (
    <div className="criteria-groupe-card-container">
      <div className="criteria-groupe-card-title">{groupe}</div>

      <div className="criteria-groupe-card-list">
        {download && listCriterias.length ? (
          listCriterias.map((data) => {
            console.log("map", data);
            if (data.groupe == groupe) {
              return <p className="criteria-groupe-card-item"> {data.name}</p>;
            }
          })
        ) : (
          <p> Pas de critère </p>
        )}
      </div>
    </div>
  );
};

export default Index;
