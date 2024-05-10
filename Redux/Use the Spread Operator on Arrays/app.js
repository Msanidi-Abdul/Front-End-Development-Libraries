const immutableReducer = (state = ['Do not mutate state!'], action) => {
	switch (action.type) {
		case 'ADD_TO_DO':
			let myArray = [...state];
			myArray.push(action.todo);
			return myArray;
		default:
			return state;
	}
};

const addToDo = (todo) => {
	return {
		type: 'ADD_TO_DO',
		todo,
	};
};

const store = Redux.createStore(immutableReducer);
