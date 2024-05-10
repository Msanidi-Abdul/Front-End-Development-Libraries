class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Initial State',
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({
			name: 'React Rocks!',
		});
	}
	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Click Me</button>
				<h1>{this.state.name}</h1>
			</div>
		);
	}
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
