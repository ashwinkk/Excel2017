import React from "react";
import { Link } from "react-router-dom";

import "../styles/events.css";

export default class EventCard extends React.Component {
	render() {
		let style = {};
		console.log(this.props.render);
		if (this.props.render) {
			style.opacity = 1;
			style.transform = "translateY(0)";
		}
		return (
			<div
				className="event-card"
				style={{
					background: this.props.bgcolor,
					...style,
					...this.props.style
				}}
			>
				<div className="event-card-left">
					<Link to={`/events/${this.props.id}`}>
						<img className="event-card-thumbnail" src={this.props.thumbnail} />
					</Link>
				</div>
				<div className="event-card-right">
					<Link to={`/events/${this.props.id}`}>
						<h1 className="event-card-title">{this.props.title}</h1>
					</Link>
					<a className="event-card-overview">{this.props.overview}</a>
				</div>
			</div>
		);
	}
}

/*<a className="event-card-register" href={this.props.registerLink} target="_blank" >Register</a>*/
