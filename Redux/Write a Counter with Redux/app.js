const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case INCREMENT:
			return ++state;
		case DECREMENT:
			return --state;
		default:
			return state;
	}
};

const incAction = () => {
	return {
		type: INCREMENT,
	};
};

const decAction = () => {
	return {
		type: DECREMENT,
	};
};

const store = Redux.createStore(counterReducer);
