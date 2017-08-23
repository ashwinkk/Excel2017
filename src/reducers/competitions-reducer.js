const compeitionsReducer = (
	state = {
		competitions: [],
		fetchingCompetitions: false,
		fetchedCompetitions: false
	},
	action
) => {
	switch (action.type) {
		case "FETCHING_COMPETITIONS":
			return {
				...state,
				fetchingCompetitions: true,
				fetchedCompetitions: false
			};
		case "FETCHED_COMPETITIONS":
			return {
				...state,
				fetchingCompetitions: false,
				fetchedCompetitions: true,
				competitions: action.payload
			};
		default:
			return state;
	}
};

export default compeitionsReducer;
