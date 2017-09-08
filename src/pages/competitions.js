import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

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
			hide: "",
			unitWidth: 0
		};
		this.setWidths = this.setWidths.bind(this);
	}

	setWidths() {
		let competitionsContainer = ReactDOM.findDOMNode(
			this.refs["competitions-container"]
		);
		if (competitionsContainer === null) return;
		let width = competitionsContainer.getBoundingClientRect().width,
			rowNum = 0;
		console.log(width);
		if (window.innerWidth > 600) {
			rowNum = 4;
		} else if (window.innerWidth > 300) {
			rowNum = 3;
		}
		this.setState({ unitWidth: Math.floor(width / rowNum) });
	}

	componentDidMount() {
		this.setWidths();
	}

	componentWillMount() {
		console.log(this.props.competitions.length);
		if (this.props.competitions.length === 0)
			this.props.dispatch(fetchCompetitions());
	}

	handleTouchStart(cube) {
		this.activeCube = ReactDOM.findDOMNode(this.refs[cube]);
		this.activeCube.style.transform = "scale(0.9)";
	}

	handleTouchEnd(cube) {
		this.activeCube = ReactDOM.findDOMNode(this.refs[cube]);
		this.activeCube.style.transform = "scale(1)";
	}

	render() {
		var boxes = this.props.competitions.map((competition, index) => {
			return (
				<Link to={`competitions/${competition.id}`}>
					<div
						className="cube-container"
						key={index}
						style={{
							width: this.state.unitWidth,
							height: this.state.unitWidth
						}}
						ref={`cube${index}`}
						onTouchStart={e => this.handleTouchStart(`cube${index}`)}
						onTouchEnd={e => this.handleTouchEnd(`cube${index}`)}
					>
						<div className="theCube">
							<div
								className="topFlip"
								style={{ backgroundColor: competition.color }}
							>
								<img
									src={competition.cover}
									alt={competition.cover.split("/")[-1]}
								/>
								<h2>{competition.name}</h2>
							</div>
							<div
								className="bottomFlop"
								style={{ backgroundColor: competition.color }}
							>
								<h1> Oh you did it </h1>
							</div>
						</div>
					</div>
				</Link>
			);
		});
		return (
			<div className="competitions-container" ref="competitions-container">
				{boxes}
			</div>
		);
	}
}

export default Competitions;
