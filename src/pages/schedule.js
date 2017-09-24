import React from "react";
import { connect } from "react-redux";
import { Draggable } from "react-touch";

import { fetchSchedule } from "../actions/schedule-actions";
import SchedulePage from "../partials/schedule-page.js";
import ScheduleTab from "../partials/schedule-tab";
import LogoBar from "../partials/logo-bar";

import "../styles/schedule.css";

@connect(store => {
	return {
		schedule: store.schedule.collection
	};
})
class Schedule extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sponsors: [],
			active: 0
		};
	}

	componentWillMount() {
		if (this.props.schedule.length === 0) this.props.dispatch(fetchSchedule());
	}

	changePage(i){
		console.log(i);
		this.setState({active: i});
	}

	render() {
		let size = this.props.schedule.length;
		let schedule = this.props.schedule.map((obj, i) => (
			<SchedulePage key={i} events={obj.events}/>
		));
		let active = this.state.active;
		let action = this.changePage.bind(this);
		let tabs = this.props.schedule.map(function(obj,i){
			var a = (i==active);
			return(<ScheduleTab index={i} day={obj.day} active={a} click={action}/>);
		});
		let pos = { left: 0, top: 0 };
		return (
			<div className="schedule-content">
				<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" />
				<div className="schedule-box">
					<div className="schedule-box-padding"></div>
				  	<div className="tab-box">
						{tabs}
				  	</div>
					<div className="tabs-pane-container">
					  	<div className="tabs-pane-carousel" style={{width: (size*100)+"%", transform:"translateX(-" + active*100/size + "%)"}}>
				          	{schedule}
					  	</div>
					</div>
				</div>
			</div>
    	);
	}
}

export default Schedule;
