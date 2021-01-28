import React, { Component } from "react";
import Navbar from "../../components/navbar/Index";
import LateralBar from "../../components/LateralBar/Index";
import "./styles.css";
import "./main.scss";

//Full Calendar
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default class Index extends Component {
  render() {
    return (
      <div className="agenda-page">
        <Navbar />
        <div className="agenda-page-container">
          <LateralBar />
          <div className="agenda-page-content">
            <h1 className="agenda-title">AGENDA</h1>
            <div>
              <FullCalendar
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin, interactionPlugin]}
                editable={true}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
