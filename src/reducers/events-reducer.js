import ReactHtmlParser from "react-html-parser";

const eventsReducer = (
	state = {
		collection: [],
		fetchingEvents: false,
		fetchedEvents: false
	},
	action
) => {
	switch (action.type) {
		case "FETCHING_EVENTS":
			return {
				...state,
				fetchingEvents: true,
				fetchedEvents: false
			};
		case "FETCHED_EVENTS":
			// action.payload.forEach((event) => {
			// 	event.content = ReactHtmlParser(event.content);
			// 	event.tagLine = ReactHtmlParser(event.tagLine);
			// });
			return {
				...state,
				fetchingEvents: false,
				fetchedEvents: true,
				collection: state.collection.concat(action.payload)
			};
		default:
			return state;
	}
};

export default eventsReducer;
