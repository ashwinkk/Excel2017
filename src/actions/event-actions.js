export function fetchEvent(event) {
	return dispatch => {
		dispatch({ type: "FETCHING_EVENTS" });
		const URL = `/assets/events.json`;
		fetch(URL).then(response => response.json()).then(data => {
			dispatch({ type: "FETCHED_EVENTS", payload: data });
		});
	};
}
