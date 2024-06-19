import { createSlice } from '@reduxjs/toolkit'
import { deleteTodo, fetchTodo } from './todoOps'

const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		todo: null,
		isLoading: false,
		error: '',
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
			// when error is boolean>>
			// .addCase(deleteTodo.rejected, (state) => {
			//     state.isLoading = false
			//     state.error = true
			// })
			// rejectWithValue >>
			// .addCase(deleteTodo.rejected, (state, { payload }) => {
			// 	state.isLoading = false
			// 	state.error = payload
			// })

			// without trycatch >>
			.addCase(deleteTodo.rejected, (state, { error }) => {
				state.isLoading = false
				state.error = error.message
			})
	},
})

export const todoReducer = todoSlice.reducer
