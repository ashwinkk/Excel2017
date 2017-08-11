import React from "react";

class EventTabs extends React.Component {
	handleClick(index) {
		this.props.activeTab(index);
	}

	render() {
		let tabArray = this.props.tabLabels;
		let tabs = tabArray.map((tab, index) => {
			let className = "";
			if (index == 0) className = "active";
			return (
				<p
					key={index}
					className={className}
					onClick={() => {
						this.handleClick(index);
					}}
				>
					{tab}
				</p>
			);
		});
		return (
			<div className="tab-container">
				<div className="tab">
					{tabs}
				</div>
				<div id="highlighter" />
			</div>
		);
	}
}

export default EventTabs;
