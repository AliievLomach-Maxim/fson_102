// import CardList from './components/CardList/CardList'

import Posts from './components/Posts/Posts'

function App() {
	return <Posts />
}

export default App

// const CounterComponentWithState = () => {
// 	const [counter, setCounter] = useState(0)

// 	const handleIncrement = () => {
// 		setCounter(counter + 1)
// 		console.log('counter + :>> ', counter)
// 	}

// 	return (
// 		<>
// 			<button onClick={handleIncrement}>Increment</button>
// 			<p>{counter}</p>
// 		</>
// 	)
// }

// function App() {
// 	const [state, setState] = useState({
// 		a: 0,
// 		b: 0,
// 	})
// 	const handleIncrementA = () => {
// 		setState({ ...state, a: state.a + 1 })
// 	}
// 	const handleIncrementB = () => {
// 		setState({ ...state, b: state.b + 1 })
// 	}

// 	return (
// 		<div>
// 			<CounterComponent value={state.a} handleIncrement={handleIncrementA} />
// 			<CounterComponent value={state.b} handleIncrement={handleIncrementB} />

// 			<p>Total: {state.a + state.b}</p>
// 		</div>
// 	)
// }

// export default App

// document.addEventListener('click',()=>{}(5))
