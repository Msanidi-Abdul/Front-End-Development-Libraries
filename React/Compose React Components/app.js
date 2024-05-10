class Fruits extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h2>Fruits:</h2>
				<NonCitrus />
				<Citrus />
			</div>
		);
	}
}

const NonCitrus = () => {
	return (
		<ul>
			<li>Apples</li>
			<li>Blueberries</li>
			<li>Strawberries</li>
		</ul>
	);
};

const Citrus = () => {
	return (
		<ul>
			<li>Oranges</li>
			<li>Pineapples</li>
			<li>Bananas</li>
		</ul>
	);
};

class TypesOfFood extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Types of Food:</h1>
				<Fruits />
				<Vegetables />
			</div>
		);
	}
}
ReactDOM.render(<TypesOfFood />, document.getElementById('root'));
