class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Welcome name="Gosho" />
			</div>
		);
	}
}

class Welcome extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<p>
					Hello, <strong>{this.props.name}</strong>!
				</p>
			</div>
		);
	}
}

ReactDOM.render(<Welcome />, document.getElementById('challenge-node'));
