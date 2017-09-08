import React from "react";
import { Parallax, ParallaxController } from "react-scroll-parallax";

import "../styles/root-section2.css";

ParallaxController.init();

export default class RootSection2 extends React.Component {
	render() {
		return (
			<div
				className="root-section"
				style={{
					position: "relative",
					background: "linear-gradient(#93ddff, #ffffff)",
					verticalAlign: "middle",
					paddingTop: "0px"
				}}
			>
				<div className="about-section-box">
					<Parallax
						className="custom-class"
						offsetYMax={-100}
						offsetYMin={100}
						slowerScrollRate
						tag="figure"
					>
						<img
							src="/static/images/excelhighres.png"
							style={{ width: "100%", position: "relative", top: "50px" }}
						/>
					</Parallax>
				</div>
				<div className="about-section-box">
					<Parallax
						className="custom-class"
						offsetYMax={-50}
						offsetYMin={50}
						slowerScrollRate
						tag="figure"
					>
						<div className="about-section-subbox">
							<h1>About</h1>
						</div>
						<div className="about-section-subbox">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</div>
					</Parallax>
				</div>
			</div>
		);
	}
}
