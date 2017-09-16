import React from "react";
import { Link } from "react-router-dom";

import "../styles/sponsor.css";

export default class SponsorCard extends React.Component {
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
		console.clear();
		console.log(style);
		return (
			<div
				align="center"
				className="sponsor-card"
				style={{
					...style,
					...this.props.style
				}}
			>
				<div className="sponsor-img-container">
	                <img
						className="sponsor-img"
						src={this.props.cover}
					/>
				</div>
				<div className="sponsor-desc">
	                <span className="sponsor-name">{this.props.name}</span>
					<br/>
	                <span className="sponsor-designation">{this.props.designation}</span>
				</div>
			</div>
		);
	}
}
