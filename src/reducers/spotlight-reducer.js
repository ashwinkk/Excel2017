const spotlightReducer = (
	state = {
		collection: [],
		fetchingSpotlight: false,
		fetchedSpotlight: false
	},
	action
) => {
	switch (action.type) {
		case "FETCHING_SPOTLIGHT":
			return {
				...state,
				fetchingSpotlight: true,
				fetchedSpotlight: false
			};
		case "FETCHED_SPOTLIGHT":
			return {
				...state,
				fetchingSpotlight: false,
				fetchedSpotlight: true,
				collection: state.collection.concat(action.payload)
			};
		default:
			return state;
	}
};

export default spotlightReducer;
