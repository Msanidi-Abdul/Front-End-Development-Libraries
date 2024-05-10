class Results extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <h1>{this.props.fiftyFifty ? 'You Win!' : 'You Lose!'}</h1>;
	}
}

class GameOfChance extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 1,
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState(() => {
			return {
				counter: this.state.counter + 1,
			};
		});
	}
	render() {
		const expression = Math.random() >= 0.5;
		return (
			<div>
				<button onClick={this.handleClick}>Play Again</button>
				<Results fiftyFifty={expression} />
				<p>{'Turn: ' + this.state.counter}</p>
			</div>
		);
	}
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
