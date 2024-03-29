import React, { Component } from "react";
import { Fullpage, Slide } from "fullpage-react";
import { connect } from "react-redux";

import RootSection1 from "../partials/root-section1";
import RootSection2 from "../partials/root-section2";
import RootSection3 from "../partials/root-section3";
import RootSection4 from "../partials/root-section4";
import RootSection5 from "../partials/root-section5";

@connect(store => {
	return {
		fontColor: store.fontColor,
		backgroundColor: store.backgroundColor
	};
})
class Root extends Component {
	constructor(props) {
		super(props);

		this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
		this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);

		this.fullpageOptions = {
			//TODO: tune these
			// docs: https://github.com/cmswalker/fullpage-react
			scrollSensitivity: 7,
			touchSensitivity: 7,
			scrollSpeed: 700,

			hideScrollBars: true,
			enableArrowKeys: true,
			onSlideChangeStart: this.onSlideChangeStart,
			onSlideChangeEnd: this.onSlideChangeEnd
		};
	}

	onSlideChangeStart(e) {
		// TODO: add slide change events here
		// use this.fullpage.state.activeSlide to keep track of the active slide
		console.log("change slide started", e);
	}

	onSlideChangeEnd(e) {
		// TODO: add slide change events here
		// use this.fullpage.state.activeSlide to keep track of the active slide
		console.log("change slide ended", e);
	}

	componentWillUnmount() {
		let fullpage = document.getElementById("fullpage");
		fullpage.style.position = "absolute";
		fullpage.style.opacity = 0;
		fullpage.style.height = 0;
		fullpage.style.width = 0;
		fullpage.style.zIndex = -1;
		document.body.removeChild(fullpage);
		// fullpage.removeChild();
	}

	componentDidMount() {
		let fullpage = document.getElementById("fullpage");
		fullpage.style.position = "absolute";
		fullpage.style.opacity = 1;
		fullpage.style.height = "100%";
		fullpage.style.width = "unset";
		fullpage.style.zIndex = 98;
		console.log("");
		this.props.dispatch({
			type: "SET_THEME",
			payload: { fontColor: "#625f5f", backgroundColor: "lightblue" }
		});
	}

	render() {
		const slides = [
			// TODO: add padding-top to all the root sections
			<Slide>
				<RootSection1 />
			</Slide>,
			<Slide>
				<RootSection2 />
			</Slide>,
			<Slide>
				<RootSection3 />
			</Slide>,
			<Slide>
				<RootSection4 />
			</Slide>,
			<Slide>
				<RootSection5 />
			</Slide>
		];
		return <div />;
		return (
			<Fullpage
				{...{ ...this.fullpageOptions, slides }}
				ref={e => (this.fullpage = e)}
			/>
		);
	}
}
export default Root;
