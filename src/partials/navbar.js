import React from "react";
import { Link } from "react-router-dom";

import BotChat from "./bot-area";

import GoLock from "react-icons/lib/go/lock";
import { FaCameraRetro, FaCalendar, FaMicrophone } from "react-icons/lib/fa";

import { MdVideogameAsset, MdHighlight } from "react-icons/lib/md";

import "../styles/navbar.css";

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			spawn: false
		};
		this.handleSpawn = this.handleSpawn.bind(this);
	}
	handleSpawn() {
		this.setState({ spawn: !this.state.spawn });
	}
	render() {
		let micClass = "bot-spawn";
		if (this.state.spawn) micClass = "bot-spawn record";
		return (
			<div className="navbar-container">
				<div className="navbar">
					<div className="icons">
						<div className="left">
							<div className="lonely-home">
								<Link to="/" className="nav-text">
									Home
								</Link>
							</div>
							<div>
								<Link to="/competitions" className="nav-text">
									Competitions
								</Link>
								<Link to="/competitions">
									<MdVideogameAsset />
								</Link>
							</div>
							<div>
								<Link to="/spotlight" className="nav-text">
									Spotlight
								</Link>
								<Link to="/spotlight">
									<MdHighlight />
								</Link>
							</div>
						</div>
						<div className="right">
							<div>
								<Link to="/events" className="nav-text">
									Events
								</Link>
								<Link to="/events">
									<FaCalendar />
								</Link>
							</div>
							<div>
								<Link to="/gallery" className="nav-text">
									Gallery
								</Link>
								<Link to="/gallery">
									<FaCameraRetro />
								</Link>
							</div>
						</div>
					</div>
					<div className={micClass}>
						<div onClick={this.handleSpawn}>
							<FaMicrophone />
						</div>
					</div>
					<div className="flap">
						<Link to="/">
							<img src="/static/images/flap.png" />
						</Link>
					</div>
				</div>

				<BotChat spawn={this.state.spawn} />
			</div>
		);
	}
}

export default Navbar;
