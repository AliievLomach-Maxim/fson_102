import { useState } from 'react'

const CreateItemForm = ({ submit }) => {
	const [name, setName] = useState('')
	const [secondName, setSecondName] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		submit({ name, secondName })
	}
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={name}
				onChange={({ target: { value } }) => setName(value)}
			/>
			<input
				type='text'
				value={secondName}
				onChange={({ target: { value } }) => setSecondName(value)}
			/>
			<button type='submit'>New Item</button>
		</form>
	)
}

export default CreateItemForm
