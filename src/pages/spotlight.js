import React from "react";
import { connect } from "react-redux";

import { fetchSpotlight } from "../actions/spotlight-actions";
import SpotlightCard from "../partials/spotlight-card.js";

import "../styles/workshop-detail.css";

@connect(store => {
	return {
		spotlight: store.spotlight.collection
	};
})
class Spotlight extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			spotlight: []
		};
	}
	componentWillMount() {
		this.props.dispatch(fetchSpotlight());
	}
	componentWillReceiveProps(nextProps) {
		let spotlight = nextProps.spotlight.map((obj, i) => (
			<SpotlightCard
				title={obj.title}
				key={obj.id}
				overview={`${obj.overview.substr(0, 200).trim()}...`}
				thumbnail={obj.thumbnail}
				bgcolor={obj.bgcolor}
			/>
		));
		this.setState({ spotlight });
	}
	componentWillUnmount() {
		document.body.style.background = "";
	}
	render() {
		return (
			<div className="spotlight-container" style={{ textAlign: "center" }}>
				{this.state.spotlight}
			</div>
		);
	}
}

export default Spotlight;
