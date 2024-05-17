// import Posts from './components/Posts/Posts'

import { useEffect, useState } from 'react'
// import Timer from './components/Timer/Timer'

const createInitialCounter = (key) => {
	const localCounter = localStorage.getItem(key)
	return localCounter ? JSON.parse(localCounter) : 0
}

function App() {
	// const [isShowTimer, setIsShowTimer] = useState(false)
	const [counter, setCounter] = useState(() => createInitialCounter('counter'))
	const [counter2, setCounter2] = useState(() => createInitialCounter('counter2'))
	// console.log('clg')
	// console.log('without useEf current counter:', counter)

	// const total = counter2 + 100

	useEffect(() => {
		localStorage.setItem('counter', counter)
		// return () => console.log('unmounting')
	}, [counter])

	useEffect(() => {
		localStorage.setItem('counter2', counter2)
	}, [counter2])

	return (
		<div>
			<button onClick={() => setCounter(counter + 1)}>{counter}</button>
			<button onClick={() => setCounter2(counter2 + 1)}>{counter2}</button>
			{/* <button onClick={() => setIsShowTimer(!isShowTimer)}>{isShowTimer ? 'Hide' : 'Show'}</button> */}
			{/* {isShowTimer && <Timer />} */}
		</div>
	)
	// return <Posts />
}

export default App
