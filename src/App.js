import './App.css';
import LiveUpdatingDateAndTime from './LiveUpdatingDateAndTime';

function App({ input }) {
	// Condition 1
	if (input === false) return <LiveUpdatingDateAndTime />;
	// Condition 2
	if (Array.isArray(input)) {
		return (
			<div className="App">
				{input.map((item, index) => (
					<div key={index}>{item}</div>
				))}
			</div>
		);
	}
	// Condition 3
	return <div className="App">{input}</div>;
}

export default App;
