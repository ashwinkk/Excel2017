import React, { Component } from "react";
import { connect } from "react-redux";

import { getObjectFromStore } from "../helpers/excel2017";
import { fetchEvent } from "../actions/event-actions";

import "../styles/event-detail.css";

@connect(store => {
	return {
		events: store.events.collection,
		fetching: store.events.fetchingEvents
	};
})
export default class EventDetail extends Component {
	componentWillMount() {
		if (this.props.events.length === 0) this.props.dispatch(fetchEvent());
	}
	getEvent() {
		const eventId = this.props.match.params.type;
		console.log(this.props.events);
		return getObjectFromStore(this.props.events, eventId);
	}

	render() {
		const { content, coverImage } = this.getEvent();
		if (content === undefined) return <h2>Loading..</h2>;
		console.log(JSON.stringify(content));
		return (
			<div className="row event-detail">
				<div
					className="col-xs-12 col-md-6 event-cover"
					style={{ backgroundImage: `url(${coverImage})` }}
				/>
				<div className="col-xs-12 col-md-6 event-content">
					{content.map((section, index) => {
						return (
							<div key={index}>
								<h2 className="event-title">{section.title}</h2>
								<p className="event-content-text">{section.desc}</p>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
