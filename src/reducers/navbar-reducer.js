const navbarReducer = (
	state = {
		fontColor: "black",
		backgroundColor: "white"
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
		default:
			return state;
	}
};

export default navbarReducer;
