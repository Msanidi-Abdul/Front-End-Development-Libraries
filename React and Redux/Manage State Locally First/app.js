class DisplayMessages extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			messages: [],
		};
	}
	handleChange(e) {
		this.setState({
			input: e.target.value,
			messages: this.state.messages,
		});
	}
	submitMessage() {
		this.setState({
			input: '',
			messages: [...this.state.messages, this.state.input],
		});
	}

	render() {
		return (
			<div>
				<h2>Type in a new Message:</h2>
				<input
					onChange={this.handleChange.bind(this)}
					value={this.state.input}
				></input>
				<button onClick={this.submitMessage.bind(this)}></button>
				<ul>
					{this.state.messages.map((x, i) => {
						return <li key={i}>{x}</li>;
					})}
				</ul>
			</div>
		);
	}
}

ReactDOM.render(<DisplayMessages />, document.getElementById('root'));
