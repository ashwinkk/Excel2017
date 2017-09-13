import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import BotChat from "./bot-area";

import GoLock from "react-icons/lib/go/lock";
import { FaUserSecret, FaCalendar, FaMicrophone } from "react-icons/lib/fa";

import { MdVideogameAsset, MdHighlight, MdHome } from "react-icons/lib/md";

import "../styles/navbar.css";

@connect(store => {
	return {
		backgroundColor: store.navbar.backgroundColor,
		fontColor: store.navbar.fontColor
	};
})
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

	componentDidMount() {
		console.log(window.location.hash.split("/")[1] !== "");
		if (window.location.hash.split("/")[1] !== "") {
			this.removeFullpage();
		}
	}

	removeFullpage() {
		let fullpage = document.getElementById("fullpage");
		fullpage.style.position = "absolute";
		fullpage.style.opacity = 0;
		fullpage.style.height = 0;
		fullpage.style.width = 0;
		document.getElementById("root").style.zIndex = 99;
	}

	showfullpage() {
		let fullpage = document.getElementById("fullpage");
		fullpage.style.position = "absolute";
		fullpage.style.opacity = 1;
		fullpage.style.height = "100%";
		fullpage.style.width = "unset";
		document.getElementById("root").style.zIndex = 99;
	}
	render() {
		let micClass = "bot-spawn";
		if (this.state.spawn) micClass = "bot-spawn record";
		return (
			<div
				className="navbar-container"
				style={{ backgroundColor: this.props.backgroundColor }}
			>
				<div className="navbar">
					<div
						className="icons"
						style={{
							backgroundColor: this.props.backgroundColor,
							color: this.props.fontColor
						}}
					>
						<div className="left">
							<div className="lonely-home">
								<div className="nav-text">
									<Link to="/">Home</Link>
								</div>
								<Link to="/" onClick={this.showfullpage}>
									<MdHome />
								</Link>
							</div>
							<div>
								<div className="nav-text">
									<Link to="/competitions">Competitions</Link>
								</div>
								<Link to="/competitions" onClick={this.removeFullpage}>
									<MdVideogameAsset />
								</Link>
							</div>
							<div>
								<div className="nav-text">
									<Link to="/spotlight">Spotlight</Link>
								</div>
								<Link to="/spotlight" onClick={this.removeFullpage}>
									<MdHighlight />
								</Link>
							</div>
						</div>
						<div className="right">
							<div>
								<div className="nav-text">
									<Link to="/events">Events</Link>
								</div>
								<Link to="/events" onClick={this.removeFullpage}>
									<FaCalendar />
								</Link>
							</div>
							<div>
								<div className="nav-text">
									<Link to="/user">User</Link>
								</div>
								<Link to="/user" onClick={this.removeFullpage}>
									<FaUserSecret />
								</Link>
							</div>
						</div>
					</div>
					<div className={micClass}>
						<div onClick={this.handleSpawn}>
							<FaMicrophone />
						</div>
					</div>
				</div>

				<BotChat spawn={this.state.spawn} />
			</div>
		);
	}
}

export default Navbar;
