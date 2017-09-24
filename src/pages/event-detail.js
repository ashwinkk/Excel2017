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
	constructor(props) {
		super(props);
		this.state = {
			viewportImage: ""
		};
		this.getEvent = this.getEvent.bind(this);
		this.viewImage = this.viewImage.bind(this);
		this.closeViewport = this.closeViewport.bind(this);
	}

	componentWillMount() {
		if (this.props.events.length === 0) this.props.dispatch(fetchEvent());
	}

	getEvent() {
		const eventId = this.props.match.params.type;
		console.log(this.props.events);
		return getObjectFromStore(this.props.events, eventId);
	}

	viewImage(url) {
		this.setState({ viewportImage: url });
	}

	closeViewport() {
		this.setState({ viewportImage: "" });
	}

	render() {
		const { content, coverImage, images } = this.getEvent();
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
					<div className="event-pics">
						{images.map((image, index) => {
							return (
								<div className="square-container">
									<img
										src={image}
										alt={image}
										onClick={e => this.viewImage(image)}
									/>
								</div>
							);
						})}
					</div>
				</div>
				<div
					className="event-viewport"
					style={{ zIndex: this.state.viewportImage === "" ? -1 : 101 }}
				>
					<img src={this.state.viewportImage} />
					<div className="event-viewport-close" onClick={this.closeViewport}>
						&times;
					</div>
				</div>
			</div>
		);
	}
}
