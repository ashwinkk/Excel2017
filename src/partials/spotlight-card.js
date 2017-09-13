import React from "react";
import { Link } from "react-router-dom";

import "../styles/spotlight.css";

export default class SpotlightCard extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let style = {};
		console.log(this.props.render);
		if (this.props.render) {
			style.opacity = 1;
			style.transform = "translateY(0)";
		}
		return (
			<div
				className="spotlight-card"
				style={{
					background: this.props.bgcolor,
					...style,
					...this.props.style
				}}
			>
				<div className="spotlight-card-left">
					<Link to={"/spotlight/" + this.props.id}>
						<img
							className="spotlight-card-thumbnail"
							src={this.props.thumbnail}
						/>
					</Link>
				</div>
				<div className="spotlight-card-right">
					<Link to={"/spotlight/" + this.props.id}>
						<h1 className="spotlight-card-title">{this.props.title}</h1>
					</Link>
					<a className="spotlight-card-overview">{this.props.overview}</a>
					<a
						target="_blank"
						className="spotlight-card-register"
						href={this.props.registerLink}
					>
						Register
					</a>
				</div>
			</div>
		);
	}
}
