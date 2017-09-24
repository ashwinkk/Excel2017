import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import galleryReducer from "./reducers/gallery-reducer";
import workshopReducer from "./reducers/workshops-reducer";
import countdownReducer from "./reducers/countdown-reducer";
import competitionsReducer from "./reducers/competitions-reducer";
import spotlightReducer from "./reducers/spotlight-reducer";
import eventsReducer from "./reducers/events-reducer";
import navbarReducer from "./reducers/navbar-reducer";
import aboutReducer from "./reducers/about-reducer";
import sponsorsReducer from "./reducers/sponsors-reducer";
import scheduleReducer from "./reducers/schedule-reducer"

const app = combineReducers({
	gallery: galleryReducer,
	workshops: workshopReducer,
	countdowns: countdownReducer,
	competitions: competitionsReducer,
	spotlight: spotlightReducer,
	events: eventsReducer,
	navbar: navbarReducer,
	about: aboutReducer,
	sponsors: sponsorsReducer,
	schedule: scheduleReducer
});

const middleware = applyMiddleware(thunk);

const store = createStore(app, {}, composeWithDevTools(middleware));

export default store;
