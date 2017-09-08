import React from "react";
import { connect } from "react-redux";

import EventTabs from "../partials/event-tabs";
import { getObjectFromStore } from "../helpers/excel2017";
import { fetchCompetitions } from "../actions/competition-actions";

import "../styles/competition-detail.css";

@connect(store => {
	return {
		competitions: store.competitions.competitions,
		fetching: store.competitions.fetchingCompetitions
	};
})
class CompetitionDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			competition: {}
		};
		this.getCompetition = this.getCompetition.bind(this);
	}
	componentWillMount() {
		if (this.props.competitions.length === 0)
			this.props.dispatch(fetchCompetitions());
	}
	getCompetition() {
		const competitionId = this.props.match.params.type;
		return getObjectFromStore(this.props.competitions, competitionId);
	}
	render() {
		if (this.props.fetching) return <h1>Loading..</h1>;
		this.competition = this.getCompetition();
		let buttons = <div />;
		if (this.competition.buttons)
			buttons = this.competition.buttons.map((button, index) => {
				return (
					<a
						href={button.link}
						target="_blank"
						className="reg_button"
						key={index}
					>
						{button.name}
					</a>
				);
			});
		return (
			<div className="competition-container">
				<img src={this.competition.cover} />
				<h2>{this.competition.name}</h2>
				<h3 className="container">Prize pool: {this.competition.prize_pool}</h3>
				<div className="button-container">{buttons}</div>

				<EventTabs
					tabLabels={["Description", "Event-Format", "Rules", "Contacts"]}
					activeTab={index => index}
				>
					<div>{this.competition.description}</div>
					<div>{this.competition.eventFormat}</div>
					<div>{this.competition.rules}</div>
					<div>{this.competition.contact_details}</div>
				</EventTabs>
			</div>
		);
	}
}

export default CompetitionDetail;
