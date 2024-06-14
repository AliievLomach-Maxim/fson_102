import { useDispatch, useSelector } from 'react-redux'
// import { actionDeposit, actionWithdraw } from '../store/balanceSlice_old'
import { useState } from 'react'
import { actionNewItem } from '../store/itemsSlice'
import CreateItemForm from '../components/CreateItemForm'
import { deposit, withdraw } from '../store/balanceSlice'

const HomePage = () => {
	const balanceValue = useSelector((state) => state.balance.value)

	const dispatch = useDispatch()
	const [value, setValue] = useState(0)

	const handleDeposit = () => {
		dispatch(deposit(value))
	}

	const handleWithdraw = () => {
		dispatch(withdraw(value))
	}

	const submit = (itemObj) => {
		dispatch(actionNewItem(itemObj))
	}

	return (
		<div>
			HomePage
			<hr />
			Balance: {balanceValue}
			<hr />
			<input
				type='number'
				value={value}
				onChange={({ target: { value } }) => setValue(Number(value))}
			/>
			<hr />
			<button onClick={handleDeposit}>Deposit</button>
			<button onClick={handleWithdraw}>Withdraw</button>
			<hr />
			<CreateItemForm submit={submit} />
		</div>
	)
}

export default HomePage
