import React from "react";
import { connect } from "react-redux";
import ReactHtmlParser from "react-html-parser";

import { fetchWorkshops } from "../actions/workshop-actions";
import { getObjectFromStore } from "../helpers/excel2017";
import EventTabs from "../partials/event-tabs";

import "../styles/workshop-detail.css";

@connect(store => {
	return {
		workshops: store.workshops.collection
	};
})
class WorkshopDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			workshop: {},
			activeIndex: 0
		};
		this.handleTab = this.handleTab.bind(this);
	}
	componentWillMount() {
		this.props.dispatch(fetchWorkshops());
	}
	componentWillReceiveProps(nextProps) {
		const workshopId = nextProps.match.params.type;
		let workshop = getObjectFromStore(nextProps.workshops, workshopId);
		workshop.overview = ReactHtmlParser(workshop.overview);
		workshop.schedule = ReactHtmlParser(workshop.schedule);
		workshop.particulars = ReactHtmlParser(workshop.particulars);
		this.setState({ workshop });
		document.body.style.background = `url(${workshop.background}) ${workshop.accentColour}`;
		document.body.style.backgroundSize = "cover";
	}
	componentWillUnmount() {
		document.body.style.background = "";
	}
	handleTab(tabIndex) {
		this.setState({ activeIndex: tabIndex });
	}
	render() {
		return (
			<div className="workshop-container">
				<img src={this.state.workshop.image} alt={this.state.workshop.image} />
				<h2>
					{this.state.workshop.title}
				</h2>
				<a
					className="reg_button"
					target="_blank"
					href={this.state.workshop.register_link}
				>
					Register
				</a>
				<EventTabs
					activeTab={this.handleTab}
					tabLabels={["Overview", "Schedule", "Particulars"]}
				>
					<div className="active-tab">
						{this.state.workshop.overview}
					</div>
					<div>
						{this.state.workshop.schedule}
					</div>
					<div>
						{this.state.workshop.particulars}
					</div>
				</EventTabs>
			</div>
		);
	}
}

export default WorkshopDetail;
