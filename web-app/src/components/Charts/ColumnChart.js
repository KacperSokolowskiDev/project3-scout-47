import React, { Component } from "react";
import Chart from "react-apexcharts";
class ColumnChart extends Component {
  state = {
    series: [
      {
        data: [21, 22, 10, 28, 16, 21, 13, 30],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        background: "#fff",
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      title: {
        text: "Meilleur joueurs du mois",
        align: "center",
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          ["Eden", "Hasard"],
          ["Mohamed", "Salah"],
          ["Ivan", "Rakitiç"],
          ["Cristiano", "Ronaldo"],
          ["Frank", "De Jong"],
          ["Phillipe", "Coutinho"],
          ["Jordi", "Alba"],
          ["Lionel", "Messi"],
        ],
        labels: {
          style: {
            fontSize: "12px",
          },
        },
      },
    },
  };
  render() {
    return (
      <div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="500"
        />
      </div>
    );
  }
}
export default ColumnChart;
