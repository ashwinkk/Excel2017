export function fetchSchedule(spotlight) {
	return dispatch => {
		dispatch({ type: "FETCHING_SCHEDULE" });
		const URL = `/assets/schedule.json`;
		fetch(URL).then(response => response.json()).then(data => {
			dispatch({ type: "FETCHED_SCHEDULE", payload: data });
		});
	};
}
