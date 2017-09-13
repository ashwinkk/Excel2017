import React from "react";

import "../styles/logo-bar.css";

export default function LogoBar(props) {
	return (
		<div className="logo-bar-container">
			<img src="/static/anim-assets/mec_logo.png" alt="mec-logo" />
			<img src="/static/anim-assets/excel2017.png" alt="excel-logo" />
		</div>
	);
}
