const CounterComponent = ({ value, handleIncrement }) => {
	return (
		<>
			<button onClick={handleIncrement}>Increment</button>
			<p>{value}</p>
		</>
	)
}

export default CounterComponent
