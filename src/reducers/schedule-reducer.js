const scheduleReducer = (
	state = {
		collection: [],
		fetchingSchedule: false,
		fetchedSchedule: false
	},
	action
) => {
	switch (action.type) {
		case "FETCHING_SCHEDULE":
			return {
				...state,
				fetchingSchedule: true,
				fetchedSchedule: false
			};
		case "FETCHED_SCHEDULE":
			return {
				...state,
				fetchingSchedule: false,
				fetchedSchedule: true,
				collection: state.collection.concat(action.payload)
			};
		default:
			return state;
	}
};

export default scheduleReducer;
