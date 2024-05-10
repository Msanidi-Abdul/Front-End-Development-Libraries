class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
		this.reset = this.reset.bind(this);
	}
	increment() {
		this.setState((state) => ({
			count: state.count + 1,
		}));
	}
	decrement() {
		this.setState((state) => ({
			count: state.count - 1,
		}));
	}
	reset() {
		this.setState({
			count: 0,
		});
	}
	render() {
		return (
			<div>
				<button className="inc" onClick={this.increment}>
					Increment!
				</button>
				<button className="dec" onClick={this.decrement}>
					Decrement!
				</button>
				<button className="reset" onClick={this.reset}>
					Reset
				</button>
				<h1>Current Count: {this.state.count}</h1>
			</div>
		);
	}
}

ReactDOM.render(<Counter />, document.getElementById('challenge-node'));
