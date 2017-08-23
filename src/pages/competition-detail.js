import React from "react";
import { connect } from "react-redux";
import ReactHtmlParser from "react-html-parser";

import EventTabs from "../partials/event-tabs";
import { getObjectFromStore } from "../helpers/excel2017";
import { fetchCompetitions } from "../actions/competition-actions";

import "../styles/competition-detail.css";

@connect(store => {
	return {
		competitions: store.competitions.competitions
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
		let competition = getObjectFromStore(nextProps.competitions, competitionId);
		this.setState({ competition });
	}
	render() {
		console.log(this.props.match);
		let description = ReactHtmlParser(this.state.competition.description);
		let eventFormat = ReactHtmlParser(this.state.competition.eventFormat);
		let rules = ReactHtmlParser(this.state.competition.rules);
		let contacts = ReactHtmlParser(this.state.competition.contact_details);
		return (
			<div className="competitions-container">
				<img src={this.state.competition.cover} />
				<h2>
					{this.state.competition.name}
				</h2>
				<h3>
					Prize pool: {this.state.competition.prize_pool}
				</h3>
				<a
					className="reg_button"
					target="_blank"
					href="https://goo.gl/forms/pG14zHrTNhnkQVD42"
				>
					Register
				</a>
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
