import React, { Component } from "react";
import { Redirect } from "react-router";

import { connect } from "react-redux";

import { fetchCompetitions } from "../actions/competition-actions";
import DribbbleThumbnail from "../partials/dribbble-thumbnail";

import "../styles/competition.css";

@connect(store => {
	return {
		competitions: store.competitions.competitions
	};
})
class Competitions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hide: ""
		};
	}

	componentWillMount() {
		this.props.dispatch(fetchCompetitions());
	}

	render() {
		var boxes = this.props.competitions.map(competition => {
			return (
				<div className="cube-container">
					<div className="theCube">
						<div
							className="topFlip"
							style={{ backgroundColor: competition.color }}
						>
							<h1> Flip Me</h1>
						</div>
						<div
							className="bottomFlop"
							style={{ backgroundColor: competition.color }}
						>
							<h1> Oh you did it </h1>
						</div>
					</div>
				</div>
			);
		});
		return <div className="competitions-container">{boxes}</div>;
	}
}

export default Competitions;
