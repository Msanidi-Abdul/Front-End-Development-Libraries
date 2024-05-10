const ADD = 'ADD';
const addMessage = (message) => {
	return {
		type: ADD,
		message,
	};
};

const messageReducer = (previousState = [], action) => {
	switch (action.type) {
		case ADD:
			return [...previousState, action.message];
		default:
			return previousState;
	}
};

const store = Redux.createStore(messageReducer);
