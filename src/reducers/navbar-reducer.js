const navbarReducer = (
	state = {
		fontColor: "black",
		backgroundColor: "white",
		showLoader: false
	},
	action
) => {
	switch (action.type) {
		case "SET_THEME":
			return {
				...state,
				fontColor: action.payload.fontColor,
				backgroundColor: action.payload.backgroundColor
			};
		case "RESET_THEME":
			return {
				...state,
				fontColor: "black",
				backgroundColor: "white"
			};
		case "SHOW_LOADER":
			return {
				...state,
				showLoader: true
			};
		case "HIDE_LOADER":
			return {
				...state,
				showLoader: false
			};
		default:
			return state;
	}
};

export default navbarReducer;
