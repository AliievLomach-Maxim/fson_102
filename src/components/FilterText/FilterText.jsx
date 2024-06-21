import { useId } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilterText, selectFilter } from '../../store/filterSlice'

const FilterText = () => {
	const dispatch = useDispatch()
	const id = useId()
	const value = useSelector(selectFilter)

	return (
		<div>
			<label htmlFor={id}>Filter by title</label>
			<br />
			<input
				type='text'
				id={id}
				value={value}
				onChange={({ target: { value } }) => dispatch(changeFilterText(value))}
			/>
			<hr />
		</div>
	)
}

export default FilterText
