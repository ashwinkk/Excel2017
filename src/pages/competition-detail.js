import React from "react";
import { connect } from "react-redux";
import ReactHtmlParser from "react-html-parser";

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
	}
	componentWillMount() {
		this.props.dispatch(fetchCompetitions());
	}
	componentWillReceiveProps(nextProps) {
		const competitionId = nextProps.match.params.type;
		console.log(competitionId);
		let competition = getObjectFromStore(nextProps.competitions, competitionId);
		this.setState({ competition });
	}
	render() {
		if (this.props.fetching) return <h1>Loading..</h1>;
		let competition = this.state.competition;
		let description = ReactHtmlParser(competition.description);
		let eventFormat = ReactHtmlParser(competition.eventFormat);
		let rules = ReactHtmlParser(competition.rules);
		let contacts = ReactHtmlParser(competition.contact_details);
		let buttons = <div />;
		if (competition.buttons)
			buttons = competition.buttons.map((button, index) => {
				return (
					<a href={button.link} className="reg_button">
						{button.name}
					</a>
				);
			});
		return (
			<div className="competitions-container">
				<img src={competition.cover} />
				<h2>
					{competition.name}
				</h2>
				<h3 className="container">
					Prize pool: {competition.prize_pool}
				</h3>
				<div className="button-container">
					{buttons}
				</div>

				<EventTabs
					tabLabels={["Description", "Event-Format", "Rules", "Contacts"]}
					activeTab={index => console.log(index)}
				>
					<div>
						{description}
					</div>
					<div>
						{eventFormat}
					</div>
					<div>
						{rules}
					</div>
					<div>
						{contacts}
					</div>
				</EventTabs>
			</div>
		);
	}
}

export default CompetitionDetail;
