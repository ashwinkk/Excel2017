export function fetchCompetitions() {
	return dispatch => {
		dispatch({ type: "FETCHING_COMPETITIONS" });
		fetch("/assets/competitiondev.json")
			.then(response => response.json())
			.then(data => {
				dispatch({ type: "FETCHED_COMPETITIONS", payload: data });
			});
	};
}
