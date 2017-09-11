const aboutReducer = (
	state = {
		collection: [],
		fetchingAbout: false,
		fetchedAbout: false
	},
	action
) => {
	switch (action.type) {
		case "FETCHING_ABOUT":
			return {
				...state,
				fetchingAbout: true,
				fetchedAbout: false
			};
		case "FETCHED_ABOUT":
			return {
				...state,
				fetchingAbout: false,
				fetchedAbout: true,
				collection: state.collection.concat(action.payload)
			};
		default:
			return state;
	}
};

export default aboutReducer;
