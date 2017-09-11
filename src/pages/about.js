import React, { Component } from "react";
import { connect } from "react-redux";

import AboutCard from "../partials/about-card";

import { fetchAbout } from "../actions/about-actions";

import "../styles/about.css";

@connect(store => {
	return {
		about: store.about.collection
	};
})
export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			about: []
		};
	}

	componentWillMount() {
		this.props.dispatch(fetchAbout());
	}

	componentWillReceiveProps(nextProps) {
		let about = nextProps.about.map((obj, i) => (
			<AboutCard
				image={obj.image}
				contact={obj.contact}
				name={obj.name}
				designation={obj.designation}
				social={obj.social}
				key={obj.key}
			/>
		));
		this.setState({ about });
	}

	render() {
		return (
			<div className="row about-container">
				<h1 className="about-heading">Contacts</h1>
				<div className="about-wrapper">{this.state.about}</div>
			</div>
		);
	}
}
