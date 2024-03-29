import React from "react";
import { connect } from "react-redux";

import { fetchEvent } from "../actions/event-actions";
import EventCard from "../partials/event-card.js";
import LogoBar from "../partials/logo-bar";

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
			events: [],
			render: false,
			renderCard: false,
			mounted: false
		};
	}
	componentDidMount() {
		this.setState({ mounted: true });
	}
	componentWillMount() {
		if (this.props.events.length === 0) this.props.dispatch(fetchEvent());
	}
	componentDidUpdate() {
		if (this.state.render === false) {
			this.setState({ render: true });
			setTimeout(() => {
				this.setState({ renderCard: true });
			}, 200);
		}
	}
	componentWillUnmount() {
		document.body.style.background = "";
	}
	render() {
		let events = this.props.events.map((obj, i) => (
			<EventCard
				title={obj.title}
				id={obj.id}
				render={this.state.renderCard}
				style={{ transitionDelay: `${1 + (i + 1) * 0.1}s` }}
				overview={`${obj.overview.substr(0, 200).trim()}...`}
				thumbnail={obj.thumbnail}
				bgcolor={obj.bgcolor}
				registerLink={obj.registerLink}
			/>
		));
		return (
			<div className="spotlight-container" style={{ textAlign: "left" }}>
				<LogoBar />
				{events}
			</div>
		);
	}
}

export default Events;
