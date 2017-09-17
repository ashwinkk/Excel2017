import React from "react";
import { Link } from "react-router-dom";

import "../styles/logo-bar.css";

export default function LogoBar(props) {
	return (
		<div className="logo-bar-container">
			<a href="http://mec.ac.in/">
				<img src="/static/anim-assets/mec_logo.png" alt="mec-logo" />
			</a>
			<Link to="/" className="excel-home">
				<img src="/static/anim-assets/excel2017.png" alt="excel-logo" />
			</Link>
		</div>
	);
}
