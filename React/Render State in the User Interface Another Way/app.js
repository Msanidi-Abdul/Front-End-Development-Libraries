class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'freeCodeCamp',
		};
	}
	render() {
		const name = this.state.name;

		return (
			<div>
				<h1>{name}</h1>
			</div>
		);
	}
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
