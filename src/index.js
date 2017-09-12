import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from "./app";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";
import createHistory from "history/createHashHistory";

const history = createHistory();

ReactDOM.render(
	<Router history={history}>
		<MuiThemeProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</MuiThemeProvider>
	</Router>,
	document.getElementById("root")
);
registerServiceWorker();
