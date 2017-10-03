import React from "react";
import { connect } from "react-redux";

import EventTabs from "../partials/event-tabs";
import LogoBar from "../partials/logo-bar";
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
			competition: {},
			render: false,
			renderElements: false,
			mounted: false
		};
		this.getCompetition = this.getCompetition.bind(this);
	}
	componentDidMount() {
		this.setState({ mounted: true });
		window.scrollTo(0, 0);
	}
	componentWillMount() {
		if (this.props.competitions.length === 0)
			this.props.dispatch(fetchCompetitions());
	}
	componentDidUpdate() {
		if (this.state.render === false) {
			this.setState({ render: true });
			setTimeout(() => {
				this.setState({ renderElements: true });
			}, 200);
		}
	}

	componentWillReceiveProps(nextProps) {}
	getCompetition() {
		const competitionId = this.props.match.params.type;
		return getObjectFromStore(this.props.competitions, competitionId);
	}
	render() {
		if (this.props.fetching) return <h1>Loading..</h1>;
		this.competition = this.getCompetition();
		console.log(this.competition);
		let buttons = <div />;
		if (this.competition.play !== undefined) {
			buttons = (
				<a
					href="http://play.excelmec.org"
					target="_blank"
					className="reg_button"
					style={{ background: "#ac2e16", padding: "10px 5px" }}
				>
					<img
						style={{ width: "50px" }}
						src="/static/anim-assets/play.png"
						alt="play-button"
					/>
				</a>
			);
		} else if (this.competition.buttons)
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
		let coverAnim = {
			transform: `scale(${this.state.renderElements ? 1 : 0})`
		};
		let transitionClassCover = this.state.renderElements
			? "animate-bounce"
			: "";
		let textTransition = this.state.renderElements ? 1 : 0;
		return (
			<div className="competition-container">
				<LogoBar />
				<img
					src={this.competition.cover}
					className={`cover-img ${transitionClassCover}`}
				/>
				<h2 style={{ opacity: textTransition }}>{this.competition.name}</h2>
				{this.competition.prize_pool !== "" ? (
					<h3 className="container" style={{ opacity: textTransition }}>
						Prize pool: {this.competition.prize_pool}
					</h3>
				) : null}
				<div className="button-container" style={{ opacity: textTransition }}>
					{buttons}
				</div>

				<EventTabs
					tabLabels={["Description", "Event-Format", "Rules", "Contacts"]}
					activeTab={index => index}
					render={this.state.renderElements}
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
