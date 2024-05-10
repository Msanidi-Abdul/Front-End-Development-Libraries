const store = Redux.createStore((state = { login: false }) => state);

const loginAction = () => {
	return {
		type: 'LOGIN',
	};
};

store.dispatch(loginAction());
