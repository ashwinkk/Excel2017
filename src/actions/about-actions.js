export function fetchAbout(event) {
	return dispatch => {
		dispatch({ type: "FETCHING_ABOUT" });
		const URL = `/assets/about.json`;
		fetch(URL).then(response => response.json()).then(data => {
			dispatch({ type: "FETCHED_ABOUT", payload: data });
		});
	};
}
