const initialState = {
	loading: false,
	error: null,
	posts: [],
};

const postReducers = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_POSTS_REQUEST":
			return {
				...state,
				loading: true,
				error: null,
			};
		case "FETCH_POSTS_SUCCESS":
			return {
				...state,
				loading: false,
				posts: action.payload,
			};
		case "FETCH_POSTS_FAILURE":
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default postReducers;
