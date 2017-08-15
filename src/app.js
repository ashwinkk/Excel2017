import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Competitions from "./pages/competitions";
import CompetitionDetail from "./pages/competition-detail";
import WorkshopDetail from "./pages/workshop-detail";
import Gallery from "./pages/gallery.js";
import Navbar from "./partials/navbar";
import ComingSoon from "./pages/coming-soon";
import Spotlight from "./pages/spotlight";
import Events from "./pages/events";

import "./styles/defaults.css";
import "./styles/test.scss";

function App(props) {
	return (
		<div>
			<Navbar />
			<div className="content">
				<Switch>
					<Route
						exact
						path="/"
						render={() => <Redirect to="/under-construction" />}
					/>
					<Route path="/events/:type" component={WorkshopDetail} />
					<Route path="/spotlight" component={Spotlight} />
					<Route path="/events" component={Events} />
					<Route path="/competitions" component={Competitions} />
					<Route path="/gallery" component={Gallery} />
					<Route path="/under-construction" component={ComingSoon} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
