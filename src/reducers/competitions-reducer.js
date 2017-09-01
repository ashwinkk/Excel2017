import ReactHtmlParser from "react-html-parser";

const compeitionsReducer = (
	state = {
		competitions: [],
		priorities: [],
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
			action.payload.forEach((competition, index) => {
				competition.description = ReactHtmlParser(competition.description);
				competition.eventFormat = ReactHtmlParser(competition.eventFormat);
				competition.rules = ReactHtmlParser(competition.rules);
				competition.contact_details = ReactHtmlParser(
					competition.contact_details
				);
				competition.hidden = false;
			});
			return {
				...state,
				filter: [],
				fetchingCompetitions: false,
				fetchedCompetitions: true,
				competitions: state.competitions.concat(action.payload)
			};
		case "ASSIGN_PRIORITY":
			return {
				...state,
				priorities: state.priorities.concat(action.payload),
				competitions: state.competitions.map((competition, index) => {
					return {
						...competition,
						priority: action.payload[index]
					};
				})
			};
		case "APPLY_FILTER":
			return {
				...state,
				filter: state.filter.concat(action.payload)
			};
		case "HIDE_FILTERED":
			return {
				...state,
				competitions: state.competitions.map((competition, index) => {
					console.log(state.filter.includes(competition.category));
					competition.hidden = !state.filter.includes(competition.category);
					return competition;
				})
			};
		default:
			return state;
	}
};

export default compeitionsReducer;
