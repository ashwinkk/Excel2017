export function fetchSponsors(spotlight) {
	return dispatch => {
		dispatch({ type: "FETCHING_SPONSORS" });
		const URL = `/assets/sponsors.json`;
		fetch(URL).then(response => response.json()).then(data => {
			dispatch({ type: "FETCHED_SPONSORS", payload: data });
		});
	};
}
