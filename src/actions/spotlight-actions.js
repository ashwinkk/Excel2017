export function fetchSpotlight(spotlight) {
	return dispatch => {
		dispatch({ type: "FETCHING_SPOTLIGHT" });
		const URL = `/assets/spotlight.json`;
		fetch(URL).then(response => response.json()).then(data => {
			dispatch({ type: "FETCHED_SPOTLIGHT", payload: data });
		});
	};
}
