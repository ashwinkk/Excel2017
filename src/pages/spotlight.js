import React from "react";
import { connect } from "react-redux";

import { fetchSpotlight } from "../actions/spotlight-actions";
import SpotlightCard from "../partials/spotlight-card.js";
import LogoBar from "../partials/logo-bar";

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
			spotlight: [],
			render: false,
			renderCard: false,
			mounted: false
		};
	}
	componentDidMount() {
		this.setState({ mounted: true });
	}
	componentWillMount() {
		if (this.props.spotlight.length === 0)
			this.props.dispatch(fetchSpotlight());
	}
	componentDidUpdate() {
		if (this.state.render === false) {
			this.setState({ render: true });
			setTimeout(() => {
				this.setState({ renderCard: true });
			}, 200);
		}
	}
	componentWillUnmount() {
		this.setState({ render: false, renderCard: false });
		document.body.style.background = "";
	}
	render() {
		let spotlight = this.props.spotlight.map((obj, i) => (
			<SpotlightCard
				title={obj.title}
				id={obj.id}
				render={this.state.renderCard}
				style={{ transitionDelay: `${1 + (i + 1) * 0.1}s` }}
				overview={`${obj.overview.substr(0, 200).trim()}...`}
				thumbnail={obj.thumbnail}
				buttonName={obj.buttonName}
				bgcolor={obj.bgcolor}
				registerLink={obj.registerLink}
			/>
		));
		return (
			<div className="spotlight-container" style={{ textAlign: "left" }}>
				<LogoBar />
				{spotlight}
			</div>
		);
	}
}

export default Spotlight;
