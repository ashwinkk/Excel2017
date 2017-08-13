import React from "react";
import { Route, Switch } from "react-router-dom";

import Competitions from "./pages/competitions";
import CompetitionDetail from "./pages/competition-detail";
import WorkshopDetail from "./pages/workshop-detail";
import Gallery from "./pages/gallery.js";
import Navbar from "./partials/navbar";
import CountDown from "./partials/countdown";

import './styles/defaults.css';
import './styles/test.scss';

function App(props) {
	return (
		<div>
			<Navbar />
			<div className="content">
				<Switch>
					<Route exact path="/" render={() => <h1>Hello world<br/><CountDown options={{ endDate: new Date("2017-08-20") }}/></h1>} />
					<Route path="/events/:type" component={WorkshopDetail} />
					<Route path="/events/" component={Competitions} />
					<Route path="/gallery" component={Gallery} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
