import { createAction, createReducer, nanoid } from '@reduxjs/toolkit'

export const actionNewItem = createAction('items/newItem', (value) => {
	return {
		payload: { ...value, createdAt: new Date(), isAdmin: false, id: nanoid() },
	}
})

export const actionRemoveItem = createAction('items/removeItem')

const initialState = { item: {} }

export const itemsReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(actionNewItem.type, (state, action) => ({
			...state,
			item: action.payload,
		}))
		.addCase(actionRemoveItem.type, (state, action) => ({
			...state,
			item: action.payload,
		}))
})

// export const itemsReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case actionNewItem.type:
// 			return {
// 				...state,
// 				item: action.payload,
// 			}
// 		default:
// 			return state
// 	}
// }
