const sponsorsReducer = (
	state = {
		collection: [],
		fetchingSponsors: false,
		fetchedSponsors: false
	},
	action
) => {
	switch (action.type) {
		case "FETCHING_SPONSORS":
			return {
				...state,
				fetchingSponsors: true,
				fetchedSponsors: false
			};
		case "FETCHED_SPONSORS":
			return {
				...state,
				fetchingSponsors: false,
				fetchedSponsors: true,
				collection: state.collection.concat(action.payload)
			};
		default:
			return state;
	}
};

export default sponsorsReducer;
