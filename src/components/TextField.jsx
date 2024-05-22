const TextField = ({ value, onChange, name }) => {
	// const handleChange = (e) => {
	// 	onChange(e.target.value)
	// }
	return <input type='text' value={value} onChange={onChange} name={name} />
}

export default TextField
