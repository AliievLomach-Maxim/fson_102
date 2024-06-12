const initialState = { item: '' }

export const itemsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'items/new':
			return {
				...state,
				items: action.payload,
			}
		default:
			return state
	}
}
