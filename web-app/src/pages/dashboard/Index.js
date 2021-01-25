import React from "react";
import Navbar from "../../components/navbar/Index";
import LateralBar from "../../components/LateralBar/Index";
import "./styles.css";

import CanvasJSReact from "./canvasJS/canvasjs.react";
// var CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Index() {
  const optionsRound = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2",
    title: {
      text: "Pourcentage de Recrutements par Scouts",
    },
    data: [
      {
        type: "pie",
        indexLabel: "{label}: {y}%",
        startAngle: -90,
        dataPoints: [
          { y: 20, label: "Scout 1" },
          { y: 30, label: "Scout 2" },
          { y: 8, label: "Scout 3" },
          { y: 12, label: "Scout 4" },
          { y: 30, label: "Scout 5" },
        ],
      },
    ],
  };
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: {
      text: "Joueurs Suivis Par Criterias",
    },
    axisY: {
      includeZero: true,
    },
    data: [
      {
        type: "column",
        indexLabelFontColor: "#5A5757",
        indexLabelPlacement: "outside",
        dataPoints: [
          { label: "Yanis", y: 35 },
          { label: "Greg", y: 15 },
          { label: "Kacper", y: 25 },
          { label: "Jonas", y: 30 },
          { label: "Norane", y: 28 },
        ],
      },
    ],
  };
  return (
    <div className="dashboard-page">
      <Navbar />
      <div className="dashboard-page-container">
        <LateralBar />
        <div className="dashboard-page-content">
          <h1 className="dashboard-title">DASHBOARD</h1>
          <div className="charts">
            <CanvasJSChart options={options} />
            <CanvasJSChart options={optionsRound} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Index;
