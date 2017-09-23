import React from "react";
import { connect } from "react-redux";

import { fetchSpotlight } from "../actions/spotlight-actions";
import ScheduleCard from "../partials/schedule-card.js";
import LogoBar from "../partials/logo-bar";

import "../styles/schedule.css";

class Schedule extends React.Component {
	render() {
		return (
      <div style={{background: "#1881c3", minHeight: "100%", padding: "100px"}}>
        <div className="schedule-box">
					<div className="schedule-box-padding"></div>
          <div className="tab-box">
            <div className="tab">Wednesday, 4th Oct</div>
            <div className="tab">Thursday, 5th Oct</div>
            <div className="tab tab-active">Friday, 6th Oct</div>
            <div className="tab">Saturday, 7th Oct</div>
          </div>
          <div className="tab-panes">
            <div className="left-panel">
							<span className="category active">All Events</span>
							<span className="category">Tech</span>
							<span className="category">Non-Tech</span>
            </div>
            <div className="right-panel">
							<ScheduleCard />
            </div>
          </div>
        </div>
      </div>
    );
	}
}

export default Schedule;
