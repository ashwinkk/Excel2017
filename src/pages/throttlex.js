import React from "react";
import { connect } from "react-redux";

import LogoBar from "../partials/logo-bar";

import "../styles/throttlex.css";

@connect(store => {
	return {
		bg: store.navbar.backgroundColor
	};
})
export default class ThrottleX extends React.Component {
	componentDidMount() {
		document.getElementById("root").style.backgroundColor =
			"rgba(10, 10, 10, 1)";
		this.props.dispatch({
			type: "SET_THEME",
			payload: { fontColor: "white", backgroundColor: "#171717" }
		});
		window.scrollTo(0, 0);
	}
	componentWillUnmount() {
		document.getElementById("root").style.backgroundColor = "transparent";
		this.props.dispatch({
			type: "RESET_THEME"
		});
	}
	render() {
		return (
			<div>
				<LogoBar />
				<div className="entry row">
					<div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
						<img src="/static/throttlex/throttlex.png" />
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
						<h2>Throttle X</h2>
						<p>
							Throttle X 2017 is the second edition of our annual celebration of
							everything engine, hosted as part of Excel 2017. The first edition
							saw massive crowds flocking in to witness the crème de la crème of
							machines, giving birth to a legacy. And this year we are bigger
							and more awesome than before. We guarantee you a day of raw
							energy, adrenalin and throttle-happiness with the world's best
							automotives.
						</p>
					</div>
				</div>
				<div className="throttlex-competition row">
					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<img src="/static/throttlex/competition.png" />
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<p>
							Imagine the most sleek, built, monster car out there. Its engine
							purring, beckoning you to come closer, to feel the hum of the
							engine under your palms. You take a step back to admire its sheer
							power and elegance. She's not just four wheels and an engine,
							she's home. Are you holding your breath? You don't need to much
							longer. The best custom cars are in town and here's your chance to
							compete among them. Show off your home away from home at
							Throttlex-17. With prizes worth 12k waiting to be pursued, one
							does not simply walk away from this chase. The open road is a
							beckoning. The only question is..will you answer the call?
						</p>
					</div>

					<div className="overlay-throttlex">
						<div className="nested-overlay" />
						<img src="/static/throttlex/modded.jpg" />
						<div className="nested-overlay-merge" />
					</div>
				</div>
				<div className="throttlex-rally row">
					<div className="nested-overlay-merge" />
					<div className="overlay-throttlex">
						<div className="nested-overlay" />
						<div className="nested-overlay-merge" />
						<img src="/static/throttlex/rally.jpg" />
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<p>
							THUMP! THUMP! Because emails are too mainstream, ThrottleX 2017
							will be announced to world in style. Roaring Bullets will tear
							through the streets of Ernakulam, announcing Excel's auto show.
							The rally spanning over a 170 Kilometers and covering various
							colleges throughout the district will see 30 of the finest Royal
							Enfields creating the hype for ThrottleX 2017 and all its patrons.
						</p>
					</div>
					<div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<img className="text-img" src="/static/throttlex/rally.png" />
					</div>
				</div>
				<div className="throttlex-contacts row">
					<div className="std-overlay" />
					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 throttlex-contact-container">
						<h2 className="text-center">Contacts</h2>
						<div>
							<h3>
								<b>Mohammad Muhzin</b>
							</h3>
							<p>+91 9744256689</p>
						</div>
						<div>
							<h3>
								<b>Mohammad Raeez</b>
							</h3>
							<p>+91 9633317774</p>
						</div>
					</div>
					<div className="video-tx col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<iframe
							width="100%"
							height="315"
							src="https://www.youtube.com/embed/KhQ_cTJcjgo"
							frameborder="0"
							allowfullscreen
						/>
					</div>
				</div>
			</div>
		);
	}
}
