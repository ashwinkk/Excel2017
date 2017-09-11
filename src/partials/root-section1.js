import React from "react";
import { ParallaxController, Parallax } from "react-scroll-parallax";

import "../styles/root-section1.css";

ParallaxController.init();

export default class RootSection1 extends React.Component {
	render() {
		let headerLayer = (
			<Parallax offsetYMax={"0px"} offsetYMin={"-500px"} slowerScrollRate>
				<div className="header-layer">
					<img src="/static/anim-assets/header.png" alt="cloud-top" />
				</div>
			</Parallax>
		);
		let footerLayer = (
			<Parallax
				offsetYMax={100}
				offsetYMin={-100}
				slowerScrollRate
				tag="figure"
			>
				<div className="footer-layer">
					<img src="/static/anim-assets/footer.png" alt="cloud-bottom" />
				</div>
			</Parallax>
		);
		return (
			<div style={{ zIndex: 90, position: "relative" }}>
				<Parallax offsetYMax={30} offsetYMin={-200} slowerScrollRate>
					<img
						className="header-cloud"
						src="/static/anim-assets/header.png"
						alt="cloud-top"
					/>
				</Parallax>
			</div>
		);
	}
}
