import React from "react";
import { connect } from "react-redux";
import ReactHtmlParser from "react-html-parser";

import { fetchWorkshops } from "../actions/workshop-actions";
import { getObjectFromStore } from "../helpers/excel2017";
import EventTabs from "../partials/event-tabs";

import "../styles/workshop-detail.css";

@connect(store => {
	return {
		workshops: store.workshops.collection,
		fetching: store.workshops.fetchingWorkshops
	};
})
class WorkshopDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			workshop: {},
			activeIndex: 0,
			render: false,
			renderElements: false,
			mounted: false
		};
		this.handleTab = this.handleTab.bind(this);
		this.getWorkshop = this.getWorkshop.bind(this);
	}
	componentWillMount() {
		if (this.props.workshops.length === 0)
			this.props.dispatch(fetchWorkshops());
	}
	componentDidMount() {
		this.setState({ mounted: true });
	}
	componentDidUpdate() {
		if (this.state.render === false) {
			this.setState({ render: true });
			setTimeout(() => {
				this.setState({ renderElements: true });
			}, 200);
		}
	}
	getWorkshop() {
		const workshopId = this.props.match.params.type;
		return getObjectFromStore(this.props.workshops, workshopId);
	}
	updateTheme() {
		document.body.style.background = `url(${this.workshop.background}) ${this
			.workshop.accentColour}`;
		document.body.style.backgroundSize = "cover";
	}
	componentWillReceiveProps(nextProps) {}
	componentWillUnmount() {
		document.body.style.background = "";
	}
	handleTab(tabIndex) {
		this.setState({ activeIndex: tabIndex });
	}
	render() {
		if (this.props.fetching) return <h2>Loading...</h2>;
		this.workshop = this.getWorkshop();
		this.updateTheme();
		let coverAnim = {
			transform: `scale(${this.state.renderElements ? 1 : 0})`
		};
		let transitionClassCover = this.state.renderElements
			? "animate-bounce"
			: "";
		let textTransition = this.state.renderElements ? 1 : 0;
		return (
			<div className="workshop-container">
				<img
					src={this.workshop.image}
					alt={this.workshop.image}
					className={`cover-img ${transitionClassCover}`}
				/>
				<h2 style={{ color: this.props.accentColour, opacity: textTransition }}>
					{this.workshop.title}
				</h2>
				<a
					className="reg_button"
					target="_blank"
					href={this.workshop.register_link}
					style={{ opacity: textTransition }}
				>
					Register
				</a>
				<EventTabs
					render={this.state.renderElements}
					activeTab={this.handleTab}
					tabLabels={["Overview", "Schedule", "Particulars"]}
				>
					<div className="active-tab">{this.workshop.overview}</div>
					<div>{this.workshop.schedule}</div>
					<div>{this.workshop.particulars}</div>
				</EventTabs>
			</div>
		);
	}
}

export default WorkshopDetail;
