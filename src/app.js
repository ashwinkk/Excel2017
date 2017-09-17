import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Competitions from "./pages/competitions";
import CompetitionDetail from "./pages/competition-detail";
import WorkshopDetail from "./pages/workshop-detail";
import Summit from "./pages/summit.js";
import Gallery from "./pages/gallery.js";
import Navbar from "./partials/navbar";
import ComingSoon from "./pages/coming-soon";
import Spotlight from "./pages/spotlight";
import Events from "./pages/events";
import Root from "./pages/root";
import PageNotFound from "./pages/pagenotfound";
import About from "./pages/about";
import EventDetail from "./pages/event-detail";
import Sponsors from "./pages/sponsors"

import "./styles/defaults.css";
import "./styles/test.scss";

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
					<Route exact path="/" component={Root} />
					<Route path="/competitions/:type" component={CompetitionDetail} />
					<Route path="/spotlight/ai-summit" component={Summit} />
					<Route path="/spotlight/:type" component={WorkshopDetail} />
					<Route path="/spotlight" component={Spotlight} />
					{/* <Route path="/events/:type" component={EventDetail} />					 */}
					<Route path="/events" component={Events} />
					<Route path="/competitions?" component={Competitions} />
					<Route path="/competitions" component={Competitions} />
					<Route path="/gallery" component={Gallery} />
					<Route path="/under-construction" render={()=><Redirect to="/" />} />
					<Route path="/contacts" component={About} />
					<Route path="/sponsors" component={Sponsors} />
					<Route path="*" component={PageNotFound} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
