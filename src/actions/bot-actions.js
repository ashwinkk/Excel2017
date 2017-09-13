export function fetchReply(text) {
	return dispatch => {
		dispatch({ type: "FETCHING_REPLY" });
		let data = {
			query: text
		};
		fetch(`https://chatbot.excelmec.org`, {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			method: "POST",
			body: JSON.stringify(data)
		})
			.then(response => {
				console.log(response);
				dispatch({ type: "FETCHED_REPLY", payload: response });
			})
			.catch(err => console.log(err));
	};
}
