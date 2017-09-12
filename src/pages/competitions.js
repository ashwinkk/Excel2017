import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Select from "react-select";
import { connect } from "react-redux";
import queryString from "query-string";

import "react-select/dist/react-select.css";
import { fetchCompetitions } from "../actions/competition-actions";
import CompetitionsDropdown from "../partials/CompetitionsDropdown";

import "../styles/competition.css";

@connect(store => {
	return {
		competitions: store.competitions.competitions
	};
})
class Competitions extends Component {
	constructor(props) {
		super(props);
		if (this.props.competitions.length === 0)
			this.props.dispatch(fetchCompetitions());
		let width = window.innerWidth - 70,
			rowNum = 0;
		if (window.innerWidth > 600) {
			rowNum = 4;
		} else if (window.innerWidth > 300) {
			rowNum = 3;
		}

		this.state = {
			hide: "",
			unitWidth: Math.floor(width / rowNum),
			filterDept: "all",
			filterCateg: "all",
			applyFilter: false,
			scale: 0
		};
		console.log(this.state);
		this.setWidths = this.setWidths.bind(this);
		this.setFilters = this.setFilters.bind(this);
	}

	setWidths() {
		let competitionsContainer = ReactDOM.findDOMNode(
			this.refs["competitions-container"]
		);
		if (competitionsContainer === null) return;
		let width = competitionsContainer.getBoundingClientRect().width,
			rowNum = 0,
			scrollBar = 0;
		// if (window.innerWidth > 1000) {
		// 	scrollBar = 12;
		// }
		if (window.innerWidth > 600) {
			rowNum = 4;
		} else if (window.innerWidth > 300) {
			rowNum = 3;
		}
		width -= scrollBar;
		this.setState({ unitWidth: Math.floor(width / rowNum), render: false });
	}

	componentDidMount() {
		this.setWidths();
		this.setFilters();
	}

	componentDidUpdate() {
		if (this.state.render === false) {
			this.setState({ render: true });
			setTimeout(() => {
				this.setState({ scale: 1 });
			}, 500);
		}
	}

	setFilters() {
		if (window.location.hash.indexOf("?") !== -1) {
			let query = queryString.parse(window.location.hash.split("?")[1]);
			this.setState({
				filterDept: query.dept || "all",
				filterCateg: query.category || "all"
			});
		}
	}

	componentWillMount() {}

	handleTouchStart(cube) {
		this.activeCube = ReactDOM.findDOMNode(this.refs[cube]);
		this.activeCube.style.transform = "scale(0.9)";
	}

	handleTouchEnd(cube) {
		this.activeCube = ReactDOM.findDOMNode(this.refs[cube]);
		this.activeCube.style.transform = "scale(1)";
	}

	applyFilter(type, filter) {
		if (filter === null)
			filter = {
				value: "all"
			};
		switch (type) {
			case "dept":
				this.setState({ filterDept: filter.value, applyFilter: true });
				break;
			case "categ":
				this.setState({ filterCateg: filter.value, applyFilter: true });
				break;
			default:
				return;
		}
	}

	render() {
		// console.log(this.state.applyFilter);
		// if (this.state.applyFilter) {
		// 	console.log("hehh");
		// 	let urlQuery = {};
		// 	if (this.state.filterCateg != "all")
		// 		urlQuery.categ = this.state.filterCateg;
		// 	if (this.state.filterDept != "all") urlQuery.dept = this.state.filterDept;
		// 	let queryParam = queryString.stringify(urlQuery);
		// 	return <Redirect to="competitions" params={{}} />;
		// }
		var boxes = this.props.competitions
			.filter(competition => {
				if (this.state.filterDept === "all" && this.state.filterCateg === "all")
					return true;
				if (
					this.state.filterDept !== competition.category &&
					this.state.filterDept !== "all"
				)
					return false;
				if (
					this.state.filterCateg !== competition.type &&
					this.state.filterCateg !== "all"
				)
					return false;
				return true;
			})
			.map((competition, index) => {
				let cubeDimensions;
				cubeDimensions = {
					width: 2 * Math.floor((this.state.unitWidth + 1) / 2),
					height: 2 * Math.floor((this.state.unitWidth + 1) / 2),
					transitionDelay: `${1 + index * 0.1}s`
				};
				const translateZVal = Math.round(cubeDimensions.width / 2);
				return (
					<Link key={index} to={`competitions/${competition.id}`}>
						<div
							className="cube-container"
							key={index}
							ref={`cube${index}`}
							style={{
								...cubeDimensions,
								transform: `scale(${this.state.scale})`
							}}
							onTouchStart={e => this.handleTouchStart(`cube${index}`)}
							onTouchEnd={e => this.handleTouchEnd(`cube${index}`)}
						>
							<div className="theCube">
								<div
									className="topFlip"
									style={{
										backgroundColor: competition.color,
										transform: `translateZ(${translateZVal}px)`
									}}
								>
									<div className="competition-front">
										<img
											src={competition.cover}
											alt={competition.cover.split("/")[-1]}
											style={{ width: `${translateZVal}px` }}
										/>
										<h2>{competition.name}</h2>
									</div>
								</div>
								<div
									className="bottomFlop"
									style={{
										backgroundColor: competition.color,
										transform: `rotateX(-90deg)translateZ(${translateZVal}px)`
									}}
								>
									<p>{competition.shortDes}</p>
								</div>
							</div>
						</div>
					</Link>
				);
			});
		let filterDepts = [
			{ value: "all", label: "All" },
			{
				value: "CS",
				label: "Compter Science"
			},
			{ value: "EC", label: "Electronics" },
			{ value: "RB", label: "Robotics" },
			{ value: "NT", label: "Non-Tech" }
		];
		let filterCateg = [
			{ value: "all", label: "All" },
			{ value: "on", label: "online" },
			{ value: "off", label: "offline" }
		];
		return (
			<div className="competitions-page">
				<div className="filters">
					<div className="page-head">
						<h2>Competitions</h2>
					</div>
					<div className="filter-list">
						<div>
							<CompetitionsDropdown
								items={filterDepts}
								getValue={value => this.applyFilter("dept", { value })}
							/>
						</div>
						<div>
							<CompetitionsDropdown
								items={filterCateg}
								getValue={value => this.applyFilter("categ", { value })}
							/>
						</div>
					</div>
				</div>
				<div className="competitions-container" ref="competitions-container">
					{boxes}
				</div>
			</div>
		);
	}
}

export default Competitions;
