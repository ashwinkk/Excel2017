const botReducer = (
	state = {
		replyText: "",
		fetchingReply: false,
		fetchedReply: false
	},
	action
) => {
	switch (action.type) {
		case "FETCHING_REPLY":
			return {
				...state,
				fetchingReply: true,
				fetchedReply: false
			};
		case "FETCHED_REPLY":
			return {
				...state,
				replyText: action.payload,
				fetchingReply: false,
				fetchedReply: true
			};
		default:
			return state;
	}
};
export default botReducer;
