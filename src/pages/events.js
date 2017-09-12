import React from "react";
import { connect } from "react-redux";

import { fetchEvent } from "../actions/event-actions";
import EventCard from "../partials/event-card.js";

import "../styles/workshop-detail.css";

@connect(store => {
	return {
		events: store.events.collection
	};
})
class Events extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			events: []
		};
	}
	componentWillMount() {
		this.props.dispatch(fetchEvent());
	}
	componentWillReceiveProps(nextProps) {
		let events = nextProps.events.map((obj, i) => (
			<EventCard
				title={obj.title}
				key={obj.id}
				overview={`${obj.overview.substr(0, 200).trim()}...`}
				thumbnail={obj.thumbnail}
				bgcolor={obj.bgcolor}
				registerLink={obj.registerLink}
			/>
		));
		this.setState({ events });
	}
	componentWillUnmount() {
		document.body.style.background = "";
	}
	render() {
		return (
			<div className="spotlight-container" style={{ textAlign: "left" }}>
				{this.state.events}
			</div>
		);
	}
}

export default Events;
