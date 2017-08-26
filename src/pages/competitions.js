import React from "react";
import ReactDOM from "react-dom";

import "../styles/competition.css";

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
		this.setConstants = this.setConstants.bind(this);
	}

	setConstants() {
		let container = ReactDOM.findDOMNode(this.refs["container"]);
		this.containerWidth = container.getBoundingClientRect().width;
		this.unitHeight = 350;
		if (window.innerWidth > 1400) this.boxNumber = 4;
		else if (window.innerWidth > 800) this.boxNumber = 4;
		else if (window.innerWidth > 600) this.boxNumber = 2;
		else this.boxNumber = 1;
		this.unitWidth = this.containerWidth / this.boxNumber;
		console.log(this.boxNumber);
		this.priorities = [];
		let i = 0,
			sum = 0,
			priority = 0;
		while (i < 17) {
			if (sum === this.boxNumber) sum = 0;
			priority = Math.ceil(Math.random() * Math.min(this.boxNumber - sum, 2));
			console.log(priority);
			this.priorities[i++] = priority;
			sum += priority;
		}
		this.setState({ render: true });
	}
	componentDidMount() {
		this.setConstants();
	}
	render() {
		let sum = 0,
			width = 0,
			left = 0,
			leftInc = 0,
			top = 0;
		const marginLeft = 5,
			marginTop = 20;
		let cards = this.priorities.map((priority, index) => {
			if (sum === this.boxNumber) {
				top += this.unitHeight + marginTop;
				left = 0;
				sum = 0;
				leftInc = 0;
			}
			width = this.unitWidth * priority - marginLeft;
			sum += priority;
			left = leftInc;
			leftInc = left + this.unitWidth * priority;
			if (priority === 1)
				return (
					<PortraitCard
						className="flex-box"
						style={{
							width: width + "px",
							backgroundColor: "gray",
							height: this.unitHeight + "px",
							left: left + "px",
							top: top + "px"
						}}
					/>
				);
			return (
				<div
					className="flex-box"
					style={{
						width: width + "px",
						backgroundColor: "gray",
						height: this.unitHeight + "px",
						left: left + "px",
						top: top + "px"
					}}
				/>
			);
		});
		top += this.unitHeight + marginTop * 2;
		return (
			<div className="flex-grid" ref="container" style={{ height: top }}>
				{cards}
			</div>
		);
	}
}

function PortraitCard(props) {
	return (
		<div className={props.className} style={props.style}>
			<img src={props.image} />
			<h2>
				{props.eventName}
			</h2>
		</div>
	);
}

export default Competition;
