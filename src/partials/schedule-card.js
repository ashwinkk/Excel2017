import React from "react";
import { Link } from "react-router-dom";

import "../styles/schedule.css";

export default class ScheduleCard extends React.Component {
  render(){
    let visibility = this.props.active?"block":"none";
    return(
      <div className="schedule-card-box" style={{display: visibility}}>
        <div className="schedule-time-box">
            <span className="time">{this.props.event.start_time}</span>
            <span className="time">{this.props.event.end_time}</span>
        </div>
        <div className="schedule-desc-box">
            <span className="title">{this.props.event.name}</span>
            <span className="venue">{this.props.event.venue}</span>
            <span className="subtitle">{this.props.event.type}</span>
        </div>
      </div>
    );
  }
}
