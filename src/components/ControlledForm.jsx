import { useState } from 'react'
import TextField from './TextField'

const initialValues = {
	name: '',
	phone: 'v',
	address: 'c',
	role: 'w',
}

const ControlledForm = ({ submit }) => {
	const [state, setState] = useState(initialValues)

	const handleSubmit = (e) => {
		e.preventDefault()
		submit(state)

		// reset form
		setState(initialValues)
	}

	const handleChangeName = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<form onSubmit={handleSubmit}>
			<TextField value={state.name} onChange={handleChangeName} name='name' />
			<br />
			<TextField value={state.phone} name='phone' onChange={handleChangeName} />
			<br />
			<TextField value={state.address} onChange={handleChangeName} name='address' />
			<br />
			<TextField value={state.role} onChange={handleChangeName} name='role' />
			<br />
			<button type='submit'>Submit</button>
		</form>
	)
}

export default ControlledForm
