class ControlledInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState((state) => ({
			input: e.target.value,
		}));
	}
	render() {
		return (
			<div>
				{/* Change code below this line */}
				<input onChange={this.handleChange} value={this.state.input}></input>
				{/* Change code above this line */}
				<h4>Controlled Input:</h4>
				<p>{this.state.input}</p>
			</div>
		);
	}
}

ReactDOM.render(<ControlledInput />, document.getElementById('challenge-node'));