import { useContext, useMemo, useState } from 'react'
import { langContext } from './LangContext'

const UseMemoExample = () => {
	const ctx = useContext(langContext)

	const [a, setA] = useState(0)
	const [b, setB] = useState(0)
	const [c, setC] = useState(0)

	const value = useMemo(() => {
		console.log('Calculating value', Date.now())
		return a + b
	}, [a, b])
	// console.log('result :>> ', result)
	// const value = a + b

	const handleChangeGlobalName = () => {
		ctx.setName('Alex')
	}

	return (
		<div>
			<button onClick={() => setA(a + 1)}>update a: {a}</button>
			<button onClick={() => setB(b + 1)}>update b: {b}</button>
			<button onClick={() => setC(c + 1)}>update c: {c}</button>
			<hr />
			<p>value: {value}</p>
			<hr />
			<button onClick={handleChangeGlobalName}>update Global Name</button>
		</div>
	)
}

export default UseMemoExample
