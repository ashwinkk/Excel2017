import React from "react";
import { Link } from "react-router-dom";

import GoLock from "react-icons/lib/go/lock";
import {
	FaHome,
	FaArrowUp,
	FaCameraRetro,
	FaCalendar,
	FaMicrophone
} from "react-icons/lib/fa";

import "../styles/navbar.css";

class Navbar extends React.Component {
	render() {
		return (
			<div className="navbar-container">
				<div className="navbar">
					<div className="icons">
						<div className="left">
							<div>
								<Link to="#" className="nav-text">
									Home
								</Link>
								<Link to="#">
									<FaHome />
								</Link>
							</div>
							<div>
								<Link to="#" className="nav-text">
									Events
								</Link>
								<Link to="#">
									<FaCalendar />
								</Link>
							</div>
						</div>
						<div className="right">
							<div>
								<Link to="#" className="nav-text">
									Gallery
								</Link>
								<Link to="#">
									<FaCameraRetro />
								</Link>
							</div>
							<div>
								<Link to="#" className="nav-text">
									Updates
								</Link>
								<Link to="#">
									<FaArrowUp />
								</Link>
							</div>
						</div>
					</div>
					<div className="bot-spawn">
						<div>
							<FaMicrophone />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;
