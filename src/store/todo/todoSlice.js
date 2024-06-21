import { createSelector, createSlice } from '@reduxjs/toolkit'
import { deleteTodo, fetchTodo } from './todoOps'
import { selectFilter } from '../filterSlice'

const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		todo: null,
		isLoading: false,
		error: '',
		a: '',
		b: '',
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTodo.pending, (state) => {
				state.isLoading = true
				state.error = ''
			})
			.addCase(fetchTodo.fulfilled, (state, { payload }) => {
				state.todo = payload.todos
				state.isLoading = false
			})
			.addCase(fetchTodo.rejected, (state) => {
				state.isLoading = false
				state.error = ''
			})
			.addCase(deleteTodo.pending, (state) => {
				state.isLoading = true
				state.error = ''
			})
			.addCase(deleteTodo.fulfilled, (state, { payload }) => {
				state.todo = state.todo.filter((el) => el.id !== payload.id)
				state.isLoading = false
			})
			.addCase(deleteTodo.rejected, (state, { error }) => {
				state.isLoading = false
				state.error = error.message
			})
	},
})

export const todoReducer = todoSlice.reducer

export const selectTodo = (state) => state.todo.todo
export const selectLoadingTodo = (state) => state.todo.isLoading
export const selectErrorTodo = (state) => state.todo.error

export const selectFilteredTodo = createSelector(
	[selectTodo, selectFilter],
	(todos, filterText) => {
		return todos?.filter((el) =>
			el.todo.toLowerCase().includes(filterText.toLowerCase())
		)
	}
)
// export const selectFilteredTodo = (state) => {
// 	console.log('selectFilteredTodo')
// const todo = selectTodo(state)
// const filterText = selectFilter(state)
// 	return todo?.filter((el) =>
// 		el.todo.toLowerCase().includes(filterText.toLowerCase())
// 	)
// }

// const foo = (a,b)=>{
// 	return a*b
// }
// foo.cache({'2,5':10})
// foo(2,5)
// foo(3,5)
// foo.cache({'3,5':15})
// export const selectA = (state) => state.todo.a
// export const selectB = (state) => state.todo.b
// export const selectTotal = (state) => {
// 	const a = state.todo.a
// 	const b = state.todo.b
// 	return a + b
// }
