import { createAction, createReducer } from '@reduxjs/toolkit'

// export const actionDeposit = (value) => ({
// 	type: 'balance/deposit',
// 	payload: value,
// })
// export const actionWithdraw = (value) => ({
// 	type: 'balance/withdraw',
// 	payload: value,
// 	})

export const actionDeposit = createAction('balance/deposit')
export const actionWithdraw = createAction('balance/withdraw')

export const balanceReducer = createReducer(
	{
		value: 1000,
		comment: '',
	},
	(builder) => {
		builder
			.addCase(actionDeposit.type, (state, { payload }) => ({
				...state,
				value: state.value + payload,
			}))
			.addCase(actionWithdraw.type, (state, { payload }) => ({
				...state,
				value: state.value - payload,
			}))
	}
)

// export const balanceReducer = (
// 	state = {
// 		value: 1000,
// 		comment: '',
// 	},
// 	action
// ) => {
// 	switch (action.type) {
// 		case actionDeposit.type:
// 			return {
// 				...state,
// 				value: state.value + action.payload,
// 			}
// 		case actionWithdraw.type:
// 			return {
// 				...state,
// 				value: state.value - action.payload,
// 			}
// 		default:
// 			return state
// 	}
// }
