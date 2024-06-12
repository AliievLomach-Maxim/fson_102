import { useDispatch, useSelector } from 'react-redux'
import { actionDeposit, actionWithdraw } from '../store/balanceSlice'
import { useState } from 'react'

const HomePage = () => {
	const balanceValue = useSelector((state) => state.balance.value)
	const dispatch = useDispatch()
	const [value, setValue] = useState(0)

	const handleDeposit = () => {
		dispatch(actionDeposit(value))
	}

	const handleWithdraw = () => {
		dispatch(actionWithdraw(value))
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
		</div>
	)
}

export default HomePage
