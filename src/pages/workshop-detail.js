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
		console.log(nextProps);
		const workshop = getObjectFromStore(nextProps.workshops, workshopId);
		console.log(workshop);
		this.setState({ workshop });
	}
	handleTab(tabIndex) {
		this.setState({ activeIndex: tabIndex });
	}
	render() {
		let WorkShopTabContent = [
			ReactHtmlParser(this.state.workshop.overview),
			ReactHtmlParser(this.state.workshop.schedule),
			ReactHtmlParser(this.state.workshop.particulars)
		];
		let activeContent = WorkShopTabContent[this.state.activeIndex];
		return (
			<div className="container workshop-container">
				<h1>
					{this.state.workshop.title}
				</h1>
				<EventTabs
					activeTab={this.handleTab}
					tabLabels={["Overview", "Schedule", "Particulars"]}
				/>
				<div>
					{activeContent}
				</div>
			</div>
		);
	}
}

export default WorkshopDetail;
