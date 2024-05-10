const frontEndFrameworks = [
	'React',
	'Angular',
	'Ember',
	'Knockout',
	'Backbone',
	'Vue',
];

function Frameworks() {
	const renderFrameworks = frontEndFrameworks.map((item, index) => {
		return <li key={index}>{item}</li>;
	});
	return (
		<div>
			<h1>Popular Front End JavaScript Frameworks</h1>
			<ul>{renderFrameworks}</ul>
		</div>
	);
}

ReactDOM.render(<GateKeeper />, document.getElementById('challenge-node'));
