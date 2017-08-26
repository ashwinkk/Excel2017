import React from "react";
import ReactDOM from "react-dom";
import { Draggable } from "react-touch";

import "../styles/event-tabs.css";

class EventTabs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			height: 0
		};
		this.dragHor = false;
		this.dragVer = false;
		this.initial = 0;
		this.width = 0;
		this.contentPos = 0;
		this.tabPos = 0;
		this.handleEndDragContainer = this.handleEndDragContainer.bind(this);
		this.handleDragContainer = this.handleDragContainer.bind(this);
		this.moveContent = this.moveContent.bind(this);
		this.handleDragTab = this.handleDragTab.bind(this);
		this.handleEndDragTab = this.handleEndDragTab.bind(this);
		this.moveTab = this.moveTab.bind(this);
		this.seekTab = this.seekTab.bind(this);
		this.seekContent = this.seekContent.bind(this);
	}
	handleClick(e, index) {
		this.props.activeTab(index);
		this.hightlightTab(e.target);
	}

	hightlightTab(tabElement) {
		let highlighter = document.getElementById("highlighter");
		this.tabPos = tabElement.offsetLeft - highlighter.offsetLeft;
		this.seekTab(this.tabPos, true);
	}

	componentDidMount() {
		let cont = ReactDOM.findDOMNode(this.refs["tab-content-container"]);
		this.width =
			cont.getBoundingClientRect().width / this.props.children.length;
		let tabContainer = ReactDOM.findDOMNode(this.refs["tab"]);
		this.tabContainer = tabContainer.getBoundingClientRect();
	}

	shiftTab(index) {
		let p;
		let cont = ReactDOM.findDOMNode(this.refs["tab-content-container"]);
		this.width = cont.getBoundingClientRect().width;
		this.contentPos = this.width * index;
		this.seekContent(this.contentPos, true);
	}

	handleDragContainer(pos) {
		if (Math.abs(pos.left) < Math.abs(pos.top)) this.dragVer = true;
		else this.dragHor = true;
		if (this.dragVer) return;
		if (Math.abs(pos.left) > 0) this.contentNext = pos.left < 0;
		this.contentPos += pos.left;
		if (this.contentPos > 0) this.contentPos = 0;
		else if (
			this.contentPos <=
			-(this.props.children.length - 1) * this.width
		) {
			this.contentPos = -(this.props.children.length - 1) * this.width;
		}
		this.seekContent(this.contentPos);
	}

	handleEndDragContainer() {
		this.dragHor = this.dragVer = false;
		let travel = Math.abs(this.contentPos % this.width);
		if (this.contentNext === false) travel = this.width - travel;
		let restorePos = true;
		let seekFactor = travel;
		if (travel > this.width / 10) {
			restorePos = false;
			seekFactor = Math.abs(this.width - travel);
		}
		let direction = restorePos ? 1 : -1;
		if (this.contentNext === false) direction = -direction;
		this.contentPos = this.contentPos + direction * seekFactor;
		this.seekContent(this.contentPos, true);
	}
	moveContent(delta, transition) {
		let cont = ReactDOM.findDOMNode(this.refs["tab-content-container"]);
		if (transition) cont.style.transition = "transform 0.3s";
		cont.style.transform = "translateX(" + delta + "px)";
		setTimeout(() => {
			cont.style.transition = "";
		}, 400);
	}

	moveTab(delta, transition) {
		let tabHighligher = ReactDOM.findDOMNode(this.refs["tab-highlighter"]);
		if (transition) tabHighligher.style.transition = "transform 0.3s";
		tabHighligher.style.transform = "translateX(" + delta + "px)";
		setTimeout(() => {
			tabHighligher.style.transition = "";
		}, 300);
	}

	handleDragTab(pos) {
		this.contentNext = pos.left > 0;
		this.tabPos += pos.left;
		if (
			this.tabPos >
			this.tabContainer.width * (1 - 1 / this.props.children.length)
		)
			this.tabPos =
				this.tabContainer.width * (1 - 1 / this.props.children.length);
		else if (this.tabPos < 0) this.tabPos = 0;
		this.seekTab(this.tabPos);
	}

	handleEndDragTab() {
		let travel = Math.abs(
			this.tabPos % (this.tabContainer.width / this.props.children.length)
		);
		if (this.contentNext === false)
			travel = this.tabContainer.width / this.props.children.length - travel;
		let restorePos = true;
		let seekFactor = travel;
		if (travel > this.tabContainer.width / (4 * this.props.children.length)) {
			restorePos = false;
			seekFactor = Math.abs(
				this.tabContainer.width / this.props.children.length - travel
			);
		}
		let direction = restorePos ? -1 : 1;
		if (this.contentNext === false) direction = -direction;
		this.tabPos = this.tabPos + direction * seekFactor;
		this.seekTab(this.tabPos, true);
	}

	seekTab(position, transition) {
		this.contentPos =
			-1 *
			this.tabPos *
			(this.width * this.props.children.length) /
			this.tabContainer.width;
		this.moveContent(this.contentPos, transition);
		this.moveTab(position, transition);
	}

	seekContent(position, transition) {
		this.tabPos = Math.abs(
			this.contentPos *
				this.tabContainer.width /
				(this.props.children.length * this.width)
		);
		this.moveTab(this.tabPos, transition);
		this.moveContent(position, transition);
	}

	render() {
		let tabArray = this.props.tabLabels;
		let childNodes = this.props.children;
		let tabWidth = 100 / childNodes.length + "%";
		let pos = { left: 0, top: 0 };
		let trackTheme = {
			backgroundColor: this.props.trackColor || "gray"
		};
		let highlighterTheme = {
			color: this.props.color || "white",
			backgroundColor: this.props.background || "#5d6c6b"
		};
		let tabs = tabArray.map((tab, index) => {
			let className = "";
			if (index == 0) className = "active";
			return (
				<p
					key={index}
					className={className}
					onClick={e => {
						this.handleClick(e, index);
					}}
					style={{ width: tabWidth }}
				>
					{tab}
				</p>
			);
		});
		return (
			<div className="tab-container-main">
				<div className="tab-container ">
					<Draggable
						position={pos}
						onDrag={this.handleDragTab}
						onDragEnd={this.handleEndDragTab}
					>
						<div className="tab" ref="tab" style={trackTheme}>
							{tabs}
						</div>
					</Draggable>
					<div
						id="highlighter"
						ref="tab-highlighter"
						style={{ width: tabWidth, ...highlighterTheme }}
					/>
				</div>
				<Draggable
					position={pos}
					onDrag={this.handleDragContainer}
					onDragEnd={this.handleEndDragContainer}
				>
					<div
						id="tab-content-container"
						ref="tab-content-container"
						style={{ width: this.props.children.length * 100 + "%" }}
					>
						{React.Children.map(childNodes, (child, index) => {
							let classTab = "";
							if (index == 0) classTab = "active-tab";
							return React.cloneElement(child, {
								className: classTab + " tab-content container",
								ref: "tab-content",
								style: { width: tabWidth }
							});
						})}
					</div>
				</Draggable>
			</div>
		);
	}
}

export default EventTabs;
