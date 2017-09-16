import React from "react";
import { connect } from "react-redux";

import "../styles/loader.css";

@connect(store => {
	return {
		showLoader: store.navbar.showLoader
	};
})
export class Loader extends React.Component {
	render() {
		let transition = this.props.showLoader ? 0 : 1;
		return (
			<div className="loader-container" style={{ opacity: transition }}>
				<img
					className="excel-logo"
					src="/static/anim-assets/logo.png"
					alt="excel-logo"
				/>
			</div>
		);
	}
}
