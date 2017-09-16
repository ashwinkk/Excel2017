import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchSponsors } from "../actions/sponsors-actions";
import LogoBar from "../partials/logo-bar";
import SponsorCard from "../partials/sponsor-card";


@connect(store => {
	return {
		sponsors: store.sponsors.collection
	};
})
export default class Sponsors extends Component {
    constructor(props) {
		super(props);
		this.state = {
			sponsors: [],
			render: false,
			renderCard: false,
			mounted: false
		};
	}
	componentDidMount() {
		this.setState({ mounted: true });
	}
	componentWillMount() {
		if (this.props.sponsors.length === 0)
			this.props.dispatch(fetchSponsors());
	}
	componentDidUpdate() {
		if (this.state.render === false) {
			this.setState({ render: true });
			setTimeout(() => {
				console.log("old" + this.state.renderCard);
				this.setState({ renderCard: true });
				console.log("new" + this.state.renderCard);
			}, 200);
		}
	}
	componentWillUnmount() {
		this.setState({ render: false, renderCard: false });
		document.body.style.background = "";
	}
	render() {
		let sponsors = this.props.sponsors.map((obj, i) => (
			<SponsorCard
                cover={obj.cover}
                name={obj.name}
                designation={obj.designation}
				render={this.state.renderCard}
                style={{ transitionDelay: `${1 + (i + 1) * 0.1}s` }}
            />
		));
		return (
			<div className="sponsors-container" style={{ textAlign: "left" , background: "#eee" }}>
				<LogoBar />
				{sponsors}
			</div>
		);
	}
}
