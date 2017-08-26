import ReactHtmlParser from "react-html-parser";

const workshopsReducer = (
	state = {
		collection: [],
		fetchingWorkshops: false,
		fetchedWorkshops: false
	},
	action
) => {
	switch (action.type) {
		case "FETCH_WORKSHOPS":
			return {
				...state,
				fetchingWorkshops: true,
				fetchedWorkshops: false
			};
		case "FETCHED_WORKSHOPS":
			action.payload.forEach((workshop, index) => {
				workshop.overview = ReactHtmlParser(workshop.overview);
				workshop.schedule = ReactHtmlParser(workshop.schedule);
				workshop.particulars = ReactHtmlParser(workshop.particulars);
			});
			return {
				...state,
				fetchingWorkshops: false,
				fetchedWorkshops: true,
				collection: state.collection.concat(action.payload)
			};
		default:
			return state;
	}
};

export default workshopsReducer;
