import React from "react";
import { Route, Switch } from "react-router-dom";

import Competitions from "./pages/competitions";
import CompetitionDetail from "./pages/competition-detail";
import Gallery from "./pages/gallery.js";
import Navbar from "./partials/navbar";

import "./styles/defaults.css";

function App(props) {
	return (
		<div>
			<Navbar />
			<div className="content">
				<Switch>
					<Route exact path="/" render={() => <h1>Hello world</h1>} />
					<Route path="/events/:id" component={CompetitionDetail} />
					<Route path="/events" component={Competitions} />
					<Route path="/gallery" component={Gallery} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
