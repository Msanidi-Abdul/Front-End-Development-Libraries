const styles = {
	color: 'purple',
	border: '2px solid purple',
	fontSize: 40,
};

class Colorful extends React.Component {
	render() {
		return <div style={styles}>Style Me!</div>;
	}
}
ReactDOM.render(<Colorful />, document.getElementById('challenge-node'));
