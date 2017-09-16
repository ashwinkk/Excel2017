export function fetchReply(text) {
	return dispatch => {
		console.log("fetching" + text);
		dispatch({ type: "FETCHING_REPLY" });
		let data = {
			query: text
		};
		fetch(`http://192.168.225.140:3000`, {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			method: "POST",
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log(data);
				dispatch({ type: "FETCHED_REPLY", payload: data });
			})
			.catch(err => console.log(err));
	};
}
