import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { fetchCompetitions } from "../actions/competition-actions";

import "../styles/competition.css";

@connect(store => {
	return {
		competitions: store.competitions.competitions,
		priorities: store.competitions.priorities,
		filter: store.competitions.filter
	};
})
class Competition extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			render: false
		};
		this.containerWidth = 0;
		this.unitWidth = 0;
		this.unitHeight = 0;
		this.priorities = [];
		this.top = 0;
		this.setConstants = this.setConstants.bind(this);
		this.filterEvents = this.filterEvents.bind(this);
		this.renderCards = this.renderCards.bind(this);
		this.applyFilter = this.applyFilter.bind(this);
	}

	componentWillMount() {
		this.props.dispatch(fetchCompetitions());
	}

	setConstants(nextProps) {
		let container = ReactDOM.findDOMNode(this.refs["container"]);
		this.containerWidth = container.getBoundingClientRect().width;
		this.unitHeight = 350;
		if (window.innerWidth > 1400) this.boxNumber = 4;
		else if (window.innerWidth > 800) this.boxNumber = 4;
		else if (window.innerWidth > 600) this.boxNumber = 2;
		else this.boxNumber = 1;
		this.unitWidth = this.containerWidth / this.boxNumber;
		this.priorities = [];
		let i = 0,
			sum = 0,
			priority = 0;
		while (i < nextProps.competitions.length) {
			if (sum === this.boxNumber) sum = 0;
			priority = Math.ceil(Math.random() * Math.min(this.boxNumber - sum, 2));
			this.priorities[i++] = priority;
			sum += priority;
		}
		if (nextProps.priorities.length == 0)
			this.props.dispatch({
				type: "ASSIGN_PRIORITY",
				payload: this.priorities
			});
	}
	componentWillReceiveProps(nextProps) {
		this.setConstants(nextProps);
	}

	filterEvents() {
		this.props.dispatch({ type: "APPLY_FILTER", payload: "CS" });
		this.props.dispatch({ type: "HIDE_FILTERED" });
	}

	applyFilter() {
		return this.props.competitions.filter(competition => {
			return true;
		});
	}

	renderCards(filteredCards, opacity) {
		let sum = 0,
			width = 0,
			left = 0,
			leftInc = 0,
			top = 0,
			className;
		const marginLeft = 5,
			marginTop = 20;
		let cards = filteredCards.map((competition, index) => {
			if (sum === this.boxNumber) {
				top += this.unitHeight + marginTop;
				left = 0;
				sum = 0;
				leftInc = 0;
			}
			width = this.unitWidth * competition.priority - marginLeft;
			sum += competition.priority;
			left = leftInc;
			leftInc = left + this.unitWidth * competition.priority;
			if (competition.priority === 1) className = "portrait";
			else className = "landscape";
			return (
				<Card
					className={className}
					image={competition.cover}
					eventName={competition.name}
					key={index}
					style={{
						width: width + "px",
						backgroundColor: "gray",
						height: this.unitHeight + "px",
						left: left + "px",
						top: top + "px",
						transform: `scale(${competition.hidden === true ? 0 : 1})`,
						transition: "transform 0.3s"
					}}
				/>
			);
		});
		this.top = top;
		return cards;
	}

	render() {
		let filteredCards = this.applyFilter();
		let cards = this.renderCards(filteredCards, 1);
		let marginTop = 20;
		this.top += this.unitHeight + marginTop * 2;
		return (
			<div>
				<button onClick={this.filterEvents}>Hello</button>
				<div className="flex-grid" ref="container" style={{ height: this.top }}>
					{cards}
				</div>
			</div>
		);
	}
}

function Card(props) {
	return (
		<div className={props.className} style={props.style}>
			<img src={props.image} />
			<h2>{props.eventName}</h2>
		</div>
	);
}

export default Competition;
