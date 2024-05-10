class MyComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		console.log('Component mounted to DOM');
	}
	render() {
		return <div />;
	}
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
