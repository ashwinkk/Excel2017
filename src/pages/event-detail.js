import React, { Component } from "react";
import { connect } from "react-redux";

import { getObjectFromStore } from "../helpers/excel2017";
import { fetchEvent } from "../actions/event-actions";

import "../styles/event-detail.css";

@connect(store => {
	return {
		events: store.events.collection
	};
})
export default class EventDetail extends Component {
	componentWillMount() {
		if (this.props.events.length === 0) this.props.dispatch(fetchEvent());
	}
	getEvent() {
		const eventId = this.props.match.params.type;
		return getObjectFromStore(this.props.events, eventId);
	}

	render() {
		const { content, coverImage, title, tagLine } = this.getEvent();
		return (
			<div className="row event-detail">
				<div
					className="col-xs-12 col-md-6 event-cover"
					style={{ backgroundImage: `url(${coverImage})` }}
				/>
				<div className="col-xs-12 col-md-6 event-content">
					<h2 className="event-title">{title}</h2>
					<p className="event-tagline">{tagLine}</p>
					<p className="event-content-text">{content}</p>
				</div>
			</div>
		);
	}
}
