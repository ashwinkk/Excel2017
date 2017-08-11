import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import galleryReducer from "./reducers/gallery-reducer";
import workshopReducer from "./reducers/workshops-reducer";

const app = combineReducers({
	gallery: galleryReducer,
	workshops: workshopReducer
});

const middleware = applyMiddleware(thunk);

const store = createStore(app, {}, composeWithDevTools(middleware));

export default store;
