import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import galleryReducer from './reducers/gallery-reducer';

const app = combineReducers({
    gallery: galleryReducer
});

const middleware = applyMiddleware(thunk);

const store = createStore(app,{},composeWithDevTools(
    middleware
));

export default store;