const botReducer = (
	state = {
		replyText: "",
		fetchingReply: false
	},
	action
) => {
	switch (action.type) {
		case "FETCHING_REPLY":
			return {
				...state,
				fetchingReply: true
			};
		case "FETCHED_REPLY":
			return {
				...state,
				replyText: action.payload,
				fetchingReply: false
			};
		default:
			return state;
	}
};
export default botReducer;
