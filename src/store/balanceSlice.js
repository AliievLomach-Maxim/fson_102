export const actionDeposit = (value) => ({
	type: 'balance/deposit',
	payload: value,
})

export const actionWithdraw = (value) => ({
	type: 'balance/withdraw',
	payload: value,
})

export const balanceReducer = (
	state = {
		value: 1000,
		comment: '',
	},
	action
) => {
	switch (action.type) {
		case 'balance/deposit':
			return {
				...state,
				value: state.value + action.payload,
			}
		case 'balance/withdraw':
			return {
				...state,
				value: state.value - action.payload,
			}
		default:
			return state
	}
}
