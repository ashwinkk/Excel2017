import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import galleryReducer from "./reducers/gallery-reducer";
import workshopReducer from "./reducers/workshops-reducer";
import countdownReducer from "./reducers/countdown-reducer";
import competitionsReducer from "./reducers/competitions-reducer";

const app = combineReducers({
	gallery: galleryReducer,
	workshops: workshopReducer,
	countdowns: countdownReducer,
	competitions: competitionsReducer
});

const middleware = applyMiddleware(thunk);

const store = createStore(app, {}, composeWithDevTools(middleware));

export default store;
