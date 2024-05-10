const List = (props) => {
	return <p>{props.tasks.join(', ')}</p>;
};

class ToDo extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>To Do Lists</h1>
				<h2>Today</h2>
				<List tasks={['walk dog', 'workout']} />
				<h2>Tomorrow</h2>
				<List tasks={['walk cat', 'go to grocery store', 'feed the cat']} />
			</div>
		);
	}
}

ReactDOM.render(<ToDo />, document.getElementById('challenge-node'));
