import React from "react";
import { Route, Switch } from "react-router-dom";

import Competitions from "./pages/competitions";
import CompetitionDetail from "./pages/competition-detail";
import WorkshopDetail from "./pages/workshop-detail";
import Gallery from "./pages/gallery.js";
import Navbar from "./partials/navbar";
import CountDownRinger from "./partials/countdown-ringer";

import './styles/defaults.css';
import './styles/test.scss';

function App(props) {
	const options = {
		textColor: "#000",
		endDate: "2017-09-09",
		topCircleColor: "rgba(33,15,255,0.5)",
		bottomCircleColor: "rgba(90,77,245,1)" 
	};
	return (
		<div>
			<Navbar />
			<div className="content">
				<Switch>
					<Route exact path="/" render={() => <h1>Hello world<br/><CountDownRinger options={options}/></h1>} />
					<Route path="/events/:type" component={WorkshopDetail} />
					<Route path="/events/" component={Competitions} />
					<Route path="/gallery" component={Gallery} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
